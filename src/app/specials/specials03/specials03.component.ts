import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Special } from 'src/app/specials.models';
import { SpecialsService } from 'src/app/specials.service';

@Component({
  selector: 'app-specials03',
  templateUrl: './specials03.component.html',
  styleUrls: ['./specials03.component.css']
})
export class Specials03Component implements OnInit {
  displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];
  dataSource = new MatTableDataSource<Special>();
  constructor(private specialService: SpecialsService) { }

  ngOnInit(): void {
    this.dataSource.data = this.specialService.getSpecials();
  }

}
