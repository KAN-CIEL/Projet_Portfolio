import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calculette } from './calculette/calculette';
import { PokeAPI } from './poke-api/poke-api';
import { TyraDexApiService } from './poke-api/tyradex-api-services';
import { PokemonView } from './poke-api/component/pokemon-view/pokemon-view';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Calculette, PokeAPI],
  providers: [TyraDexApiService],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
