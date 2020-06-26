import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from 'src/app/pizza.models';

@Component({
  selector: 'app-card01',
  templateUrl: './card01.component.html',
  styleUrls: ['./card01.component.css']
})
export class Card01Component implements OnInit {
  @Input() pizza: Pizza;

  constructor() { }


  ngOnInit(): void {
    // console.log(this.pizza)
  }

}
