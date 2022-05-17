import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DbService } from 'src/app/db.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user = this.dbservice.getCurrentUser()
  // retrieve the list of users
  users:any 
  constructor(private fb: FormBuilder, private dbservice: DbService, private http:HttpClient) { }

  ngOnInit(): void {
    let url = "http://localhost:3000/getusers"
     this.http.get(url).subscribe(data =>{
       this.users = data
     })
  }
  

  userForm = this.fb.group({ username: '', password: '', isAdmin: false, status: 'P' })

  save() {
    // Add a new user to the database
    this.addUser(this.userForm.value)
    this.userForm = this.fb.group({ username: '', password: '', isAdmin: false, status: 'P' })
    
    
  }
  addUser(value:any){
    let url = "http://localhost:3000/adduser"
    let body = {username:this.userForm.value.username, password:this.userForm.value.password, isAdmin:this.userForm.value.isAdmin, status:this.userForm.value.status}
    this.http.post(url, body).subscribe(data=>{
      this.users.push(data)
    })
  }
}
