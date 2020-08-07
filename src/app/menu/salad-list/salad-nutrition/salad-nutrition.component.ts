import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { Salad } from '../salad.models';
@Component({
  selector: 'app-salad-nutrition',
  templateUrl: './salad-nutrition.component.html',
  styleUrls: ['./salad-nutrition.component.css']
})
export class SaladNutritionComponent implements OnInit {

  salad: Salad;
  constructor(private dialogRef: MatDialogRef<SaladNutritionComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

      // this.pizza = data;
      this.salad = data;
    }

  ngOnInit(): void {
    console.log('THIS salad: ', this.salad)
  }
}
