import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mattApp01';
  openSidenav = false;

  onToggle() {


  }
  // onSubmit(form: NgForm) {
  //   console.log(form)

  // }
  // onNavigate(feature: string) {
  //   console.log(0)
  // }
}
