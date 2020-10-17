import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [
    {
      id: 'p1',
      category: 'cpu',
      image: 'https://m.media-amazon.com/images/I/41i+sZeH71L._AC_SS350_.jpg',
      name: 'prosesor 1',
      price: 15000,
      stock: 50
    },{
      id: 'p2',
      category: 'ram',
      image: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2014/3/5/3389396/3389396_2a4a711e-a3cd-11e3-9c29-72862523fab8.jpg',
      name: 'ramram',
      price: 12000,
      stock: 25
    }
  ];

  productModel: Product = {
    id: null,
    category: null,
    image: null,
    name: null,
    price: null,
    stock: null
  }
  constructor() { }

  getAllProducts(){
    return [...this.products];
  }

  getProductCat(category: string){
    return {...this.products.find( products => {
      return products.category === category;
    })};
  }

  getProduct(productId: string){
    return {...this.products.find( product => {
      return product.id === productId;
    })};
  }

  deleteProduct(productId: string){
    // this.products = this.products.filter(product => {
    //   console.log(productId, 'will be deleted soon');
    //   return product.id == productId;
    // });

    const idx = this.products.findIndex(({id}) => id === productId);
    this.products.splice(idx, 1);
  }

  addProduct(newProduct: any[]){
    this.productModel.id = newProduct[0];
    this.productModel.name = newProduct[1];
    this.productModel.image = newProduct[2];
    this.productModel.price = newProduct[3];
    this.productModel.stock = newProduct[4];
    
    this.products.push(this.productModel);
  }
}
