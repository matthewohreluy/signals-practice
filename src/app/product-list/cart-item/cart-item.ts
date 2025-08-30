import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'cart-item',
  imports: [],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.scss'
})
export class CartItem {
  @Input() product!: Product;
  @Output() addToCart = new EventEmitter<Product>();
}
