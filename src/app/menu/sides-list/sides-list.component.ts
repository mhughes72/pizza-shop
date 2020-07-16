import { Component, OnInit } from '@angular/core';
import { Sides } from './sides.models';
import { SidesShopService } from '../../sides-shop.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-sides-list',
  templateUrl: './sides-list.component.html',
  styleUrls: ['./sides-list.component.css']
})
export class SidesListComponent implements OnInit {

  sides: Sides[];
  private sidesSub: Subscription;

  constructor(private sidesShopService: SidesShopService) { }

  ngOnInit(): void {

    this.sidesShopService.getSides();
    this.sidesSub = this.sidesShopService.getPostUpdateListener()
      .subscribe((sides: Sides[]) => {
        this.sides = sides;
      });

      console.log('sides: ', this.sides)


  }

  onClick() {
    console.log('click')
  }



}
