import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DbService } from 'src/app/db.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent implements OnInit {

  status: any
  selection: any
  bic: string = ''
  instName: string = ''
  banks: any
  user = this.dbservice.getCurrentUser()

  constructor(private router: Router, private route: ActivatedRoute,
    private fb: FormBuilder, private dbservice: DbService, private http:HttpClient ) { }

  ngOnInit() {
    const params = this.route.snapshot.paramMap
    this.status = params.get('status')
    if(this.status) { this.selection = this.fb.group({ filter: this.status }) }
    else { this.selection = this.fb.group({ filter: 'A' }) }
      this.display() 
  }

  display() {
    // get list of banks for a given status
    let url = "http://localhost:3000/findbystatus"
    let body = {status:this.selection.value.filter }
    this.http.post(url, body).subscribe(data =>{
      this.banks = data
    })
  }
  

  redirect(bic: string, mode: string) {
    this.router.navigate(['/admin/details', bic, mode])
  }

  getCurrent(bic: string, instName: string) {
    this.bic = bic
    this.instName = instName
  }

  approve() {
    // for a bank given bic approve its status.(update status to A) 
    let url = "http://localhost:3000/statusUpdate"
    let body = {bic:this.bic, status:"A"}
    this.http.post(url, body).subscribe(data =>{
      // console.log(data)
      // let index = this.banks.indexOf(data)
      this.display()
      // this.banks.splice(index,1)
      // console.log(this.banks)
    })
  }

}
