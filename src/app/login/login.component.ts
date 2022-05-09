//importing necessary components for login components.
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //declaring variables that get input data through two way binding
  public userName = ''
  public password = ''
  public error = ''

  //intialising variables for modules in the constructor
  constructor(private http: HttpClient, private route: Router) {
    
   }

  ngOnInit(): void {
    
  }
//Connecting to the login api and posting data into api as an object through postLoginData() method
  postLoginData() {

    let url = 'http://localhost:3000/login'
    let body = {name:this.userName, pass: this.password}
    return this.http.post<any>(url, body);
  }

//defining login() which will be called from the html component and is triggered when Submit button is clicked 
  login () {
    this.postLoginData().subscribe(data => {
      //navigating to next page if data is inserted successfully 
      if (data){
        console.log('coming to router navigation')
         this.route.navigate(["/bank-registration"])
      }
      else{
        this.error = 'Wrong username and password'
      }
    })
  }

  

}
