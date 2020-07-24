import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { Pizza } from '../pizza.models';

@Component({
  selector: 'app-pizza-nutrition',
  templateUrl: './pizza-nutrition.component.html',
  styleUrls: ['./pizza-nutrition.component.css']
})
export class PizzaNutritionComponent implements OnInit {
pizza: Pizza;
  constructor(private dialogRef: MatDialogRef<PizzaNutritionComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

      // this.pizza = data;
      this.pizza = data;
    }

  ngOnInit(): void {
    console.log('THIS PIZZA: ', this.pizza)
  }

}
