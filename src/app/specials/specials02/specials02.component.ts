import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingComponent } from './stop-training.component';
import { SpecialsService } from 'src/app/specials.service';

@Component({
  selector: 'app-specials02',
  templateUrl: './specials02.component.html',
  styleUrls: ['./specials02.component.css']
})
export class Specials02Component implements OnInit {
  @Output() trainingExit = new EventEmitter<void>();
  progress = 0;
  timer: number;
  constructor(private dialog: MatDialog, private specialsService: SpecialsService) { }

  ngOnInit(): void {
    this.startOrResumeTimer()
  }

  startOrResumeTimer() {

    const step = this.specialsService.getRunningExercise().duration / 100 * 1000;

    this.timer = setInterval(() => {
      this.progress = this.progress + 20;
      if (this.progress >= 100) {
        clearInterval(this.timer)
      };
    }, step)
  }



  onStop() {

    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: {
        progress: this.progress
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.trainingExit.emit();
      } else {
        this.startOrResumeTimer();
      }
    })

  }
}
