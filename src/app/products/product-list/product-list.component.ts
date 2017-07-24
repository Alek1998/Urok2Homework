import { Component, OnInit } from '@angular/core';
import {Product} from "../my-table/shared/product.model";
import {ProductService} from "../my-table/shared/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor( private productService: ProductService, private router: Router) {  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
  onSelect(selected: Product){
    this.router.navigate(['/products/ul', selected.id]);
  }

}
