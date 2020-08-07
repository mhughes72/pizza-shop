import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { Specials } from '../specials.models';

@Component({
  selector: 'app-specials-nutrition',
  templateUrl: './specials-nutrition.component.html',
  styleUrls: ['./specials-nutrition.component.css']
})
export class SpecialsNutritionComponent implements OnInit {

  specials: Specials;
  constructor(private dialogRef: MatDialogRef<SpecialsNutritionComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

      // this.pizza = data;
      this.specials = data;
    }

  ngOnInit(): void {
    console.log('THIS specials: ', this.specials)
  }
}
