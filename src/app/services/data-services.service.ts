import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataServicesService {
  database: any = {
    1000: {
      accountNumber: 1000,
      password: 1000,
    },
  };
  constructor() {}

  signUp(acno: any, uname: any, pswd: any) {
    if (acno in this.database) {
      return false;
    } else {
      this.database[acno] = {
        accountNumber: acno,
        userName: uname,
        passWord: pswd,
      };
      return true;
    }
  }
}
