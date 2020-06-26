import { Component, OnInit } from '@angular/core';
import { Salad } from 'src/app/salad.models';
import { SaladShopService } from 'src/app/salad-shop.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-salad-detail',
  templateUrl: './salad-detail.component.html',
  styleUrls: ['./salad-detail.component.css']
})
export class SaladDetailComponent implements OnInit {
  id: number;
  salad: Salad
  constructor(private saladShopService: SaladShopService,
    private route: ActivatedRoute,
    private router: Router) {
}


  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.salad = this.saladShopService.getSalad(this.id)
      }
    );
  }

}
