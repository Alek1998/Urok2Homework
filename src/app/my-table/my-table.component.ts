import {Component, EventEmitter, Input, Output} from '@angular/core';
import {noUndefined} from "@angular/compiler/src/util";

@Component({
  selector: 'my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent {
  @Input("rows") rows: number;
  @Output() onDelete: EventEmitter<number> = new EventEmitter();
  products: Product[] = Products;
  filtredProducts: Product[] = this.products;
  name: string;
  price: number;
  category: string;


  delete( product: Product){
    let index: number = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
    this.onDelete.emit(product.id);
  }

  filterProducts(value): void {
    if(value === "All") return;
    else {
      this.filtredProducts = this.products.filter((prodcut) => prodcut.category === value);
    }
  }
  saveTempProduct(){

    this.products.push({
      id: this.products.sort(a => a.id ).reverse()[this.products.length -1].id + 1,
      name :  this.name ,
      price : this.price,
      category: this.category});
    this.name = null;
    this.category = null;
    this.price = null;
  }
}

export const  Products: Product[] = [
  { id: 1, name : "product 1", price : 100, category: "Category 1" },
  { id: 2, name : "product 2", price : 200, category: "Category 1" },
  { id: 3, name : "product 3", price : 300, category: "Category 1" },
  { id: 4, name : "product 4", price : 400, category: "Category 2" },
  { id: 5, name : "product 5", price : 500, category: "Category 2" },
  { id: 6, name : "product 6", price : 600, category: "Category 2" },
  { id: 7, name : "product 7", price : 700, category: "Category 3" },
  { id: 8, name : "product 8", price : 800, category: "Category 3" },
  { id: 9, name : "product 9", price : 900, category: "Category 3" },
  { id: 10, name : "product 10", price : 1000, category: "Category 3" }
];

export interface Product{
  id: number;
  name: string;
  price: number;
  category: string;
}

