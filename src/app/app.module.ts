import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PizzShopComponent } from './pizz-shop/pizz-shop.component';
import { HeaderComponent } from './navigation/header/header.component';
import { MenuComponent } from './menu/menu.component';
import { PizzaListComponent } from './menu/pizza-list/pizza-list.component';
import { PizzaItemComponent } from './menu/pizza-list/pizza-item/pizza-item.component';
import { PizzaShopService } from './pizza-shop.service';
import { PizzaDetailComponent } from './menu/pizza-list/pizza-detail/pizza-detail.component';
import { SaladListComponent } from './menu/salad-list/salad-list.component';
import { SaladItemComponent } from './menu/salad-list/salad-item/salad-item.component';
import { SaladDetailComponent } from './menu/salad-list/salad-detail/salad-detail.component';
import { SaladShopService } from './salad-shop.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';

import { AuthService } from './auth/auth.service';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { PizzaNutritionComponent } from './menu/pizza-list/pizza-nutrition/pizza-nutrition.component';
import { BannerComponent } from './banner/banner.component';
import { HttpClientModule } from '@angular/common/http';
import { PizzaFormComponent } from './pizza-form/pizza-form.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';
import { SaladFormComponent } from './salad-form/salad-form.component';
import { SidesListComponent } from './menu/sides-list/sides-list.component';
import { SidesItemComponent } from './menu/sides-list/sides-item/sides-item.component';
import { SidesDetailComponent } from './menu/sides-list/sides-detail/sides-detail.component'
import { SidesShopService } from './sides-shop.service';
import { SidesFormComponent } from './sides-form/sides-form.component';
import { SpecialsListComponent } from './menu/specials-list/specials-list.component';
import { SpecialsItemComponent } from './menu/specials-list/specials-item/specials-item.component';
import { SpecialsFormComponent } from './specials-form/specials-form.component';
import { SpecialsShopService } from './specials-shop.service';
import { ToppingsFormComponent } from './toppings-form/toppings-form.component';
import { ToppingShopService } from './toppings-shop.service';
import { ToppingsSelectComponent } from './toppings-select/toppings-select.component';
import { SandboxComponent } from './sandbox/sandbox.component';
// import {DialogService} from '@angular/material/dialog';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSpinnerOverlayComponent } from './mat-spinner-overlay/mat-spinner-overlay.component';
import { SpecialsNutritionComponent } from './menu/specials-list/specials-nutrition/specials-nutrition.component';
import { SidesNutritionComponent } from './menu/sides-list/sides-nutrition/sides-nutrition.component';
import { SaladNutritionComponent } from './menu/salad-list/salad-nutrition/salad-nutrition.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MakeComponent } from './make/make.component';


@NgModule({
  declarations: [
    AppComponent,
    PizzShopComponent,
    HeaderComponent,
    MenuComponent,
    PizzaListComponent,
    PizzaItemComponent,
    PizzaDetailComponent,
    SaladListComponent,
    SaladItemComponent,
    SaladDetailComponent,
    SidenavListComponent,
    SignupComponent,
    LoginComponent,
    PizzaNutritionComponent,
    BannerComponent,
    PizzaFormComponent,
    SaladFormComponent,
    SidesListComponent,
    SidesItemComponent,
    SidesDetailComponent,
    SidesFormComponent,
    SpecialsListComponent,
    SpecialsItemComponent,
    SpecialsFormComponent,
    ToppingsFormComponent,
    ToppingsSelectComponent,
    SandboxComponent,
    MatSpinnerOverlayComponent,
    SpecialsNutritionComponent,
    SidesNutritionComponent,
    SaladNutritionComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    MakeComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatDialogModule

  ],
  providers: [
    PizzaShopService,
    SaladShopService,
    AuthService,
    SidesShopService,
    SpecialsShopService,
    ToppingShopService,
    // DialogService,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ],

  bootstrap: [AppComponent],
  entryComponents: [PizzaNutritionComponent]
})
export class AppModule { }
