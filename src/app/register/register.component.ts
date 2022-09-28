import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServicesService } from '../services/data-services.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  // accNo: number = 0;
  // uName: any = '';
  // pWord: any = '';

  userStorageDB: any = ['this.accNo'];

  signUpForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pWord: ['', [Validators.required, Validators.minLength(5)]],
  });

  constructor(
    private ds: DataServicesService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  signUp() {
    if (this.signUpForm.valid) {
      var acno: any = this.signUpForm.value.acno;
      var name: any = this.signUpForm.value.name;
      var pword: any = this.signUpForm.value.pWord;
      this.ds.signUp(acno, name, pword, 8000);
      console.log(this.ds.database);
      this.router.navigateByUrl('login-page');
    } else {
      alert('error');
    }
  }
}
