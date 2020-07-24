import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { ToppingShopService } from '../toppings-shop.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Topping } from '../topping.models';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-toppings-select',
  templateUrl: './toppings-select.component.html',
  styleUrls: ['./toppings-select.component.css']
})
export class ToppingsSelectComponent implements OnInit, AfterViewInit {
  private toppingsSub: Subscription;


  test: Array<string> = ["hello", "bye", "fuck"];
  toppings: Topping[];
  selectedToppingArray: Topping[] = [];
  @Output() valueChange= new EventEmitter<any>();
  selectedTopping: string;
  toppingsForm = new FormControl(this.selectedTopping);
  constructor(private toppingShopService: ToppingShopService) { }

  ngAfterViewInit() {
    this.toppingShopService.getToppings();
    this.toppingsSub = this.toppingShopService.getPostUpdateListener()
      .subscribe((toppings: Topping[]) => {
        this.toppings = toppings;

      });
  }
  updateAllComplete() { }
  ngOnInit(): void {}

  OnChange($event) {
    const result = this.toppings.find(({ name }) => name === $event.source.value);
    console.log('this.selectedToppingArray: ', this.selectedToppingArray);
    if ($event.checked) {
      this.selectedToppingArray.push(result)
      this.valueChange.emit(this.selectedToppingArray);
    } else {
      for (var i = 0; i < this.selectedToppingArray.length; i++) {
        if (this.selectedToppingArray[i] === result) {
          this.selectedToppingArray.splice(i, 1);
        }
      }
    }
      console.log(this.selectedToppingArray)


      const checkedBox = $event.source.value;
      // const found = this.toppings.find(element => element == checkedBox);





    }



  }
