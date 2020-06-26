import { Component, OnInit } from '@angular/core';
import { PizzaShopService } from '../pizza-shop.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  onClick() {
    // this.pizzaShopService.addPizza()
  }
  onClick2() {
    this.pizzaShopService.getPizzas()
  }
  constructor(private pizzaShopService: PizzaShopService) { }

  ngOnInit(): void {
  }

}
