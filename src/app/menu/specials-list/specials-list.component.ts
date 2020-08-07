import { Component, OnInit, Inject } from '@angular/core';
import { Specials } from './specials.models';
import { SpecialsShopService } from '../../specials-shop.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { SpecialsNutritionComponent } from './specials-nutrition/specials-nutrition.component';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
// import {MatDialogModule} from "@angular/material";
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialogConfig} from "@angular/material/dialog";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'app-specials-list',
  templateUrl: './specials-list.component.html',
  styleUrls: ['./specials-list.component.css'],
  entryComponents: [SpecialsNutritionComponent]
})
export class SpecialsListComponent implements OnInit {
  isLoading = true;
  specials: Specials[];
  private specialssSub: Subscription;
  public imgSpecialsPath: String;
  breakpoint: Number;
  constructor(private specialsShopService: SpecialsShopService,
    private dialog: MatDialog,

    private dialogRef: MatDialogRef<SpecialsNutritionComponent>,
    private _sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.specialsShopService.getSpecials();
    this.specialssSub = this.specialsShopService.getPostUpdateListener()
      .subscribe((specialss: Specials[]) => {
        this.specials = specialss;
        this.isLoading = false;
      });
      console.log('this.specials: ', this.specials);
    this.breakpoint = (window.innerWidth <= 500) ? 1 : 2;

  }

  onOpenNutrition(specials: Specials) {
    console.log('NUT PIX: ', specials)
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = specials;
    dialogConfig.height = '90%';
    dialogConfig.width = '90%';
    this.dialog.open(SpecialsNutritionComponent, dialogConfig);
    // this.dialog.open(specialsNutritionComponent);
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

    const thisImg = this._sanitizer.bypassSecurityTrustStyle('../../../assets/img/specials/' + image);

    const thisImg2 = "../../../assets/img/specials/chicken.jpg"
    return thisImg;
  }



}
