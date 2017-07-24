import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products',
        component: ProductListComponent,
        children: [
          {
            path: ":id",
            component: ProductDetailsComponent
          }
          ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class ProductsRoutingModule{}
