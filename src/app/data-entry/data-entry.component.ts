import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})
export class DataEntryComponent implements OnInit {
  public bic:any;
  public institution_name:any;
  public branch_information:any;
  public address_line:any;
  public town_name:any;
  public country_subdivision:any;
  public post_code:any;
  public country_name:any;
  public country_code:any;
  public office_type:any;
  public currency: any;
  public paymentTypes:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  bankData(){
    let url = 'http://localhost:3000/insert';
    let body = { 
      bic:this.bic,
      institution_name:this.institution_name,
      branch_information:this.branch_information,
      address_line:this.address_line,
      town_name:this.town_name,
      country_subdivision:this.country_subdivision,
      post_code:this.post_code,
      country_name:this.country_name,
      country_code:this.country_code,
      office_type:this.office_type,
      currency: this.currency,
      }
      this.http.post<any>(url, body).subscribe(data=>{
        console.log(data)
      })
  }

}
