import { EventEmitter, Injectable } from '@angular/core';

import { Salad } from './salad.models';
import { Topping } from './topping.models';

@Injectable()
export class SaladShopService {
  saladSelected = new EventEmitter<Salad>();

  private salads: Salad[] = [
    // new Salad(
    //   'PINEAPPLE, BEET & GOAT CHEESE SALAD',
    //   'Satay Chicken Strips, Lettuce, Carrots, Rice Noodles, Cucumbers, Bean Sprouts, Cilantro, Peanuts and Sesame Seeds Tossed with Thai Vinaigrette.',
    //   'https://www.thecheesecakefactory.com/assets/images/Menu-Import/CCF_Social_ThaiChickenSalad.jpg',
    //   [
    //     new Topping('Meat', 'something', 'http://www.youtube.com'),
    //     new Topping('Green Pepper', 'something', 'http://www.youtube.com'),


    //   ]),
    //   new Salad(
    //     'SHEILA CHICKEN AND AVOCADO SALAD',
    //     'Grilled Chicken, Fresh Avocado, Mixed Greens, Crisp Tortilla Strips, Carrots, Cilantro and Cashews Tossed in a Citrus-Honey-Peanut Vinaigrette.',
    //     'https://www.thecheesecakefactory.com/assets/images/Menu-Import/CCF_Social_SheilasChickenandAvocadoSalad.jpg',
    //     [
    //       new Topping('Meat', 'something', 'http://www.youtube.com'),
    //       new Topping('Green Pepper', 'something', 'http://www.youtube.com'),

    //     ]),
    //     new Salad(
    //       'BARBEQUE RANCH CHICKEN SALAD',
    //       'Avocado, Tomato, Grilled Corn, Black Beans, Cucumber and Romaine All Tossed with Our Barbeque Ranch Dressing. Topped with Lots of Crispy Fried Onion Strings for Crunch.',
    //       'https://www.thecheesecakefactory.com/assets/images/Menu-Import/CCF_BarbequeRanchChickenSalad.jpg',
    //       [
    //         new Topping('Meat', 'something', 'http://www.youtube.com'),
    //         new Topping('Green Pepper', 'something', 'http://www.youtube.com'),

    //       ]),

  ];

  constructor() {}


  getSalads() {
    return this.salads.slice();
  }

  getSalad(index: number) {
    return this.salads[index];
  }

  addIngredientsToShoppingList(ingredients: Topping[]) {
    // this.slService.addIngredients(ingredients);
  }
}
