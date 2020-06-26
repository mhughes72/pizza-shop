import { Subject } from 'rxjs/Subject'
import { Special } from './specials.models';

export class SpecialsService {

  exerciseChanged = new Subject<Special>();

  availableSpecials: Special[] = [


    { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
    { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
    { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
    { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }

  ];
  private runningSpecial: Special;

  getSpecials() {

    return this.availableSpecials.slice();
  }

getRunningExercise() {
  return { ...this.runningSpecial};
}

  startExercise(selectedId: string) {

    this.runningSpecial = this.availableSpecials.find(ex => ex.id === selectedId);
    this.exerciseChanged.next({ ...this.runningSpecial })

  }
}















