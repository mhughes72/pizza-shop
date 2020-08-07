import { Component, OnInit, Inject } from '@angular/core';
import { Salad } from './salad.models';
import { SaladShopService } from '../../salad-shop.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { SaladNutritionComponent } from './salad-nutrition/salad-nutrition.component';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
// import {MatDialogModule} from "@angular/material";
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialogConfig} from "@angular/material/dialog";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'app-salad-list',
  templateUrl: './salad-list.component.html',
  styleUrls: ['./salad-list.component.css'],
  entryComponents: [SaladNutritionComponent]
})
export class SaladListComponent implements OnInit {
  isLoading = true;
  salads: Salad[];
  private saladsSub: Subscription;
  public imgSaladPath: String;
  breakpoint: Number;
  constructor(private saladShopService: SaladShopService,
    private dialog: MatDialog,

    private dialogRef: MatDialogRef<SaladNutritionComponent>,
    private _sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.saladShopService.getSalads();
    this.saladsSub = this.saladShopService.getPostUpdateListener()
      .subscribe((salads: Salad[]) => {
        this.salads = salads;
        this.isLoading = false;
      });
      console.log('this.salads: ', this.salads);
    this.breakpoint = (window.innerWidth <= 500) ? 1 : 2;

  }

  onOpenNutrition(salad: Salad) {
    console.log('NUT PIX: ', salad)
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = salad;
    dialogConfig.height = '90%';
    dialogConfig.width = '90%';
    this.dialog.open(SaladNutritionComponent, dialogConfig);
    // this.dialog.open(SaladNutritionComponent);
  }

  onResize(event) {
    if (event.target.innerWidth <= 400) {
      this.breakpoint = 1
    } else if (event.target.innerWidth >= 401 && event.target.innerWidth <= 800) {
      this.breakpoint = 2
    } else if (event.target.innerWidth >= 801) {

      this.breakpoint = 3
    }


  }
  getBackground(image) {

    const thisImg = this._sanitizer.bypassSecurityTrustStyle('../../../assets/img/salad/' + image);

    const thisImg2 = "../../../assets/img/salad/chicken.jpg"
    return thisImg;
  }



}
