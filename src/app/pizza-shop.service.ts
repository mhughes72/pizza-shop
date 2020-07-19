import { EventEmitter, Injectable } from '@angular/core';

import { Pizza } from './menu/pizza-list/pizza.models';
import { Topping } from './topping.models';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Subject } from "rxjs";


@Injectable()
export class PizzaShopService {
  pizzaSelected = new EventEmitter<Pizza>();
  private pizzasUpdated = new Subject<Pizza[]>();

  private pizzas: Pizza[] = [];

  constructor(private http: HttpClient) { }


  public id: string;
  public name: string;
  public subName: string;
  public description: string;
  public imagePath: string;

  public calories: number;
  public fat: number;
  public transfat: number;
  public sodium: number;

  public toppings: Topping[];

  addPizza(pizza: Pizza) {
    this.pizzas.push(pizza)
    this.pizzasUpdated.next(this.pizzas.slice())

    console.log('Pizza: ', pizza)
    let a = this.http
      .post<{ message: string }>("http://localhost:3000/api/pizza", pizza)
      .subscribe(responseData => {

        // this.po
      })


  }




  getPizzas() {

    this.http
      .get<any>("http://localhost:3000/api/pizza")
      .pipe(map((postData) => {
        console.log('postData: ', postData);

        return postData.pizza.map(post => {
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

            toppings: post.toppings,
          }
        })
      }))
      .subscribe(transformedPosts => {
        this.pizzas = transformedPosts;
        console.log('transformedPosts: ', transformedPosts);

        this.pizzasUpdated.next([...this.pizzas]);

      });

  }

  getPizza(index: number) {
    return this.pizzas[index];
  }

  getPostUpdateListener() {
    return this.pizzasUpdated.asObservable();
  }


}
