import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../products/product.model';
import { ProductsService } from '../../products/products.service';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.page.html',
  styleUrls: ['./editform.page.scss'],
})
export class EditformPage implements OnInit {
  loadedProduct: Product;
  formName: string;
  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('productId')){return;}
      const productId = paramMap.get('productId');
      this.loadedProduct = this.productsService.getProduct(productId);
    });
    if(this.loadedProduct){
      this.formName = this.loadedProduct.name;
    }
  }

}
