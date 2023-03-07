import { Injectable } from '@angular/core';
import { WORDS } from '../data/db';
import { Thing } from '../data/models';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  constructor() {}

  getThings() {
    return WORDS;
  }
}
