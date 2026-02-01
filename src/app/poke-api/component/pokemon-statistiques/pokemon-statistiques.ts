import { Component, input } from '@angular/core';
import { PokemonStat } from '../../pokemon-stat';

@Component({
  selector: 'app-pokemon-statistiques',
  imports: [],
  templateUrl: './pokemon-statistiques.html',
  styleUrl: './pokemon-statistiques.css',
})
export class PokemonStatistiques {
  statistics = input<PokemonStat>();
}
