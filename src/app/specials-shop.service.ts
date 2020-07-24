import { EventEmitter, Injectable } from '@angular/core';

import { Specials } from './menu/specials-list/specials.models';
import { Topping } from './topping.models';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Subject } from "rxjs";


@Injectable()
export class SpecialsShopService {
  specialsSelected = new EventEmitter<Specials>();
  private specialsUpdated = new Subject<Specials[]>();

  private specials: Specials[] = [

  ];

  constructor(private http: HttpClient) { }

  public id: string;
  public name: string;
  public subName: string;
  public description: string;
  public imagePath: string;
  public toppings: Topping[];

  addSpecials(specials: Specials) {

    this.specials.push(specials)
      this.specialsUpdated.next(this.specials.slice())

      let a = this.http
      .post<{ message: string }>("http://localhost:3000/api/specials", specials)
      .subscribe(responseData => {

      })



  }

  getSpecials() {

    this.http
      .get<any>("http://localhost:3000/api/specials")
      .pipe(map((postData) => {


        return postData.specials.map(post => {
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
        this.specials = transformedPosts;


        this.specialsUpdated.next([...this.specials]);

      });

  }

  getSpecial(index: number) {
    return this.specials[index];
  }

  getPostUpdateListener() {
    return this.specialsUpdated.asObservable();
  }


}
