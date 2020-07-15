import { Component, OnInit } from '@angular/core';
import { PizzaShopService } from '../pizza-shop.service';
import { SaladListComponent } from '../menu/salad-list/salad-list.component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  onClick() {
    // this.dialog.open(SaladListComponent);
  }
  onClick2() {
    this.pizzaShopService.getPizzas()
  }
  constructor(private pizzaShopService: PizzaShopService) { }

  ngOnInit(): void {
  }

}
