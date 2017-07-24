import {NgModule} from "@angular/core";
import {ProductsRoutingModule} from "./products-routing.module";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {
  ProductListComponent,
  ProductDetailsComponent,
  ProductsComponent,
  MyTableComponent,
  CreateProductComponent
}from './index';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductsComponent,
    MyTableComponent,
    CreateProductComponent,
  ]

})
export class ProductsModule {}
