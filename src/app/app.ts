import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
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
      this.ecran = eval(this.ecran).toString();
    } catch {
      this.ecran = 'Erreur';
    }
  }
}
