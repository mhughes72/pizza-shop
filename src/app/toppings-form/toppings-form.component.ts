import { Component, OnInit } from '@angular/core';
// import { Pizza } from '../menu/pizza-list/pizza.models';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ToppingShopService } from '../toppings-shop.service';



@Component({
  selector: 'app-toppings-form',
  templateUrl: './toppings-form.component.html',
  styleUrls: ['./toppings-form.component.css']
})
export class ToppingsFormComponent implements OnInit {

  toppingsForm: FormGroup;
  constructor(private toppingsShopService: ToppingShopService) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    let toppingsName = '';
    let toppings = new FormArray([]);


    this.toppingsForm = new FormGroup({
      'name': new FormControl('Matt', Validators.required),
      'description': new FormControl(),
      'imagePath': new FormControl(),

    })
  }





  onSubmitToppings() {

    this.toppingsShopService.addTopping(this.toppingsForm.value)

  }

}
