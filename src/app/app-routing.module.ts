import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizzShopComponent } from './pizz-shop/pizz-shop.component';
import { MenuComponent } from './menu/menu.component';
import { PizzaListComponent } from './menu/pizza-list/pizza-list.component';
import { PizzaDetailComponent } from './menu/pizza-list/pizza-detail/pizza-detail.component';
import { SaladListComponent } from './menu/salad-list/salad-list.component';
import { SaladDetailComponent } from './menu/salad-list/salad-detail/salad-detail.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { PizzaFormComponent } from './pizza-form/pizza-form.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SidesListComponent } from './menu/sides-list/sides-list.component';
import { SpecialsListComponent } from './menu/specials-list/specials-list.component';





const appRoutes: Routes = [
  { path: '', redirectTo: '/pizza-shop', pathMatch: 'full' },
  { path: 'pizza-shop', component: PizzShopComponent, children: [
      { path: ':id', component: PizzaDetailComponent},
  ]},
  // { path: 'specials', component: SpecialsComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'menu', component: MenuComponent, children: [
    // { path: '', component: MenuComponent, pathMatch: 'full' },
    { path: 'pizza', component: PizzaListComponent, children: [
      { path: ':id', component: PizzaDetailComponent},
    ] },

    { path: 'salad', component: SaladListComponent, children: [
      { path: ':id', component: SaladDetailComponent },
    ] },

    { path: 'sides', component: SidesListComponent, children: [
      { path: ':id', component: SidesListComponent },
    ] },
    { path: 'specials', component: SpecialsListComponent, children: [
      { path: ':id', component: SpecialsListComponent },
    ] },

  ]},
  { path: 'form', component: PizzaFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {

}
