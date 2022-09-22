import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataServicesService {
  database: any = {
    100080009000: {
      acno: 100080009000,
      name: 'munna',
      password: 'munna1234',
      balance: 12000,
    },
    200050008000: {
      acno: 200050008000,
      name: 'Rahul',
      password: 'rahul1234',
      balance: 10000,
    },
    200088888000: {
      acno: 200088888000,
      name: 'Shaheer',
      password: 'shaheer1234',
      balance: 15000,
    },
    200088889000: {
      acno: 200088889000,
      name: 'Shanid',
      password: 'shanid1234',
      balance: 15000,
    },
    200088779000: {
      acno: 200088779000,
      name: 'Dimal',
      password: 'dimal1234',
      balance: 15000,
    },
  };
  constructor() {}

  signUp(acno: any, uname: any, pswd: any, balance: number) {
    if (acno in this.database) {
      alert('User already exist');
    } else {
      this.database[acno] = {
        acno: acno,
        name: uname,
        password: pswd,
        balance: balance,
      };
      localStorage.setItem('user', JSON.stringify(this.database));
      console.log(this.database);
    }
  }
}
