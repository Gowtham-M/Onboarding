import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentrulesComponent } from './paymentrules/paymentrules.component';
import { FormsModule } from '@angular/forms';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { SummaryComponent } from './summary/summary.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PaymentrulesComponent,
    DataEntryComponent,
    SummaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
