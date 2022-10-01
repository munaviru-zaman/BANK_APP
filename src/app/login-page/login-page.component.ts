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
  currentUser: any;
  curentUserName: any;

  loginForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pWord: ['', [Validators.required, Validators.minLength(5)]],
  });
  constructor(
    private db: DataServicesService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  login() {
    var acno: any = this.loginForm.value.acno;
    var pswd: any = this.loginForm.value.pWord;
    if (acno in this.db.database) {
      if (pswd == this.db.database[acno]['password']) {
        localStorage.setItem('username', this.db.database[acno]['name']);
        this.currentUser = localStorage.setItem(
          'acno',
          JSON.stringify(acno) || '[]'
        );
        alert('LOGIN SUCCESSFULLY');
        this.router.navigateByUrl('dashboard');
      } else {
        alert('INCORRECT PASSWORD');
      }
    } else {
      alert('USER DOES NOT EXISTS');
    }
  }
}
