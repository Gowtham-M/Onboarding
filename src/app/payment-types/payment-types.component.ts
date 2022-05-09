//importing necessary modules for the component
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { BankregistrationComponent } from '../bankregistration/bankregistration.component';

@Component({
  selector: 'app-payment-types',
  templateUrl: './payment-types.component.html',
  styleUrls: ['./payment-types.component.css']
})
export class PaymentTypesComponent implements OnInit {
  //declaring variables that get input data through two way binding
  public checkbox_arr = [false, false, false];
  public checkbox_name = ['IMPS', 'RTGS', 'NEFT'] 
  
  //intialising variables for modules in the constructor
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
//defining post submitPayments method.
  submitPayments(){
    var payment_types = [] 
    console.log(this.checkbox_arr)
    for (let i = 0; i < 3; i++){
      let j = i;
      if (this.checkbox_arr[i]){
        payment_types.push(j, this.checkbox_name[i])
      }
    }
    const payment_body = {ptypes: payment_types}

      let url = 'http://localhost:3000/payment-types'
      let body = payment_body
      return this.http.post<any>(url, payment_body);
        
      }
  //Connecting to the  api and posting data into api as an object through postLoginData() method
  payments(){
    this.submitPayments().subscribe(data => { 
      console.log(data)
    })
  }
  
} 
  


