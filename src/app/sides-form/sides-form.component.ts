import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { SidesShopService } from '../sides-shop.service';
import { Topping } from '../topping.models';

@Component({
  selector: 'app-sides-form',
  templateUrl: './sides-form.component.html',
  styleUrls: ['./sides-form.component.css']
})
export class SidesFormComponent implements OnInit {
  @Input() selectedToppingArray: Topping;
  sidesForm: FormGroup;
  constructor(private sidesShopService: SidesShopService) { }
  toppings: Topping;
  ngOnInit(): void {
    this.initForm();
  }

  updateToppings($event) {
    this.toppings = $event;
  }

  private initForm() {

    this.sidesForm = new FormGroup({
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

    (<FormArray>this.sidesForm.get('toppings')).push(
      new FormGroup({
        'name': new FormControl(),
        'description': new FormControl(),
        'imagePath': new FormControl()
      })
    )
  }

  onSubmitSides() {
    this.sidesShopService.addSides(this.sidesForm.value, this.toppings)
  }

}



