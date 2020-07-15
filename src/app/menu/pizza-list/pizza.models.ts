import { Topping } from '../../topping.models';

export class Pizza {
  public id: string;
  public name: string;
  public subName: string;
  public description: string;
  public imagePath: string;
  public toppings: Topping[];

  constructor(name: string, subName: string, desc: string, imagePath: string, toppings: Topping[]) {
    this.name = name;
    this.subName = subName;
    this.description = desc;
    this.imagePath = imagePath;
    this.toppings = toppings
  }
}
