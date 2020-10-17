import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product.model';
import { ProductsService } from '../products/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  products: Product[];
  loadedProduct: Product;
  constructor(
    private productsService: ProductsService,
    private router: Router
    ) { }

  ngOnInit() {
    this.products = this.productsService.getAllProducts();
  }

  edit(prod: Product){
    console.log(prod.id, 'has been updated');
  }

  delete(prod: Product){
    console.log('loading product', prod);
    this.productsService.deleteProduct(prod.id);
    this.router.navigate(['/products']);
  }

}
