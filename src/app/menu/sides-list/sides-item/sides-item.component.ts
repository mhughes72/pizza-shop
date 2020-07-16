import { Component, OnInit, Input } from '@angular/core';
import { Sides } from 'src/app/menu/sides-list/sides.models';

@Component({
  selector: 'app-sides-item',
  templateUrl: './sides-item.component.html',
  styleUrls: ['./sides-item.component.css']
})
export class SidesItemComponent implements OnInit {

  @Input() sides: Sides;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
