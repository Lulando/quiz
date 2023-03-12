import { Component } from '@angular/core';
import { DbService } from '../services/db.service';
import { Thing } from '../data/models';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent {
  constructor(private dbService: DbService) {}

  Questions: Thing[] = this.dbService.getThings();
  answAnimals: Thing[] = [];
  answPlants: Thing[] = [];
  len: number = this.Questions.length;
  tempThing?: Thing;
  checkClicked: boolean = false;
  index: number = 0;

  addAnimal() {
    this.tempThing = this.Questions[this.index];
    this.tempThing.answer = 'ZWIERZ';

    this.answAnimals.push(this.tempThing);
    if (this.index < this.len) this.index += 1;
  }

  addPlant() {
    this.tempThing = this.Questions[this.index];
    this.tempThing.answer = 'ROSLINA';

    this.answPlants.push(this.tempThing);
    if (this.index < this.len) this.index += 1;
  }

  check() {
    this.checkClicked = true;
  }
}
