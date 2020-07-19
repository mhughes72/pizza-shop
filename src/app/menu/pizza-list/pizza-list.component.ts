import { Component, OnInit } from '@angular/core';
import { Pizza } from './pizza.models';
import { PizzaShopService } from '../../pizza-shop.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { PizzaNutritionComponent } from './pizza-nutrition/pizza-nutrition.component';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {

  pizzas: Pizza[];
  private pizzasSub: Subscription;
  public imgPizzaPath: String;
  breakpoint: Number;
  constructor(private pizzaShopService: PizzaShopService,
    private dialog: MatDialog,
    private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
this.imgPizzaPath = "../../../assets/img/pizza/chicken.jpg"
    this.pizzaShopService.getPizzas();
    this.pizzasSub = this.pizzaShopService.getPostUpdateListener()
      .subscribe((pizzas: Pizza[]) => {
        this.pizzas = pizzas;
      });
      this.breakpoint = (window.innerWidth <= 500) ? 1 : 2;
      console.log('CALORIES: ', this.pizzas)
  }

  onClick() {
    this.dialog.open(PizzaNutritionComponent);
  }
  onResize(event) {
    if (event.target.innerWidth <= 400) {
        this.breakpoint = 1
    } else if (event.target.innerWidth >= 401 && event.target.innerWidth <= 800) {
      this.breakpoint = 2
    } else if (event.target.innerWidth >= 801) {
      console.log("3")
      this.breakpoint = 3
    }

  }
  getBackground(image) {

    const thisImg = this._sanitizer.bypassSecurityTrustStyle('../../../assets/img/pizza/'+image);
    console.log('thisImg: ', thisImg);
    const thisImg2 = "../../../assets/img/pizza/chicken.jpg"
    return thisImg;
}



}
