import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription'
import { SpecialsService } from '../specials.service';

@Component({
  selector: 'app-specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.css']
})
export class SpecialsComponent implements OnInit {

  ongoingTraining=false;
  exerciseSubscription: Subscription;

  constructor(private specialsService: SpecialsService) { }

  ngOnInit() {
    this.exerciseSubscription = this.specialsService.exerciseChanged.subscribe(exercise => {
      exercise => {
        if (exercise) {
          this.ongoingTraining=true;
        } else {
          this.ongoingTraining=false;
        }
      }

    });
  }

}
