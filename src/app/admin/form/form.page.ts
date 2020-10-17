import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { Product } from '../../products/product.model';
import { ProductsService } from '../../products/products.service';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  form: FormGroup;
  myArray: any;
  constructor(
    private productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      name: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      image: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      price: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      stock: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
  }

  onSubmit(){
    //console.log(this.form.get('name').value);
    this.myArray = [
      this.form.get('id').value,
      this.form.get('name').value,
      this.form.get('image').value,
      this.form.get('price').value,
      this.form.get('stock').value
    ]

    this.productsService.addProduct(this.myArray);
    this.router.navigate(['/products']);
  }

}
