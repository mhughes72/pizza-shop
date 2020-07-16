import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PizzShopComponent } from './pizz-shop/pizz-shop.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SpecialsComponent } from './specials/specials.component';
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
import { Specials01Component } from './specials/specials01/specials01.component';
import { Specials02Component } from './specials/specials02/specials02.component';
import { Specials03Component } from './specials/specials03/specials03.component';
import { StopTrainingComponent } from './specials/specials02/stop-training.component';
import { AuthService } from './auth/auth.service';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { SpecialsService } from './specials.service';
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


@NgModule({
  declarations: [
    AppComponent,
    PizzShopComponent,
    HeaderComponent,
    SpecialsComponent,
    MenuComponent,
    PizzaListComponent,
    PizzaItemComponent,
    PizzaDetailComponent,
    SaladListComponent,
    SaladItemComponent,
    SaladDetailComponent,
    SidenavListComponent,
    Specials01Component,
    Specials02Component,
    Specials03Component,
    StopTrainingComponent,
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
    AngularFireAuthModule

  ],
  providers: [
    PizzaShopService,
    SaladShopService,
    AuthService,
    SpecialsService,
    SidesShopService
  ],
  
  bootstrap: [AppComponent],
  entryComponents: [PizzaNutritionComponent]
})
export class AppModule { }
