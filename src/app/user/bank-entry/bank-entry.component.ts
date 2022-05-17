import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DbService } from 'src/app/db.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bank-entry',
  templateUrl: './bank-entry.component.html',
  styleUrls: ['./bank-entry.component.css']
})
export class BankEntryComponent implements OnInit {

  bank: any
  isHidden: boolean = true
  entryForm: any
  user = this.dbservice.getCurrentUser()

  // multiselect drop down variables
   dropdownList_Currency: any = [];
   dropdownList_PaymentRails:any = [];
   selectedItems_Currency: any = [];
   selectedItems_Rails :any= [];
  dropdownSettings = {};
  // constructor
  constructor(private fb: FormBuilder, private dbservice: DbService, private http:HttpClient) { }

  ngOnInit(): void {
    this.dropdownList_Currency = [
      "RUB","AFN","EUR","ALL","GBP","GGP","DZD","EUR","AOA","XCD","ARS","AMD","AWG","SHP","AUD","EUR","AZN","BSD","BHD","BDT","BBD","BYN","BZD","XOF",
      "BMD","BTN","INR","BOB","USD","BAM","BWP","BRL","USD","BND","SGD","BGN","XOF","BIF","KHR","XAF","CAD","CVE","KYD","CLP","CNY","COP","KMF","CDF","CKD","NZD","CRC","HRK",
      "CUP","ANG","EUR","CZK","DKK","DJF","XCD","DOP","EGP","ERN","SZL","ZAR","ETB","FKP","FOK","FJD","XPF","GMD","GEL","GHS","GIP","GTQ","GGP","GBP","GNF","GYD","HTG","HNL","HKD","HUF","ISK",
      "IDR","IRR","IQD","ILS","JMD","JPY","JEP","JOD","KZT","KES","KID","AUD","KPW","KRW","KWD","KGS","LAK","LBP","LSL"
    ];
    this.dropdownList_PaymentRails = [
    "RTGS",
    "NEFT",
    "UPI",
    "ACH",
    "PayPal",
    "RTP"
    ];
    this.selectedItems_Currency = [
    ];
    this.selectedItems_Rails =[
  
    ];
    this.dropdownSettings= {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.cancel()
  }
  


  getBank(bic: string) {
    // get bank from swift ref for a given bic
    let url = 'http://localhost:3000/search'
    let body = {bic:bic}
    this.http.post(url,body).subscribe(data=>{
      this.bank = data
    })
    this.isHidden = false
  }
  


  save() {
    // add a partner bank to the partnerbank collection based on the above bic
    let url = "http://localhost:3000/addpartner"
    let pbd = {bic:this.bank?.bic,
    institute_name:this.bank?.institute_name,
    br_info:this.bank?.br_info,
    address:{
      add_line:this.bank?.address.add_line,
      town_name:this.bank?.address.town_name,
      country_subdiv:this.bank?.address.country_subdiv,
      post_code:this.bank?.address.post_code,
      cntry_name:this.bank?.address.cntry_name,
      cntry_code:this.bank?.address.cntry_code
    },
    currency:this.selectedItems_Currency,
    paymentRails:this.selectedItems_Rails
  } 
  this.http.post(url, pbd).subscribe(data =>{
    console.log(data)
  })
    this.cancel()
  }

  cancel() {
    this.isHidden = true
    this.entryForm = this.fb.group({ bic: '', currency: '', payMode: '' })
  }
}
