import { Component, input } from '@angular/core';
import { PokemonType } from '../../pokemon-type';

@Component({
  selector: 'app-pokemon-type-information',
  imports: [],
  templateUrl: './pokemon-type-information.html',
  styleUrl: './pokemon-type-information.css',
})
export class PokemonTypeInformation {
  types = input<PokemonType[]>();
}
