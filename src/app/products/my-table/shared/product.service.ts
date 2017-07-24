import {Injectable} from '@angular/core';
import {Product} from "./index";

@Injectable()
export class ProductService {

  delete(product: Product) {
    let index: number = Products.indexOf(product);
    if (index !== -1) {
      Products.splice(index, 1);
    }
  }

  saveProduct(product: Product) {
    Products.push({
      id: Products.sort(a => a.id).reverse()[Products.length - 1].id + 1,
      name: product.name,
      price: product.price,
      category: product.category
    });
  }

  getProducts() {
    return Products;
  }
  getProduct(id: number): Product{
    return Products.find(value => value.id === id);
  }
}

export const Products: Product[] = [
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
