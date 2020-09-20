import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { UserService } from 'src/app/shared/user.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  constructor(public userService: UserService) { }
  model={
    email:'',
    password:''
  }
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  ngOnInit() {
  }
  onSubmit(form:NgForm){
    return this.userService.loginUser(form.value).subscribe(
      
    )
  }
}
