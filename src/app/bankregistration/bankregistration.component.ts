//importing necessary modules for the component
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
// import { threadId } from 'worker_threads';

@Component({
  selector: 'app-bankregistration',
  templateUrl: './bankregistration.component.html',
  styleUrls: ['./bankregistration.component.css']
})
export class BankregistrationComponent implements OnInit {
 
  //declaring variables that get input data through two way binding
  // public bankName = ''
  icici = '../assets/icici_bank_logo_symbol.png';
  public isDataAvailable = false
  public BANKID = ''
  public invalid = false
  public currency = ''
  // public IFSC = ''
  public bankData:any
  public paymentType = ''
  public checkbox_arr = [false, false, false];
  public checkbox_name = ['IMPS', 'RTGS', 'NEFT'] 
  //dropdown
  public item_id:any;
  public item_text:any;
  public dropdownList_Currency: { item_id: number; item_text: string }[] = [];
  public dropdownList_PaymentRails: { item_id: number; item_text: string }[] = [];
  title = 'angular 10';
  public selectedItems_Currency: { item_id: number; item_text: string }[] = [];
  public selectedItems_Rails: { item_id: number; item_text: string }[] = [];
  dropdownSettings = {};
  //intialising variables for modules in the constructor
  constructor(private http: HttpClient, private route: Router) { }


  ngOnInit(): void {
    this.dropdownList_Currency = [
      { item_id: 1, item_text: 'INR' },
      { item_id: 2, item_text: 'USD' },
      { item_id: 3, item_text: 'YUAN' },
      { item_id: 4, item_text: 'EUR' },
      { item_id: 5, item_text: 'KWD' },
      { item_id: 6, item_text: 'AFN' },
      { item_id: 7, item_text: 'ALL' },
      { item_id: 8, item_text: 'DZD' },
      { item_id: 9, item_text: 'AOA' },
      { item_id: 10, item_text: 'XCD' },
      { item_id: 11, item_text: 'ARS' },
      { item_id: 12, item_text: 'AMD' },
      { item_id: 13, item_text: 'AWG' },
      { item_id: 14, item_text: 'AUD' },
      { item_id: 15, item_text: 'AZN' },
      { item_id: 16, item_text: 'BSD' },
      { item_id: 17, item_text: 'BHD' },
      { item_id: 18, item_text: 'BDT' },
      { item_id: 19, item_text: 'BBD' },
      { item_id: 20, item_text: 'BYR' },
      { item_id: 21, item_text: 'BAM' },
      { item_id: 22, item_text: 'BGN' },
      { item_id: 23, item_text: 'BTN' },
      { item_id: 24, item_text: 'BZD' },
      { item_id: 25, item_text: 'BYN' },
      { item_id: 26, item_text: 'BWP' },
      { item_id: 27, item_text: 'BRL' },
      { item_id: 28, item_text: 'BOB' },
      { item_id: 29, item_text: 'BND' },
      { item_id: 30, item_text: 'BMD' },
      { item_id: 31, item_text: 'CAD' },
      { item_id: 32, item_text: 'CDF' },
      { item_id: 33, item_text: 'CHF' },
      { item_id: 34, item_text: 'CLP' },
      { item_id: 35, item_text: 'CNY' },
      { item_id: 36, item_text: 'COP' },
      { item_id: 37, item_text: 'CRC' },
      { item_id: 38, item_text: 'CUC' },
      { item_id: 39, item_text: 'CUP' },
      { item_id: 40, item_text: 'CVE' },
      { item_id: 41, item_text: 'CZK' },
      { item_id: 42, item_text: 'DJF' },
      { item_id: 43, item_text: 'DKK' },
      { item_id: 44, item_text: 'DOP' },
      { item_id: 45, item_text: 'DZD' },
      { item_id: 46, item_text: 'EGP' },
      { item_id: 47, item_text: 'ERN' },
      { item_id: 48, item_text: 'ETB' },
      { item_id: 49, item_text: 'EUR' },
      { item_id: 50, item_text: 'FJD' },
      { item_id: 51, item_text: 'FKP' },
      { item_id: 52, item_text: 'GBP' },
      { item_id: 53, item_text: 'GEL' },
      { item_id: 54, item_text: 'GGP' },
      { item_id: 55, item_text: 'GHS' },
      { item_id: 56, item_text: 'GIP' },
      { item_id: 57, item_text: 'GMD' },
      { item_id: 58, item_text: 'GNF' },
      { item_id: 59, item_text: 'GTQ' },
      { item_id: 60, item_text: 'GYD' },
      { item_id: 61, item_text: 'HKD' },
      { item_id: 62, item_text: 'HNL' },
      { item_id: 63, item_text: 'HRK' },
      { item_id: 64, item_text: 'BND' },
      { item_id: 65, item_text: 'BND' },
      { item_id: 66, item_text: 'BND' },
      { item_id: 67, item_text: 'BND' },
    ];
    this.dropdownList_PaymentRails = [
      { item_id: 1, item_text: 'IMPS' },
      { item_id: 2, item_text: 'RTGS' },
      { item_id: 3, item_text: 'NEFT' },
      { item_id: 4, item_text: 'ACH' },
      { item_id: 5, item_text: 'UPI' },
      { item_id: 6, item_text: 'RTP' },
      { item_id: 7, item_text: 'TPPP' },
      { item_id: 8, item_text: 'SEPA' },

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
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onItemDeSelect(item: any) {
    console.log(item);
  }

  getBankName(){
    return this.BANKID
  }
  // isObjectEmpty(){
  //   console.
  //   return Object.keys(this.bankData).length > 0
  // }
  searchItem(event:any){
    console.log("Event",event)
    console.log("BANK ID",this.BANKID)
    // if (this.BANKID.length < 11 && this.BANKID.length > 8){
    this.postBankData()
    // }else{
      // console.log('Invalid BIC ID!')
      // this.invalid = true
    // }
    
  }

  //Connecting to the register-bank api and posting data into api as an object through postBankData() method
  postBankData() {
    let url = 'http://localhost:3000/search'
    let bankBody = {bid:this.BANKID}
    console.log("URL link",url);
    this.http.post<any>(url,bankBody).subscribe(data => {
      
        console.log(data)
        this.isDataAvailable = true
        this.bankData = data
      
      
      
    })
  }

  add_partner_bank(){
    let url = "http://localhost:3000/addpartner"
    var payment_types = [] 
    // console.log(this.checkbox_arr)
    for (let i = 0; i < 3; i++){
      let j = i;
      if (this.checkbox_arr[i]){
        payment_types.push(j, this.checkbox_name[i])
      }
    }
    let body = 
      {
        bic:this.bankData.bic,
        institute_name:this.bankData.institute_name,
        br_info:this.bankData.br_info,
        address:{
          add_line:this.bankData.address.add_line,
          town_name:this.bankData.address.town_name,
          country_subdiv:this.bankData.address.country_subdiv,
          post_code: this.bankData.address.post_code,
          cntry_name:this.bankData.address.cntry_name,
          cntry_code:this.bankData.address.cntry_code,
        },
        ofc_type:this.bankData.ofc_type,
        currency:this.selectedItems_Currency,
        paymentTypes:this.selectedItems_Rails,
    }
    console.log(body)
    this.http.post<any>(url, body).subscribe(data=>{
      console.log(data)
    })
  }
 //defining register_bank() which will be called from the html component and is triggered when Register Bank button is clicked 
  register_bank() {
  //   this.postBankData().subscribe(data => {
  //     console.log(data)
      
  //     //navigating to next page if data is inserted successfully 
  //     if (data){
  //       // console.log('coming to router navigation')
  //       //  this.route.navigate(["/payment-types"])
  //     }
  //   })
  }

  // handleError(err){
  //   return throwError(err)
  // }
}
