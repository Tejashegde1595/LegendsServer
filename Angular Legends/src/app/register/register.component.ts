import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User'
import { RegisterserviceService } from './registerservice.service';
import {  Router } from '@angular/router'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  response:string;
  constructor(private registerservice:RegisterserviceService,private router:Router) {

   }

  ngOnInit() {
  }


  Register(user:User){

    console.log(JSON.stringify(user));
    this.registerservice.registeruser(user).subscribe(result=>{
     this.response = "Successfully registered"
    },err=>{     this.response= "Username or Password Already Exists";
    })


  }

  loginUser(){
    console.log("login");
    this.router.navigate(['login']);
  }
}
