import { EventEmitter, Injectable } from '@angular/core';

import { Sides } from './menu/sides-list/sides.models';
import { Topping } from './topping.models';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Subject } from "rxjs";


@Injectable()
export class SidesShopService {
  sidesSelected = new EventEmitter<Sides>();
  private sidesUpdated = new Subject<Sides[]>();

  private sides: Sides[] = [


  ];

  constructor(private http: HttpClient) {}


  getSides() {
    console.log('GET Sides')
    this.http
      .get<any>("http://localhost:3000/api/sides")
      .pipe(map((postData) => {
        console.log('postData: ', postData);

        return postData.sides.map(post => {
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
        this.sides = transformedPosts;
        console.log('transformedPosts: ', transformedPosts);

        this.sidesUpdated.next([...this.sides]);

      });
  }

  getSalad(index: number) {
    return this.sides[index];
  }

  addIngredientsToShoppingList(ingredients: Topping[]) {
    // this.slService.addIngredients(ingredients);
  }

  addSides(sides: Sides) {
    console.log('SIDE ADD');
    this.sides.push(sides)
    this.sidesUpdated.next(this.sides.slice())

    let a = this.http
      .post<{ message: string }>("http://localhost:3000/api/sides", sides)
      .subscribe(responseData => {

      })

  }

  getPostUpdateListener() {
    return this.sidesUpdated.asObservable();
  }
}
