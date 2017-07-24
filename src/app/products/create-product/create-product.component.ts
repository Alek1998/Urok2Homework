import { Component, OnInit, AfterViewInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Product} from "../my-table/shared/product.model";
import {ProductService} from "../my-table/shared/product.service";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  productForm: FormGroup;
  constructor(private fb: FormBuilder,private productService: ProductService, private router: Router ) { }

  ngOnInit() {
    this.buildForm();
  }
  buildForm(){
    this.productForm = this.fb.group({
      name: ['' , [Validators.required, Validators.minLength(4) ]],
      price: ['', Validators.required ],
      category: ['', Validators.required ]
    })
  }
  saveTempProduct(){
    this.productService.saveProduct({
      id: undefined,
      name :  this.productForm.value.name ,
      price : this.productForm.value.price,
      category: this.productForm.value.category
    });
    this.router.navigate(['products']);
  }

}
