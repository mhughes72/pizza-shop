import { Component, OnInit } from '@angular/core';
import { SpecialsService } from 'src/app/specials.service';
import { Special } from 'src/app/specials.models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-specials01',
  templateUrl: './specials01.component.html',
  styleUrls: ['./specials01.component.css']
})
export class Specials01Component implements OnInit {
  specials: Special[] = [];
  constructor(private specialsService: SpecialsService) {

  }

  onStartTraining(form: NgForm) {
    console.log(form)
    this.specialsService.startExercise(form.value.specials);
  }
  ngOnInit(): void {
    this.specials = this.specialsService.getSpecials();
  }

}
