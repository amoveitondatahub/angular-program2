import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService) { }

   
   share(Product) {
    window.alert('The product '+Product.name+' has been shared!');
  }
   
   onNotify(nameOfProduct) {
    window.alert('You will be notified when '+nameOfProduct+' goes on sale');
  }

  addToCart(product){
    window.alert('Your product '+product.name+' has been added to the cart');
    this.cartService.addToCart(product);
  }


  ngOnInit() {

    this.route.paramMap.subscribe(
      params=>{
        this.product = products[+params.get('productId')];
      });
  }

}