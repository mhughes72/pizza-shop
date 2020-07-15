import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from 'src/app/menu/pizza-list/pizza.models';
import { MatDialog } from '@angular/material/dialog';
import { PizzaDetailComponent } from '../pizza-detail/pizza-detail.component';
import { PizzaNutritionComponent } from '../pizza-nutrition/pizza-nutrition.component';

@Component({
  selector: 'app-pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.css']
})
export class PizzaItemComponent implements OnInit {

  @Input() pizza: Pizza;
  @Input() index: number;


  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onClick() {

    this.dialog.open(PizzaNutritionComponent);

  }

}
