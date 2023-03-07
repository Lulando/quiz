import { Component, Input, Output } from '@angular/core';
import { DbService } from './services/db.service';
import { Thing } from './data/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private dbService: DbService) {}
}
