import { Component, OnInit } from '@angular/core';
import { Pizza } from './pizza.models';
import { PizzaShopService } from '../../pizza-shop.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {

  pizzas: Pizza[];
  private pizzasSub: Subscription;

  constructor(private pizzaShopService: PizzaShopService) { }

  ngOnInit(): void {

    this.pizzaShopService.getPizzas();
    this.pizzasSub = this.pizzaShopService.getPostUpdateListener()
      .subscribe((pizzas: Pizza[]) => {
        this.pizzas = pizzas;
      });



  }

  onClick() {
    console.log('click')
  }



}
