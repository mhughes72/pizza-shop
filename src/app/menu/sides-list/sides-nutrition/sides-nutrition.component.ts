import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { Sides } from '../sides.models';
@Component({
  selector: 'app-sides-nutrition',
  templateUrl: './sides-nutrition.component.html',
  styleUrls: ['./sides-nutrition.component.css']
})
export class SidesNutritionComponent implements OnInit {

  sides: Sides;
  constructor(private dialogRef: MatDialogRef<SidesNutritionComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

      // this.pizza = data;
      this.sides = data;
    }

  ngOnInit(): void {

  }
}
