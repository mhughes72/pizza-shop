import { EventEmitter, Injectable } from '@angular/core';
import { Sides } from './menu/sides-list/sides.models';
import { Topping } from './topping.models';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Subject } from "rxjs";
import { Router } from '@angular/router';
import { environment } from "../environments/environment"

const BACKEND_URL = environment.apiUrl + "/sides";

@Injectable()
export class SidesShopService {
  sidesSelected = new EventEmitter<Sides>();
  private sidesUpdated = new Subject<Sides[]>();

  private sides: Sides[] = [];
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

  getSides() {
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
        this.sides = transformedPosts;
        this.sidesUpdated.next([...this.sides]);
      });
  }

  addSides(sides: Sides, toppings: Topping) {
    console.log('toppings: ', toppings);
    var pair = { 'toppings': toppings };
    let sidesWithToppings = Object.assign(sides, pair);
    this.sides.push(sidesWithToppings)
    this.sidesUpdated.next(this.sides.slice())
    let a = this.http
      .post<{ message: string }>(BACKEND_URL, sidesWithToppings)
      .subscribe(responseData => {
        console.log('responseData: ', responseData);
        //THIS IS HOW WE NAVIGATE AWAY TO A DIFFERENT PAGE ON FINISH
        this.router.navigate(["/"])
      })
  }


  getSide(index: number) {
    return this.sides[index];
  }

  getPostUpdateListener() {
    return this.sidesUpdated.asObservable();
  }

}
