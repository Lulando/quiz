import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  index: number = 0;

  addAnimal() {
    this.Questions[this.index].correct =
      this.Questions[this.index].type === 'ZWIERZ' ? true : false;

    this.answAnimals.push(this.Questions[this.index]);
    if (this.index < this.len) this.index += 1;
  }

  addPlant() {
    this.Questions[this.index].correct =
      this.Questions[this.index].type === 'ROSLINA' ? true : false;

    this.answPlants.push(this.Questions[this.index]);
    if (this.index < this.len) this.index += 1;
  }

  check() {
    
  }
}
