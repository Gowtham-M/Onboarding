import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DbService } from 'src/app/db.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  status: any
  selection: any
  banks: any
  user = this.dbservice.getCurrentUser()

  constructor(private router: Router, private route: ActivatedRoute,
    private fb: FormBuilder, private dbservice: DbService, private http:HttpClient) { }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap
    this.status = params.get('status')

    if(this.status) { this.selection = this.fb.group({ filter: this.status }) }
    else { this.selection = this.fb.group({ filter: 'A' }) }
    this.display()
  }

  display() {
    // get a list of banks for a given status
    let url = "http://localhost:3000/findbystatus"
    let body = {status:this.selection.value.filter }
    this.http.post(url, body).subscribe(data =>{
      this.banks = data
    });
  }

  redirect(bic: string) {
    this.router.navigate(['/user/details', bic])
  }
  
}
