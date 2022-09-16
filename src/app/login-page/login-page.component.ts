import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
accountNumber:number=0
password:any=''
database:any={
  1000:{
    acno:1000,password:1000
  }
}

  constructor() { }

  ngOnInit(): void {
  }

  accountno(event:any){
    this.accountNumber=event.target.value
    console.log(this.accountNumber)
  }

  passWord(event:any){
    this.password=event.target.value
    console.log(this.password);
    
  }

  login(){
    var acno=this.accountNumber
    var pswd=this.password
    if(acno in this.database){
      if(pswd==this.database[acno]["password"]){
        alert("LOGIN SUCCESSFULLY")
      }else{
        alert("INCORRECT PASSWORD")
      }
    }else{
      alert("USER DOES NOT EXISTS")
    }
  }

}
