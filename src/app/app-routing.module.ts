import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BankregistrationComponent} from '../app/bankregistration/bankregistration.component'
import {LoginComponent} from '../app/login/login.component'
import {PaymentTypesComponent} from '../app/payment-types/payment-types.component'
import { DataEntryComponent } from './data-entry/data-entry.component';
import { SummaryComponent } from './summary/summary.component';


const routes: Routes = [
  {path: 'bank-registration', component: BankregistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'payment-types', component:PaymentTypesComponent},
   {path: 'data-entry', component: DataEntryComponent},
   {path: 'summary', component:SummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
    
  ]
})
export class AppRoutingModule { }
export const routingComponents = [ BankregistrationComponent, LoginComponent, PaymentTypesComponent, DataEntryComponent, SummaryComponent]
