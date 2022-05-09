import { Component } from '@angular/core';
import {Router} from '@angular/router'
import {AppServiceService} from './app-service.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to training!!';
  data:any;
  constructor (private router:Router, private user: AppServiceService){
    this.user.getData().subscribe(data => {
      console.warn(data)
      this.data = data;
    })
  }

  card = '../assets/sirasia.jpeg';
  
  choice = false;
  
  show(){
    alert('Button Clicked')
  }
}
