import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { ProductSummaryComponent } from './product-summary/product-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderSummaryComponent,
    ProductSummaryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
