import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { SaladShopService } from '../salad-shop.service';
import { Topping } from '../topping.models';

@Component({
  selector: 'app-salad-form',
  templateUrl: './salad-form.component.html',
  styleUrls: ['./salad-form.component.css']
})
export class SaladFormComponent implements OnInit {
  @Input() selectedToppingArray: Topping;
  saladForm: FormGroup;
  constructor(private saladShopService: SaladShopService) { }
  toppings: Topping;
  ngOnInit(): void {
    this.initForm();
  }

  updateToppings($event) {
    this.toppings = $event;
  }

  private initForm() {

    this.saladForm = new FormGroup({
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

    (<FormArray>this.saladForm.get('toppings')).push(
      new FormGroup({
        'name': new FormControl(),
        'description': new FormControl(),
        'imagePath': new FormControl()
      })
    )

  }

  onSubmitSalad() {

    this.saladShopService.addSalad(this.saladForm.value, this.toppings)

  }

}



