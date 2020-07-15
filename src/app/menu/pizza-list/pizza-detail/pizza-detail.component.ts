import { Component, OnInit } from '@angular/core';
import { PizzaShopService } from 'src/app/pizza-shop.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Pizza } from 'src/app/menu/pizza-list/pizza.models';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.css']
})
export class PizzaDetailComponent implements OnInit {
  id: number;
  pizza: Pizza;

  constructor(private pizzaShopService: PizzaShopService,
    private route: ActivatedRoute,
    private router: Router) {
}

  ngOnInit(): void {

    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.pizza = this.pizzaShopService.getPizza(this.id)
      }
    );
  }

}
