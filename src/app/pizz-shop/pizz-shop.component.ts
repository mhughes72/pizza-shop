import { Component, OnInit } from '@angular/core';
import { PizzaShopService } from '../pizza-shop.service';
import { Pizza } from '../pizza.models';

@Component({
  selector: 'app-pizz-shop',
  templateUrl: './pizz-shop.component.html',
  styleUrls: ['./pizz-shop.component.css']
})
export class PizzShopComponent implements OnInit {
  id: number;
  pizzas: Pizza[];
  constructor(private pizzaShopService: PizzaShopService) { }

  ngOnInit(): void {
    // this.pizzas = this.pizzaShopService.getPizzas();
  }

}




