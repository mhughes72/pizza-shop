import { EventEmitter, Injectable } from '@angular/core';
import { Salad } from './menu/salad-list/salad.models';
import { Topping } from './topping.models';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Subject } from "rxjs";
import { Router } from '@angular/router';
import { environment } from "../environments/environment"

const BACKEND_URL = environment.apiUrl + "/salad";

@Injectable()
export class SaladShopService {
  saladSelected = new EventEmitter<Salad>();
  private saladsUpdated = new Subject<Salad[]>();

  private salads: Salad[] = [];
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

  addSalad(salad: Salad, toppings: Topping) {
    console.log('toppings: ', toppings);
    var pair = { 'toppings': toppings };
    let saladWithToppings = Object.assign(salad, pair);
    this.salads.push(saladWithToppings)
    this.saladsUpdated.next(this.salads.slice())
    console.log('this.salads.slice(): ', this.salads.slice());
    console.log('%%%%%%%%%: ', BACKEND_URL, saladWithToppings)
    let a = this.http
      .post<{ message: string }>(BACKEND_URL, saladWithToppings)
      .subscribe(responseData => {
        console.log('responseData: ', responseData);
        //THIS IS HOW WE NAVIGATE AWAY TO A DIFFERENT PAGE ON FINISH
        this.router.navigate(["/"])
      },
        err => {
          console.log('ERROR: ', err)

        },
        () => {
          console.log('COMPLETE: ', saladWithToppings)
        }
      )

    console.log('AAAAAAAAA: ', a)
  }




  getSalad(index: number) {
    return this.salads[index];
  }

  getPostUpdateListener() {
    return this.saladsUpdated.asObservable();
  }

}
