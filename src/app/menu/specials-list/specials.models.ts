import { Topping } from '../../topping.models';

export class Specials {
  public name: string;
  public subName: string;
  public description: string;
  public imagePath: string;
  public toppings: Topping[];

  public calories: number;
  public fat: number;
  public transfat: number;
  public sodium: number;
  public price: number;


  constructor(name: string, subName: string,
    desc: string, imagePath: string,
    calories: number, fat: number, price: number,
    transfat: number, sodium: number,
    toppings: Topping[]) {
    this.name = name;
    this.subName = subName;
    this.description = desc;
    this.imagePath = imagePath;
    this.toppings = toppings;
    this.calories = calories;
    this.fat = fat;
    this.transfat = transfat;
    this.sodium = sodium;
    this.price = price;

  }
}
