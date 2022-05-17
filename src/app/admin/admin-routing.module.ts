import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { BanksComponent } from './banks/banks.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'admin/details/:bic/:mode', component: BankDetailsComponent },
  { path: 'admin/banks/:status', component: BanksComponent },
  { path: 'admin/banks', component: BanksComponent },
  { path: 'admin/users', component: UsersComponent },
  { path: 'admin', redirectTo: 'admin/banks', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
