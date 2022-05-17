import { NgModule ,NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { BankEntryComponent } from './bank-entry/bank-entry.component';
import { BankComponent } from './bank/bank.component';
import { NavComponent } from './nav/nav.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserComponent,
    BankDetailsComponent,
    BankEntryComponent,
    BankComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  schemas:[NO_ERRORS_SCHEMA],
})
export class UserModule { }
