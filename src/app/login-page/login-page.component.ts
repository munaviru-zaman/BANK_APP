import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServicesService } from '../services/data-services.service';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  accountNumber: number = 0;
  password: any = '';

  constructor(private db: DataServicesService, private router: Router) {}

  ngOnInit(): void {}

  accountno(event: any) {
    this.accountNumber = event.target.value;
    console.log(this.accountNumber);
  }

  passWord(event: any) {
    this.password = event.target.value;
    console.log(this.password);
  }

  login() {
    var acno = this.accountNumber;
    var pswd = this.password;
    if (acno in this.db.database) {
      if (pswd == this.db.database[acno]['password']) {
        localStorage.setItem('acno', JSON.stringify(acno) || '[]');
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
