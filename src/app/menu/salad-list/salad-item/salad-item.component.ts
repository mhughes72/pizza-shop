import { Component, OnInit, Input } from '@angular/core';
import { Salad } from 'src/app/salad.models';

@Component({
  selector: 'app-salad-item',
  templateUrl: './salad-item.component.html',
  styleUrls: ['./salad-item.component.css']
})
export class SaladItemComponent implements OnInit {
  @Input() salad: Salad;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
