import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-calculette',
  imports: [],
  templateUrl: './calculette.html',
  styleUrl: './calculette.css',
})
export class Calculette {
  protected readonly title = signal('test_1');

  ecran = '';

  press(num : string) {
    this.ecran += num;
  }

  clear() {
    this.ecran = '';
  }

  calculer() {
    try{
      this.ecran = Function('"use strict";return ('  + this.ecran + ')')().toString();
    } catch {
      this.ecran = 'Erreur';
    }
  }
}
