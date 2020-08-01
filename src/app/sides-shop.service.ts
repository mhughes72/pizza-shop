import { EventEmitter, Injectable } from '@angular/core';

import { Sides } from './menu/sides-list/sides.models';
import { Topping } from './topping.models';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Subject } from "rxjs";

import { environment } from "../environments/environment"
const  BACKEND_URL = environment.apiUrl + "/sides";



@Injectable()
export class SidesShopService {
  sidesSelected = new EventEmitter<Sides>();
  private sidesUpdated = new Subject<Sides[]>();

  private sides: Sides[] = [


  ];

  constructor(private http: HttpClient) {}


  getSides() {

    this.http
      .get<any>(BACKEND_URL)
      .pipe(map((postData) => {



        return postData.sides.map(post => {
          return {
            id: post._id,
            name: post.name,
            subName: post.subName,
            description: post.description,
            imagePath: post.imagePath,

            calories: post.calories,
            fat: post.fat,
            transfat: post.transfat,
            sodium: post.sodium,
            price: post.price,
            toppings: post.toppings,
          }
        })
      }))
      .subscribe(transformedPosts => {
        this.sides = transformedPosts;


        this.sidesUpdated.next([...this.sides]);

      });
  }

  getSide(index: number) {
    return this.sides[index];
  }

  addIngredientsToShoppingList(ingredients: Topping[]) {
    // this.slService.addIngredients(ingredients);
  }

  addSides(sides: Sides) {

    this.sides.push(sides)
    this.sidesUpdated.next(this.sides.slice())

    let a = this.http
      .post<{ message: string }>(BACKEND_URL, sides)
      .subscribe(responseData => {

      })

  }

  getPostUpdateListener() {
    return this.sidesUpdated.asObservable();
  }
}
