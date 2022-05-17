import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { BankEntryComponent } from './bank-entry/bank-entry.component';
import { BankComponent } from './bank/bank.component';

const routes: Routes = [
  { path: 'user/details/:bic', component: BankDetailsComponent },
  { path: 'user/banks/:status', component: BankComponent },
  { path: 'user/banks', component: BankComponent },
  { path: 'user/register', component: BankEntryComponent },
  { path: 'user', redirectTo: 'user/banks', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
