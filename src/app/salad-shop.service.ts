import { EventEmitter, Injectable } from '@angular/core';

import { Salad } from './menu/salad-list/salad.models';
import { Topping } from './topping.models';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Subject } from "rxjs";

import { environment } from "../environments/environment"
const  BACKEND_URL = environment.apiUrl + "/salad";


@Injectable()
export class SaladShopService {
  saladSelected = new EventEmitter<Salad>();
  private saladsUpdated = new Subject<Salad[]>();

  private salads: Salad[] = [


  ];

  constructor(private http: HttpClient) {}


  getSalads() {

    this.http
      .get<any>(BACKEND_URL)
      .pipe(map((postData) => {




        return postData.salad.map(post => {
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
        this.salads = transformedPosts;


        this.saladsUpdated.next([...this.salads]);

      });
  }

  getSalad(index: number) {
    return this.salads[index];
  }

  addIngredientsToShoppingList(ingredients: Topping[]) {
    // this.slService.addIngredients(ingredients);
  }

  addSalad(salad: Salad) {

    this.salads.push(salad)
    this.saladsUpdated.next(this.salads.slice())

    let a = this.http
      .post<{ message: string }>(BACKEND_URL, salad)
      .subscribe(responseData => {

      })

  }

  getPostUpdateListener() {
    return this.saladsUpdated.asObservable();
  }
}
