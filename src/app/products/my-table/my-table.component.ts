import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {ProductService} from "./shared/product.service";
import {Product} from "./shared/index";
import {OpaqueToken} from '@angular/core';

let productToken = new OpaqueToken("ProductToken");

let data = {
  getData: function () {
    return [
      {id: 1, name: "product 1", price: 100, category: "Category 1"},
      {id: 2, name: "product 2", price: 200, category: "Category 1"},
      {id: 3, name: "product 3", price: 300, category: "Category 1"},
      {id: 4, name: "product 4", price: 400, category: "Category 2"},
      {id: 5, name: "product 5", price: 500, category: "Category 2"},
      {id: 6, name: "product 6", price: 600, category: "Category 2"},
      {id: 7, name: "product 7", price: 700, category: "Category 3"},
      {id: 8, name: "product 8", price: 800, category: "Category 3"},
      {id: 9, name: "product 9", price: 900, category: "Category 3"},
      {id: 10, name: "product 10", price: 1000, category: "Category 3"}
    ];
  }
};

@Component({
  moduleId: module.id,
  selector: 'my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css'],
  providers: [{provide: productToken, useValue: data}]
})
export class MyTableComponent implements OnInit{
  @Input("rows") rows: number;
  @Output() onDelete: EventEmitter<number> = new EventEmitter();
  products: Product[];
  filtredProducts: Product[];
  name: string;
  price: number;
  category: string = "";

  constructor(private productService: ProductService, @Inject(productToken) private data: any) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filtredProducts = this.products;
    // this.products = this.data.getData();
    // this.filtredProducts = this.data.getData();
  }

  delete( product: Product) {
    this.productService.delete(product);
    this.onDelete.emit(product.id);
  }

  filterProducts(value): void {
    if(value === "All") this.filtredProducts = this.products;
    else {
      this.filtredProducts = this.products.filter((prodcut) => prodcut.category === value);
    }
  }
  saveTempProduct(){
    this.productService.saveProduct({
      id: undefined,
      name :  this.name ,
      price : this.price,
      category: this.category
    });

    this.name = null;
    this.category = null;
    this.price = null;
  }
}

