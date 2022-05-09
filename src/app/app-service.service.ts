import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  msg1 = ''
  msg2 = ''
  msg3 = ''
  constructor(private http : HttpClient) {
   }

  getData(){
    let url = 'http://localhost:3000/getdata';
    return this.http.get(url);
  }



}
