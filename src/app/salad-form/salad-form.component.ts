import { Component, OnInit } from '@angular/core';
import { Pizza } from '../menu/pizza-list/pizza.models';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { SaladShopService } from '../salad-shop.service';

@Component({
  selector: 'app-salad-form',
  templateUrl: './salad-form.component.html',
  styleUrls: ['./salad-form.component.css']
})

export class SaladFormComponent implements OnInit {

  saladForm: FormGroup;
  constructor(private saladShopService: SaladShopService) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    let saladName = '';
    let toppings = new FormArray([]);



    this.saladForm = new FormGroup({
      'name': new FormControl('Matt', Validators.required),
      'subName': new FormControl(),
      'description': new FormControl(),
      'imagePath': new FormControl(),

      'calories': new FormControl(),
      'fat': new FormControl(),
      'transfat': new FormControl(),
      'sodium': new FormControl(),
      'price': new FormControl(),

      'toppings': toppings

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

    this.saladShopService.addSalad(this.saladForm.value)

  }
}
