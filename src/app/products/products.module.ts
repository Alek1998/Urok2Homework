import {NgModule} from "@angular/core";
import {ProductsRoutingModule} from "./products-routing.module";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
  ],
  declarations: [
    ProductListComponent,
    ProductDetailsComponent
  ]

})
export class ProductsModule {}
