import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {ProductsComponent} from "./products.component";
import {MyTableComponent} from "./my-table/my-table.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products',
        component: ProductsComponent,
        children: [
          {
            path: "table",
            component: MyTableComponent
          },
          {
            path: "ul",
            component: ProductListComponent,
            children: [
              {
                path: ":id",
                component: ProductDetailsComponent
              }
            ]
          }
          ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class ProductsRoutingModule{}
