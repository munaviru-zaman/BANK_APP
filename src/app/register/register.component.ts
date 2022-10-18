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
    name: ['', [Validators.required, Validators.pattern('[ a-zA-Z]*')]],
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.minLength(5)]],
  });

  constructor(
    private service: DataServicesService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  signUp() {
    var acno: any = this.signUpForm.value.acno;
    var name: any = this.signUpForm.value.name;
    var pswd: any = this.signUpForm.value.pswd;
    if (this.signUpForm.valid) {
      this.service.signUp(acno, name, pswd, 0).subscribe(
        (result: any) => {
          if (result) {
            alert(result.message);
            this.router.navigateByUrl('login-page');
          }
        },
        (result) => {
          alert(result.error.message);
        }
      );
    }
  }
}
