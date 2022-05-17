import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DbService } from 'src/app/db.service';
// import { threadId } from 'worker_threads';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {

  bic: any
  mode: any
  count: number = 0
  statusChanged: boolean = false
  currencyChanged: boolean = false
  paymodeChanged: boolean = false

  user: any
  bank: any
  detailsForm: any
  // drop down variables
  dropdownList_Currency: any = [];
   dropdownList_PaymentRails:any = [];
   selectedItems_Currency: any = [];
   selectedItems_Rails :any= [];
  dropdownSettings = {};
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private dbservice: DbService, private http:HttpClient) { }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap
    this.bic = params.get('bic')
    this.mode = params.get('mode')

    this.user = this.dbservice.getCurrentUser()
    // get a partner bank given bic

    let url = 'http://localhost:3000/findPartnerBank'
    let body = {bic:this.bic}
    this.http.post(url,body).subscribe(data =>{
      console.log(data)
      this.bank = data
      this.selectedItems_Currency = this.bank?.currency
      this.selectedItems_Rails = this.bank?.paymentRails
    })
    this.detailsForm = this.fb.group({
      status: '',
      currency: this.bank?.currency,
      payMode: this.bank?.paymentRails })
    

  // drop down methods
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
  "ACH"
  ];
  // this.selectedItems_Currency = [

  // ];
  // this.selectedItems_Rails =[

  // ];
  this.dropdownSettings= {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };

  
  }
  

  getChanges() {
    this.count = 0
    if (this.selectedItems_Currency != this.bank?.currency) {
      this.count += 1
      this.currencyChanged = true
    }
    if (this.selectedItems_Rails != this.bank?.paymentRails) {
      this.count += 1
      this.paymodeChanged = true
    }
    if (this.detailsForm.value.status != this.bank?.status) {
      this.count += 1
      this.statusChanged = true
    }
  }

  saveChanges() {
    // currencies, payment and status options are updated for the above retrieved bank.
    let url = "http://localhost:3000/partnerBankUpdate"
    let body = {bic:this.bic, status:this.detailsForm.value.status, currency:this.selectedItems_Currency, paymentRails:this.selectedItems_Rails}
    this.http.post(url,body).subscribe(data =>{
      console.log(data)
    })

  }

  cancel() {
    this.statusChanged = false
    this.currencyChanged = false
    this.paymodeChanged = false
  }

}
