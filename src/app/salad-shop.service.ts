import { EventEmitter, Injectable } from '@angular/core';

import { Salad } from './menu/salad-list/salad.models';
import { Topping } from './topping.models';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Subject } from "rxjs";


@Injectable()
export class SaladShopService {
  saladSelected = new EventEmitter<Salad>();
  private saladsUpdated = new Subject<Salad[]>();

  private salads: Salad[] = [


  ];

  constructor(private http: HttpClient) {}


  getSalads() {
    console.log('GET SALADS')
    this.http
      .get<any>("http://localhost:3000/api/salad")
      .pipe(map((postData) => {
        console.log('postData: ', postData);

        return postData.salad.map(post => {
          return {
            id: post._id,
            name: post.name,
            subName: post.subName,
            description: post.description,
            imagePath: post.imagePath,
            toppings: post.toppings,
          }
        })
      }))
      .subscribe(transformedPosts => {
        this.salads = transformedPosts;
        console.log('transformedPosts: ', transformedPosts);

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
    console.log(salad);
    this.salads.push(salad)
    this.saladsUpdated.next(this.salads.slice())

    let a = this.http
      .post<{ message: string }>("http://localhost:3000/api/salad", salad)
      .subscribe(responseData => {

      })

  }

  getPostUpdateListener() {
    return this.saladsUpdated.asObservable();
  }
}
