import { Component, OnInit } from '@angular/core';
import { Salad } from '../../salad.models';
import { SaladShopService } from '../../salad-shop.service'

@Component({
  selector: 'app-salad-list',
  templateUrl: './salad-list.component.html',
  styleUrls: ['./salad-list.component.css']
})
export class SaladListComponent implements OnInit {

  salads: Salad[];
  constructor(private saladShopService: SaladShopService) { }

  ngOnInit(): void {
    this.salads = this.saladShopService.getSalads();
    console.log(this.salads)

  }





}
