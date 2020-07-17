import { Component, OnInit, Input } from '@angular/core';
import { Specials } from '../specials.models';

@Component({
  selector: 'app-specials-item',
  templateUrl: './specials-item.component.html',
  styleUrls: ['./specials-item.component.css']
})
export class SpecialsItemComponent implements OnInit {

  @Input() special: Specials;
  @Input() index: number;


  constructor() { }

  ngOnInit(): void {
  }

  onClick() {

    // this.dialog.open(SpecialsNutritionComponent);

  }
}
