import { Component, OnInit } from '@angular/core';
import { Specials } from './specials.models';
import { Subscription } from 'rxjs';
import { SpecialsShopService } from 'src/app/specials-shop.service';

@Component({
  selector: 'app-specials-list',
  templateUrl: './specials-list.component.html',
  styleUrls: ['./specials-list.component.css']
})
export class SpecialsListComponent implements OnInit {
  isLoading = true;

  specials: Specials[];
  private specialsSub: Subscription;

  constructor(private specialsShopService: SpecialsShopService) { }

  ngOnInit(): void {
    this.isLoading = true;

    this.specialsShopService.getSpecials();

    this.specialsSub = this.specialsShopService.getPostUpdateListener()
      .subscribe((specials: Specials[]) => {
        this.isLoading = false;

        this.specials = specials;
      });



  }

  onClick() {
    console.log('click')
  }

}
