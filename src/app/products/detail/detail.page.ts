import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  loadedProduct: Product;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('productId')){return;}
      const productId = paramMap.get('productId');
      this.loadedProduct = this.productService.getProduct(productId);
    });
  }

}
