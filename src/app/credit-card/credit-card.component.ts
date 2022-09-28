import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServicesService } from '../services/data-services.service';

@Component({
  selector: 'credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css'],
})
export class CreditCardComponent implements OnInit {
  name: any;
  acno: any;
  balance: any;
  pan: any;
  aadhar: any;
  database: any = {};
  dummyarray: any = [];

  creditForm = this.fb.group({
    ACNO: [
      '',
      [
        Validators.required,
        Validators.pattern('[0-9]*'),
        Validators.maxLength(15),
      ],
    ],
    NAME: ['', [Validators.required, Validators.pattern('[ a-zA-Z]*')]],
    PAN: [
      '',
      [
        Validators.required,
        Validators.pattern('[0-9]*'),
        Validators.maxLength(8),
      ],
    ],
    AADHAR: [
      '',
      [
        Validators.required,
        Validators.pattern('[0-9]*'),
        Validators.maxLength(8),
      ],
    ],
  });
  constructor(
    private db: DataServicesService,
    private route: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  getacno(event: any) {
    this.acno = event.target.value;
    if (this.acno in this.db.database) {
      this.name = this.db.database[this.acno]['name'];
      this.balance = this.db.database[this.acno]['balance'];
      console.log(this.name);
    } else {
      this.balance = 8000;
    }
  }

  apply() {
    if (this.creditForm.valid) {
      var accno: any = this.creditForm.value.ACNO;
      var name: any = this.creditForm.value.NAME;
      var pan: any = this.creditForm.value.PAN;
      var aadhar: any = this.creditForm.value.AADHAR;
      this.database[accno] = {
        accountNumber: accno,
        name: name,
        pan: pan,
        aadhar: aadhar,
        balance: 8000,
      };
      console.log(this.database);

      this.dummyarray.push(this.database[accno]);
      console.log(this.dummyarray);
      alert('eda mwone fill aayada');
    } else {
      alert('eda mwone fill aakkada');
    }
  }

  // this.database[this.acno] = {
  //   acno: this.acno,
  //   name: this.name,
  //   pan: this.pan,
  //   aadhar: this.aadhar,
  //   balance: this.balance,
  // };
}
