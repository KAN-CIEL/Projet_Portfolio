import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Pokemon } from './pokemon';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms'
import { TyraDexApiService } from './tyradex-api-services';
import { PokemonView } from './component/pokemon-view/pokemon-view';

@Component({
  selector: 'app-poke-api',
  imports: [ReactiveFormsModule, PokemonView],
  templateUrl: './poke-api.html',
  styleUrl: './poke-api.css',
})
export class PokeAPI {
  protected title = "tyradex-angular-project";

  private pokemonService = inject(TyraDexApiService);

  pokemonData: Pokemon | undefined;

  pokemonForm = new FormGroup({
    pokemonName: new FormControl('')
  });

  

  onSubmit() {
    const pokemonName = this.pokemonForm.value.pokemonName;
    console.log('Nom saisi : ', pokemonName);

    if (pokemonName) {
      this.pokemonService.getPokemonByName(pokemonName)
      .subscribe(reponse => {
        if (reponse.status === 404) {
          console.error(`Pokémon non trouvé : $(pokemonName`);
        }
        console.log('Reponse API :', reponse)
        this.pokemonData = reponse;
      })
    }
  }
}
