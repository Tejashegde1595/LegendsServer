import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User'
import { LoginserviceService } from './loginservice.service';
import {  Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  response:string;
  constructor(private loginservice:LoginserviceService,private router:Router) { 

  }

  ngOnInit() {
  }

  Login(user:User){
    console.log(JSON.stringify(user));
    return this.loginservice.loginuser(user).subscribe(result=>{
      localStorage.setItem("token",JSON.parse(JSON.stringify(result)).token);
      this.router.navigate(['players']);
    },err=>{
      this.response = "Error Occurred.Please check Username and Password";
    })
  }

  register()
  {
    this.router.navigate(['register']);
  }

}
