import { Component, OnInit, Inject } from '@angular/core';
import { Pizza } from './pizza.models';
import { PizzaShopService } from '../../pizza-shop.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { PizzaNutritionComponent } from './pizza-nutrition/pizza-nutrition.component';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
// import {MatDialogModule} from "@angular/material";
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialogConfig} from "@angular/material/dialog";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css'],
  entryComponents: [PizzaNutritionComponent]
})
export class PizzaListComponent implements OnInit {

  pizzas: Pizza[];
  private pizzasSub: Subscription;
  public imgPizzaPath: String;
  breakpoint: Number;
  constructor(private pizzaShopService: PizzaShopService,
    private dialog: MatDialog,

    private dialogRef: MatDialogRef<PizzaNutritionComponent>,
    private _sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit(): void {
    this.pizzaShopService.getPizzas();
    this.pizzasSub = this.pizzaShopService.getPostUpdateListener()
      .subscribe((pizzas: Pizza[]) => {
        this.pizzas = pizzas;

      });
      console.log('this.pizzas: ', this.pizzas);
    this.breakpoint = (window.innerWidth <= 500) ? 1 : 2;

  }

  onOpenNutrition(pizza: Pizza) {
    console.log('NUT PIX: ', pizza)
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = pizza;
    dialogConfig.height = '90%';
    dialogConfig.width = '90%';
    this.dialog.open(PizzaNutritionComponent, dialogConfig);
    // this.dialog.open(PizzaNutritionComponent);
  }

  onResize(event) {
    if (event.target.innerWidth <= 400) {
      this.breakpoint = 1
    } else if (event.target.innerWidth >= 401 && event.target.innerWidth <= 800) {
      this.breakpoint = 2
    } else if (event.target.innerWidth >= 801) {

      this.breakpoint = 3
    }


  }
  getBackground(image) {

    const thisImg = this._sanitizer.bypassSecurityTrustStyle('../../../assets/img/pizza/' + image);

    const thisImg2 = "../../../assets/img/pizza/chicken.jpg"
    return thisImg;
  }



}
