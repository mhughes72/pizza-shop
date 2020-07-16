import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { SidesShopService } from '../sides-shop.service';

@Component({
  selector: 'app-sides-form',
  templateUrl: './sides-form.component.html',
  styleUrls: ['./sides-form.component.css']
})
export class SidesFormComponent implements OnInit {

  sidesForm: FormGroup;
  constructor(private sidesShopService: SidesShopService) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    let sidesName = '';
    let toppings = new FormArray([]);


    this.sidesForm = new FormGroup({
      'name': new FormControl('Matt', Validators.required),
      'subName': new FormControl(),
      'description': new FormControl(),
      'imagePath': new FormControl(),
      'toppings': toppings

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
    console.log('SUBMIT')
    this.sidesShopService.addSides(this.sidesForm.value)

  }
}
