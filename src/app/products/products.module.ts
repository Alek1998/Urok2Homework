import {NgModule} from "@angular/core";
import {ProductsRoutingModule} from "./products-routing.module";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {CommonModule} from "@angular/common";
import { ProductsComponent } from './products.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
  ],
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductsComponent
  ]

})
export class ProductsModule {}
