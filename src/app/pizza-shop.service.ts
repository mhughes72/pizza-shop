import { EventEmitter, Injectable } from '@angular/core';

import { Pizza } from './pizza.models';
import { Topping } from './topping.models';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Subject } from "rxjs";


@Injectable()
export class PizzaShopService {
  pizzaSelected = new EventEmitter<Pizza>();
  private pizzasUpdated = new Subject<Pizza[]>();

  private pizzas: Pizza[] = [
    new Pizza(
      'Veggie',
      'So tasty!',
      'A medley of fresh green peppers, onion, tomatoes, mushrooms, and olives.',
      'https://cache.dominos.com/nolo/ca/en/6_18_5/assets/build/market/CA/_en/images/img/products/larges/S_PIZVX.jpg',
      [
        new Topping(null, 'Meat', 'something', 'http://www.youtube.com'),
        new Topping(null, 'Green Pepper', 'something', 'http://www.youtube.com'),


      ]),
    new Pizza(
      'ExtravaganZZa',
      'So tasty!',
      'Loads of pepperoni, ham, savory Italian sausage, beef crumble, fresh onions, fresh green peppers, fresh mushrooms and black olives with extra cheese.',
      'https://cache.dominos.com/nolo/ca/en/6_18_5/assets/build/market/CA/_en/images/img/products/larges/S_PIZZZ.jpg',
      [
        new Topping(null, 'Meat', 'something', 'http://www.youtube.com'),
        new Topping(null, 'Green Pepper', 'something', 'http://www.youtube.com'),

      ]),
    new Pizza(
      'Brooklyn Pizza',
      'So tasty!',
      'Specifically engineered to be big, thin, and perfectly foldable.',
      'https://cache.dominos.com/nolo/ca/en/6_18_5/assets/build/market/CA/_en/images/img/products/larges/S_BRKLYN.jpg',
      [
        new Topping(null, 'Meat', 'something', 'http://www.youtube.com'),
        new Topping(null, 'Green Pepper', 'something', 'http://www.youtube.com'),

      ]),
    new Pizza(
      'ExtravaganZZa',
      'So tasty!',
      'Loads of pepperoni, ham, savory Italian sausage, beef crumble, fresh onions, fresh green peppers, fresh mushrooms and black olives with extra cheese.',
      'https://cache.dominos.com/nolo/ca/en/6_18_6/assets/build/market/CA/_en/images/img/products/larges/S_PIZPX.jpg',
      [
        new Topping(null, 'Meat', 'something', 'http://www.youtube.com'),
        new Topping(null, 'Green Pepper', 'something', 'http://www.youtube.com'),

      ]),
    new Pizza(
      'Brooklyn Pizza',
      'So tasty!',
      'Specifically engineered to be big, thin, and perfectly foldable.',
      'https://cache.dominos.com/nolo/ca/en/6_18_5/assets/build/market/CA/_en/images/img/products/larges/S_BRKLYN.jpg',
      [
        new Topping(null, 'Meat', 'something', 'http://www.youtube.com'),
        new Topping(null, 'Green Pepper', 'something', 'http://www.youtube.com'),

      ]),
    new Pizza(
      'ExtravaganZZa',
      'So tasty!',
      'An Alfredo Sauce base with a Mozzarella/Cheddar Cheese blend, fresh mushrooms, onions, all white-meat chicken, bacon and Provolone cheese.',
      'https://cache.dominos.com/nolo/ca/en/6_18_6/assets/build/market/CA/_en/images/img/products/larges/S_PIZCBA.jpg',
      [
        new Topping(null, 'Meat', 'something', 'http://www.youtube.com'),
        new Topping(null, 'Green Pepper', 'something', 'http://www.youtube.com'),

      ]),
    new Pizza(
      'Brooklyn Pizza',
      'So tasty!',
      'Creamy Alfredo sauce, fresh baby spinach, fresh onions, feta, Parmesan-Asiago, provolone and cheese made with 100% real mozzarella.',
      'https://cache.dominos.com/nolo/ca/en/6_18_6/assets/build/market/CA/_en/images/img/products/larges/S_PIZSF.jpg',
      [
        new Topping(null, 'Meat', 'something', 'http://www.youtube.com'),
        new Topping(null, 'Green Pepper', 'something', 'http://www.youtube.com'),

      ]),
  ];

  constructor(private http: HttpClient) { }

  public id: string;
  public name: string;
  public subName: string;
  public description: string;
  public imagePath: string;
  public toppings: Topping[];

  addPizza(pizza: Pizza) {
    this.pizzas.push(pizza)
    this.pizzasUpdated.next(this.pizzas.slice())


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

        return postData.posts.map(post => {
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
