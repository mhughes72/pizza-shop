import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { PizzaShopService } from '../pizza-shop.service';
import { Topping } from '../topping.models';

@Component({
  selector: 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.css']
})
export class PizzaFormComponent implements OnInit {
  @Input() selectedToppingArray: Topping;
  pizzaForm: FormGroup;
  constructor(private pizzaShopService: PizzaShopService) { }
  toppings: Topping;
  ngOnInit(): void {
    this.initForm();
  }

  updateToppings($event) {
    this.toppings = $event;
  }

  private initForm() {

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
    this.pizzaShopService.addPizza(this.pizzaForm.value, this.toppings)
  }

}



