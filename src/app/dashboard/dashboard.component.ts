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
  balance: number = 0;
  name: any = '';
  acno: any = localStorage.getItem('acno');

  dashboardForm = this.fb.group({
    drawMoney: [
      '',
      [
        Validators.required,
        Validators.pattern('[0-9]*'),
        Validators.minLength(1),
        Validators.maxLength(5),
      ],
    ],
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
  ) {}

  ngOnInit(): void {
    var acno = JSON.parse(localStorage.getItem('acno') || '[]');
    this.balance = this.db.database[acno]['balance'];
    this.name = this.db.database[acno]['name'];
    this.acno = this.db.database[acno]['acno'];
  }

  clickWithdraw() {
    var acno = JSON.parse(localStorage.getItem('acno') || '[]');
    var drawmoney: any = this.dashboardForm.value.drawMoney;
    this.balance = this.db.database[acno]['balance'] - drawmoney;
    this.db.database[acno]['balance'] = this.balance;
  }
  clickDeposit() {
    var acno = JSON.parse(localStorage.getItem('acno') || '[]');

    var withdrawmoney: any = this.dashboardForm.value.depositMoney;

    this.balance =
      Number(this.db.database[acno]['balance']) + Number(withdrawmoney);
    this.db.database[acno]['balance'] = this.balance;
  }
}
