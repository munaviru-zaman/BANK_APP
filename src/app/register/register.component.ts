import { Component, OnInit } from '@angular/core';
import { DataServicesService } from '../services/data-services.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  accNo: number = 0;
  uName: any = '';
  pWord: any = '';

  userStorageDB: any = ['this.accNo'];

  constructor(private ds: DataServicesService) {}

  ngOnInit(): void {}

  getAccountno(event: any) {
    this.accNo = event.target.value;
    console.log(this.accNo);
  }

  getUserName(event: any) {
    this.uName = event.target.value;
    console.log(this.uName);
  }
  getPassWord(event: any) {
    this.pWord = event.target.value;
    console.log(this.pWord);
  }

  signUp() {
    this.ds.signUp(this.accNo, this.uName, this.pWord);
    console.log(this.ds.database);
  }
}
