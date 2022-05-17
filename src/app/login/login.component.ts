import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbService } from '../db.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any
  isInvalid = false
  constructor(private fb: FormBuilder, private router: Router, private dbservice: DbService, private http:HttpClient) {}
  ngOnInit() {
    this.user = this.dbservice.getCurrentUser()
    if (this.user) { this.redirect(this.user.isAdmin) }
  }

  loginForm = this.fb.group({ username: '', password: '' })

  login() {
    // From the database get a user given username and authenticate with password
    let url = "http://localhost:3000/getOneUser"
    let body = {username:this.loginForm.value.username}
      this.http.post(url, body).subscribe(data =>{
      this.user = data
      if (this.user?.password != this.loginForm.value.password) {
        this.isInvalid = true
        this.loginForm.reset()
      }
      else {
        this.dbservice.setCurrentUser(this.user)
        this.redirect(this.user.isAdmin)
      }
    }) 
    // this.user = this.getUser(this.loginForm.value.username)
    // console.log(this.user)
    
  }
  // getUser(username:String){
  //   let url = "http://localhost:3000/getOneUser"
  //   let body = {username:username}
  //   return this.http.post(url, body).subscribe(data =>{
  //     console.log(data)
  //   })

  // }

  redirect(isAdmin: boolean) {
    if (isAdmin) { this.router.navigate(['/admin']) }
    else { this.router.navigate(['/user']) }
  }

}
