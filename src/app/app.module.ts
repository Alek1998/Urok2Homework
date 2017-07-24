import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {
  AppComponent,
  AdminComponent,
  MyTableComponent,
  HomeComponent,
  AppRoutingModule,
  ProductService
} from './index';
import {ProductsModule} from "./products/products.module";

@NgModule({
  declarations: [
    AppComponent,
    MyTableComponent,
    AdminComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ProductsModule
  ],
  providers: [
    ProductService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
