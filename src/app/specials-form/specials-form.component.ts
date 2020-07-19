import { Component, OnInit } from '@angular/core';
// import { Pizza } from '../menu/pizza-list/pizza.models';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { SpecialsShopService } from '../specials-shop.service';

@Component({
  selector: 'app-specials-form',
  templateUrl: './specials-form.component.html',
  styleUrls: ['./specials-form.component.css']
})

export class SpecialsFormComponent implements OnInit {

  specialsForm: FormGroup;
  constructor(private specialsShopService: SpecialsShopService) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    let specialsName = '';
    let toppings = new FormArray([]);


    this.specialsForm = new FormGroup({
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
  (<FormArray>this.specialsForm.get('toppings')).push(
    new FormGroup({
      'name': new FormControl(),
      'description': new FormControl(),
      'imagePath': new FormControl()
    })
  )

}


  onSubmitSpecials() {
    console.log("SUBMIT SPECIAL")
    this.specialsShopService.addSpecials(this.specialsForm.value)

  }
}
