import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];

  addToCard(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCard() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>
    ('/assets/shipping.json');
  }

  constructor(
    private http: HttpClient
  ) { }

}