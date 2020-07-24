import { EventEmitter, Injectable } from '@angular/core';

import { Topping } from './topping.models';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Subject } from "rxjs";


@Injectable()
export class ToppingShopService {
  toppingSelected = new EventEmitter<Topping>();
  private toppingsUpdated = new Subject<Topping[]>();

  private toppings: Topping[] = [];

  constructor(private http: HttpClient) { }


  public id: string;
  public name: string;
  public description: string;
  public imagePath: string;


  addTopping(topping: Topping) {
    this.toppings.push(topping)
    this.toppingsUpdated.next(this.toppings.slice())


    let a = this.http
      .post<{ message: string }>("http://localhost:3000/api/toppings", topping)
      .subscribe(responseData => {

        // this.po
      })


  }




  getToppings() {

    this.http
      .get<any>("http://localhost:3000/api/toppings")
      .pipe(map((postData) => {

        console.log('postData.toppings: ', postData.toppings);
        return postData.toppings.map(post => {

          return {
            id: post._id,
            name: post.name,
            description: post.description,
            imagePath: post.imagePath,

          }
        })
      }))
      .subscribe(transformedPosts => {
        this.toppings = transformedPosts;


        this.toppingsUpdated.next([...this.toppings]);

      });

  }

  getPizza(index: number) {
    return this.toppings[index];
  }

  getPostUpdateListener() {
    return this.toppingsUpdated.asObservable();
  }


}
