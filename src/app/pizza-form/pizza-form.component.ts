import { Component, OnInit } from '@angular/core';
// import { Pizza } from '../menu/pizza-list/pizza.models';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { PizzaShopService } from '../pizza-shop.service';
import { Topping } from '../topping.models';

@Component({
  selector: 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.css']
})
export class PizzaFormComponent implements OnInit {

  pizzaForm: FormGroup;
  constructor(private pizzaShopService: PizzaShopService) { }
  toppings: Topping
  ngOnInit(): void {
    this.initForm();
  }


  updateToppings($event) {
    console.log('EVENT: ', $event)
    this.toppings = $event;

  }

  private initForm() {
    let pizzaName = '';
    let toppings = new FormArray([]);


    this.pizzaForm = new FormGroup({
      'name': new FormControl('Matt', Validators.required),
      'subName': new FormControl(),
      'description': new FormControl(),
      'imagePath': new FormControl('founders.jpg'),
      'calories': new FormControl(),
      'fat': new FormControl(),
      'transfat': new FormControl(),
      'sodium': new FormControl(),
      'price': new FormControl(),
      // 'toppings': this.toppings

    })
  }


onAddTopping() {
  (<FormArray>this.pizzaForm.get('toppings')).push(
    new FormGroup({
      'name': new FormControl(),
      'description': new FormControl(),
      'imagePath': new FormControl()
    })
  )

}


  onSubmitPizza() {
    console.log('this.toppings: ', this.toppings);
    console.log('this.pizzaForm.value: ', this.pizzaForm.value);
    this.pizzaShopService.addPizza(this.pizzaForm.value, this.toppings)


  }j

  addTopping() {
    console.log('ADD')
  }

}



