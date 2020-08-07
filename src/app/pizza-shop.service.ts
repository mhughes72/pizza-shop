import { EventEmitter, Injectable } from '@angular/core';
import { Pizza } from './menu/pizza-list/pizza.models';
import { Topping } from './topping.models';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Subject } from "rxjs";
import { Router } from '@angular/router';
import { environment } from "../environments/environment"

const BACKEND_URL = environment.apiUrl + "/pizza";

@Injectable()
export class PizzaShopService {
  pizzaSelected = new EventEmitter<Pizza>();
  private pizzasUpdated = new Subject<Pizza[]>();

  private pizzas: Pizza[] = [];
  constructor(private http: HttpClient,
    private router: Router) { }

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

  getPizzas() {
    this.http
      .get<any>(BACKEND_URL)
      .pipe(map((postData) => {
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
            price: post.price,
            toppings: post.toppings,
          }
        })
      }))
      .subscribe(transformedPosts => {
        this.pizzas = transformedPosts;
        this.pizzasUpdated.next([...this.pizzas]);
      });
  }

  addPizza(pizza: Pizza, toppings: Topping) {
    var pair = { 'toppings': toppings };
    let pizzaWithToppings = Object.assign(pizza, pair);
    this.pizzas.push(pizzaWithToppings)
    this.pizzasUpdated.next(this.pizzas.slice())
    let a = this.http
      .post<{ message: string }>(BACKEND_URL, pizzaWithToppings)
      .subscribe(responseData => {
        //THIS IS HOW WE NAVIGATE AWAY TO A DIFFERENT PAGE ON FINISH
        this.router.navigate(["/"])
      })
  }


  getPizza(index: number) {
    return this.pizzas[index];
  }

  getPostUpdateListener() {
    return this.pizzasUpdated.asObservable();
  }

}
