import { Component, Input } from '@angular/core';
import { DbService } from '../services/db.service';
import { Thing } from '../data/models';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css'],
})
export class AnswersComponent {
  @Input() answersAnimals: Thing[] = [];
  @Input() answersPlants: Thing[] = [];

  corrColor: string = '#00FF00';
  uncorrColor: string = '#FF0000';

  isAnswerCorrect(target: Thing) {
    return target.answer == target.type;
  }
}
