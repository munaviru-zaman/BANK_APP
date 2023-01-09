import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

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
      PAN: '',
      Aadhar: '',
    },
    200050008000: {
      acno: 200050008000,
      name: 'Rahul',
      password: 'rahul1234',
      balance: 10000,
      PAN: '',
      Aadhar: '',
    },
    200088888000: {
      acno: 200088888000,
      name: 'Shaheer',
      password: 'shaheer1234',
      balance: 15000,
      PAN: '',
      Aadhar: '',
    },
    200088889000: {
      acno: 200088889000,
      name: 'Shanid',
      password: 'shanid1234',
      balance: 15000,
      PAN: '',
      Aadhar: '',
    },
    200088779000: {
      acno: 200088779000,
      name: 'Dimal',
      password: 'dimal1234',
      balance: 15000,
      PAN: '',
      Aadhar: '',
    },
  };
  constructor(private router: Router, private http: HttpClient) {}

  storeDatabase() {
    localStorage.setItem('database', JSON.stringify(this.database));
  }

  signUp(acno: any, name: any, pswd: any, balance: number) {
    const user = {
      acno,
      name,
      pswd,
      balance,
    };
    return this.http.post('http://localhost:3002/signup', user);
  }

  login(acno: any, pswd: any) {
    const loginUser = {
      acno,
      pswd,
    };
    return this.http.post('http://localhost:3002/login', loginUser);
  }

  delete(acno: any) {
    return this.http.delete('http://localhost:3002/delete/' + acno);
  }
}
