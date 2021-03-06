import { Component, OnInit, Inject } from '@angular/core';
import { Sides } from './sides.models';
import { SidesShopService } from '../../sides-shop.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { SidesNutritionComponent } from './sides-nutrition/sides-nutrition.component';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
// import {MatDialogModule} from "@angular/material";
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialogConfig} from "@angular/material/dialog";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'app-sides-list',
  templateUrl: './sides-list.component.html',
  styleUrls: ['./sides-list.component.css'],
  entryComponents: [SidesNutritionComponent]
})
export class SidesListComponent implements OnInit {
  isLoading = true;
  sides: Sides[];
  private sidesSub: Subscription;
  public imgSidesPath: String;
  breakpoint: Number;
  constructor(private sidesShopService: SidesShopService,
    private dialog: MatDialog,

    private dialogRef: MatDialogRef<SidesNutritionComponent>,
    private _sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit(): void {

    this.isLoading = true;
    this.sidesShopService.getSides();
    this.sidesSub = this.sidesShopService.getPostUpdateListener()
      .subscribe((sides: Sides[]) => {
        this.sides = sides;

        this.isLoading = false;
      });

      if (window.innerWidth <= 500) {
        this.breakpoint = 1;
      } else if (window.innerWidth <= 1100) {
        this.breakpoint = 2;
      } else {
        this.breakpoint = 3;
      }
      console.log('this.breakpoint: ', this.breakpoint);

    // this.breakpoint = (window.innerWidth <= 500) ? 1 : 2;

  }

  onOpenNutrition(sides: Sides) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = sides;
    dialogConfig.height = '90%';
    dialogConfig.width = '90%';
    this.dialog.open(SidesNutritionComponent, dialogConfig);
    // this.dialog.open(sidesNutritionComponent);
  }

  onResize(event) {
    if (event.target.innerWidth <= 500) {
      this.breakpoint = 1
    } else if (event.target.innerWidth >= 501 && event.target.innerWidth <= 1100) {
      this.breakpoint = 2
    } else {

      this.breakpoint = 3
    }


  }
  getBackground(image) {

    const thisImg = this._sanitizer.bypassSecurityTrustStyle('../../../assets/img/desserts/' + image);
    return thisImg;
  }



}
