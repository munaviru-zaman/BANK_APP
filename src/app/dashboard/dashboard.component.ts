import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServicesService } from '../services/data-services.service';
const options = {
  headers: new HttpHeaders(),
};
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  balance: any;
  pswd: any;
  name: any;
  acno: any;
  drawamnt: any;
  depositamnt: any;
  time: any;
  delacc: any;
  transArray: any;

  // -------depositForm------------

  depositForm = this.fb.group({
    depositamnt: [
      '',
      [
        Validators.required,
        Validators.pattern('[0-9]*'),
        Validators.minLength(1),
        Validators.maxLength(5),
      ],
    ],
    depositAcno: [
      '',
      [
        Validators.required,
        Validators.pattern('[0-9]*'),
        Validators.minLength(5),
      ],
    ],
    depositPswd: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(5)],
    ],
  });
  withdrawForm = this.fb.group({
    withdrawamnt: [
      '',
      [
        Validators.required,
        Validators.pattern('[0-9]*'),
        Validators.minLength(1),
        Validators.maxLength(5),
      ],
    ],
    withdrawAcno: [
      '',
      [
        Validators.required,
        Validators.pattern('[0-9]*'),
        Validators.minLength(5),
      ],
    ],
    withdrawPswd: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(5)],
    ],
  });

  constructor(
    private db: DataServicesService,
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.time = new Date();
  }

  ngOnInit(): void {
    this.acno = JSON.parse(localStorage.getItem('currentAcno') || '');
    this.balance = localStorage.getItem('balance');
    this.name = JSON.parse(localStorage.getItem('currentUserName') || '[]');
    this.transArray = JSON.parse(localStorage.getItem('transaction') || '');

    if (!localStorage.getItem('currentAcno')) {
      alert('Please login again');
      this.router.navigateByUrl('login-page');
    }
  }

  // clickWithdraw() {

  deposit() {
    if (this.depositForm.valid) {
      var acno = this.depositForm.value.depositAcno;
      var pswd = this.depositForm.value.depositPswd;
      var amnt = this.depositForm.value.depositamnt;
      console.log('initial', acno, pswd, amnt);
      const userDeposit = {
        acno,
        pswd,
        amnt,
      };

      return this.http
        .post('http://localhost:3002/deposit', userDeposit, this.getOptions())
        .subscribe(
          (result: any) => {
            if (result) {
              alert(result.message);
              this.transArray = JSON.parse(
                localStorage.getItem('transaction') || ''
              );
            }
          },
          (result: any) => {
            alert(result.error.message);
          }
        );
    } else {
      return alert(console.log('Error occured'));
    }
  }

  //---------withdraw-----------
  withdraw() {
    if (this.withdrawForm.valid) {
      var acno = this.withdrawForm.value.withdrawAcno;
      var pswd = this.withdrawForm.value.withdrawPswd;
      var amnt = this.withdrawForm.value.withdrawamnt;
      console.log('initial', acno, pswd, amnt);
      const userWithdraw = {
        acno,
        pswd,
        amnt,
      };
      return this.http
        .post('http://localhost:3002/withdraw', userWithdraw, this.getOptions())
        .subscribe(
          (result: any) => {
            if (result) {
              alert(result.message);
            }
          },
          (result: any) => {
            alert(result.error.message);
          }
        );
    } else {
      return alert(console.log('Error occured'));
    }
  }

  getOptions() {
    var token = JSON.parse(localStorage.getItem('token') || '[]');
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.append('token-value', token);
      options.headers = headers;
    }
    return options;
  }

  logout() {
    localStorage.removeItem('currentAcno');
    this.router.navigateByUrl('login-page');
  }

  deletacc() {
    this.delacc = JSON.parse(localStorage.getItem('currentAcno') || '');
  }

  cancel() {
    this.delacc = '';
  }

  delete(event: any) {
    this.db.delete(event).subscribe(
      (result: any) => {
        if (result) {
          alert(result.message);
          localStorage.removeItem('currentAcno');
          this.router.navigateByUrl('login-page');
        }
      },
      (result) => {
        alert(result.error.message);
      }
    );
  }
}

// if (this.depositForm.valid) {
//   var depositmoney: any = this.depositForm.value.depositMoney;
//   const money = 100000 - this.balance;
//   if (depositmoney > money) {
//     alert('Sorry, Make your Wallet BIG...');
//   } else {
//     this.balance =
//       Number(this.database[this.acno]['balance']) + Number(depositmoney);
//     this.database[this.acno]['balance'] = this.balance;

//     localStorage.setItem('balance', this.balance);
//   }
// } else {
//   alert('Something Went Wrong');
// }

// if (this.withdrawForm.valid) {
//   var drawmoney: any = this.withdrawForm.value.amnt;
//   if (this.balance == 0) {
//     alert('Sorry, You are BROKE...');
//   } else if (drawmoney > Number(this.balance)) {
//     alert('YOU DONT HAVE ENOUGH MONEY');
//   } else {
//     this.balance = this.database[this.acno]['balance'] - drawmoney;
//     this.database[this.acno]['balance'] = this.balance;
//     localStorage.setItem('balance', this.balance);
//     this.balance = localStorage.getItem('balance');
//   }
// } else {
//   alert('Something Went Wrong');
// }
