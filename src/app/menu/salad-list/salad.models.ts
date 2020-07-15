import { Topping } from '../../topping.models';

export class Salad {
  public name: string;
  public description: string;
  public imagePath: string;
  public toppings: Topping[];

  constructor(name: string, desc: string, imagePath: string, toppings: Topping[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.toppings = toppings
  }
}
