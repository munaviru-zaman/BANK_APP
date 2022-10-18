import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServicesService } from '../services/data-services.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  balance: any;
  name: any;
  acno: any;
  time: any;
  delacc: any;
  // withdrawForm: any;
  database: any;
  // depositForm: any;

  withdrawForm = this.fb.group({
    drawMoney: [
      '',
      [
        Validators.required,
        Validators.pattern('[0-9]*'),
        Validators.minLength(1),
        Validators.maxLength(5),
      ],
    ],
  });

  depositForm = this.fb.group({
    depositMoney: [
      '',
      [
        Validators.required,
        Validators.pattern('[0-9]*'),
        Validators.minLength(1),
        Validators.maxLength(5),
      ],
    ],
  });

  constructor(
    private db: DataServicesService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.time = new Date();
  }

  ngOnInit(): void {
    this.acno = localStorage.getItem('acno');
    this.balance = localStorage.getItem('balance');
    this.name = localStorage.getItem('name');

    // if (!localStorage.getItem('acno')) {
    //   alert('Please login again');
    //   this.router.navigateByUrl('login-page');
    // }
  }

  clickWithdraw() {
    if (this.withdrawForm.valid) {
      var drawmoney: any = this.withdrawForm.value.drawMoney;

      if (this.balance == 0) {
        alert('Sorry, You are BROKE...');
      } else if (drawmoney > Number(this.balance)) {
        alert('YOU DONT HAVE ENOUGH MONEY');
      } else {
        this.balance = this.database[this.acno]['balance'] - drawmoney;
        this.database[this.acno]['balance'] = this.balance;
        localStorage.setItem('balance', this.balance);
        this.balance = localStorage.getItem('balance');
      }
    } else {
      alert('Something Went Wrong');
    }
  }

  clickDeposit() {
    if (this.depositForm.valid) {
      var depositmoney: any = this.depositForm.value.depositMoney;
      const money = 100000 - this.balance;
      if (depositmoney > money) {
        alert('Sorry, Make your Wallet BIG...');
      } else {
        this.balance =
          Number(this.database[this.acno]['balance']) + Number(depositmoney);
        this.database[this.acno]['balance'] = this.balance;

        localStorage.setItem('balance', this.balance);
      }
    } else {
      alert('Something Went Wrong');
    }
  }

  logout() {
    localStorage.removeItem('acno');
    this.router.navigateByUrl('login-page');
  }

  deletacc() {
    this.delacc = JSON.parse(localStorage.getItem('acno') || '');
  }

  cancel() {
    this.delacc = '';
  }

  delete(event: any) {
    alert('acount deleted');
  }
}
