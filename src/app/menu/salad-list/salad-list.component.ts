import { Component, OnInit } from '@angular/core';
import { Salad } from './salad.models';
import { SaladShopService } from '../../salad-shop.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-salad-list',
  templateUrl: './salad-list.component.html',
  styleUrls: ['./salad-list.component.css']
})
export class SaladListComponent implements OnInit {

  salads: Salad[];
  private saladSub: Subscription;

  constructor(private saladShopService: SaladShopService) { }

  ngOnInit(): void {

    this.saladShopService.getSalads();
    console.log('this.saladShopService.getSalads();: ', this.saladShopService.getSalads());
    this.saladSub = this.saladShopService.getPostUpdateListener()
      .subscribe((salads: Salad[]) => {
        this.salads = salads;

      });
      console.log('this.salads: ', this.salads);




  }

  onClick() {

  }



}
