import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbService } from 'src/app/db.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {

  bic: any
  bank: any
  user = this.dbservice.getCurrentUser()
  constructor(private route: ActivatedRoute, private dbservice: DbService, private http:HttpClient) { }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap
    this.bic = params.get('bic')
    // get a bank for a given bic
    let url = 'http://localhost:3000/findPartnerBank'
    let body = {bic:this.bic}
    this.http.post(url,body).subscribe(data=>{
      this.bank = data
    })
  }
 

}
