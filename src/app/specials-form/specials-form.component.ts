import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { SpecialsShopService } from '../specials-shop.service';
import { Topping } from '../topping.models';

@Component({
  selector: 'app-specials-form',
  templateUrl: './specials-form.component.html',
  styleUrls: ['./specials-form.component.css']
})
export class SpecialsFormComponent implements OnInit {
  @Input() selectedToppingArray: Topping;
  specialsForm: FormGroup;
  constructor(private specialsShopService: SpecialsShopService) { }
  toppings: Topping;
  ngOnInit(): void {
    this.initForm();
  }

  updateToppings($event) {
    this.toppings = $event;
  }

  private initForm() {

    this.specialsForm = new FormGroup({
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

    (<FormArray>this.specialsForm.get('toppings')).push(
      new FormGroup({
        'name': new FormControl(),
        'description': new FormControl(),
        'imagePath': new FormControl()
      })
    )

  }

  onSubmitSpecials() {
    this.specialsShopService.addSpecials(this.specialsForm.value, this.toppings)
  }

}



