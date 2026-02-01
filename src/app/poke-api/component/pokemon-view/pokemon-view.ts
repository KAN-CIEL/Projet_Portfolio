import { Component, input } from '@angular/core';
import { Pokemon } from '../../pokemon';
import { PokemonStatistiques } from '../pokemon-statistiques/pokemon-statistiques';
import { PokemonResistancesComp } from '../pokemon-resistances/pokemon-resistances';
import { PokemonTypeInformation } from '../pokemon-type-information/pokemon-type-information';


@Component({
  selector: 'app-pokemon-view',
  imports: [PokemonStatistiques, PokemonResistancesComp, PokemonTypeInformation],
  templateUrl: './pokemon-view.html',
  styleUrl: './pokemon-view.css',
})
export class PokemonView {
  pokemon = input<Pokemon>();
}
