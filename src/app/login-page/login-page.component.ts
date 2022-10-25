import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServicesService } from '../services/data-services.service';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  // currentDB: any = JSON.parse(localStorage.getItem('database') || '[]');
  // currentUser: any;
  // curentUserName: any;
  // currentBalance: any;

  loginForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.minLength(5)]],
  });
  constructor(
    private db: DataServicesService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  login() {
    var acno: any = this.loginForm.value.acno;
    var pswd: any = this.loginForm.value.pswd;
    if (this.loginForm.valid) {
      this.db.login(acno, pswd).subscribe(
        (result: any) => {
          if (result) {
            alert(result.message);
            localStorage.setItem(
              'currentAcno',
              JSON.stringify(result.currentacno)
            );
            localStorage.setItem(
              'currentUserName',
              JSON.stringify(result.currentUser)
            );
            localStorage.setItem(
              'transaction',
              JSON.stringify(result.transaction)
            );
            localStorage.setItem('token', JSON.stringify(result.token));
            this.router.navigateByUrl('dashboard');
          }
        },
        (result) => {
          alert(result.error.message);
        }
      );
      // if (acno in this.db.database) {
      //   if (pswd == this.db.database[acno]['password']) {
      //     localStorage.setItem('username', this.db.database[acno]['name']);
      //     this.currentUser = localStorage.setItem(
      //       'acno',
      //       JSON.stringify(acno) || '[]'
      //     );
      //     alert('LOGIN SUCCESSFULLY');
      //     this.router.navigateByUrl('dashboard');
      //   } else {
      //     alert('INCORRECT PASSWORD');
      //   }
      // } else {
      //   alert('USER DOES NOT EXISTS');
      // }
      // localStorage.setItem('name', this.currentDB[acno]['name']);
      // localStorage.setItem('balance', this.currentDB[acno]['balance']);
      // localStorage.setItem('acno', acno);
    }
  }
}
