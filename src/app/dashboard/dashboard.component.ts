import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServicesService } from '../services/data-services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  balance: number = 0;
  name: any = '';
  acno: any = '';
  depositMoney: number = 0;
  drawMoney: number = 0;
  constructor(private db: DataServicesService, private router: Router) {}

  ngOnInit(): void {
    var acno = JSON.parse(localStorage.getItem('acno') || '[]');
    this.balance = this.db.database[acno]['balance'];
    this.name = this.db.database[acno]['name'];
    this.acno = this.db.database[acno]['acno'];
  }

  withdraw(event: any) {
    this.drawMoney = event.target.value;
  }

  deposit(event: any) {
    this.depositMoney = event.target.value;
  }

  clickWithdraw() {
    var acno = JSON.parse(localStorage.getItem('acno') || '[]');
    this.balance = this.db.database[acno]['balance'] - this.drawMoney;
    this.db.database[acno]['balance'] = this.balance;
  }
  clickDeposit() {
    var acno = JSON.parse(localStorage.getItem('acno') || '[]');
    this.balance =
      Number(this.db.database[acno]['balance']) + Number(this.depositMoney);
    this.db.database[acno]['balance'] = this.balance;
  }
}
