import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.component.html',
  styleUrls: ['./create-pokemon.component.css']
})
export class CreatePokemonComponent {
  newPokemon!: Pokemon;
  pokemons: Pokemon[] = [];
  pokemonForm: FormGroup | undefined;

  constructor(private formBuilder: FormBuilder, private pokemonService: PokemonService) {

  }

  onSubmit() {
    if (this.isValidPokemon(this.newPokemon)) {
      this.pokemonService.addPokemon(this.newPokemon)
        .subscribe(() => {
          console.log('Pokemon added successfully');
          this.resetPokemon();
        }, error => {
          console.error('Error adding pokemon:', error);
        });
    } else {
      console.error('Invalid pokemon. Cannot submit.');
    }
  }

  isValidPokemon(pokemon: any): boolean {
    return pokemon &&
      pokemon.name && pokemon.name.trim() !== '' &&
      pokemon.height && !isNaN(pokemon.height) &&
      pokemon.weight && !isNaN(pokemon.weight) &&
      pokemon.type && pokemon.type.trim() !== '';
  }

  resetPokemon() {
    this.newPokemon = {
      id: 0,
      name: '',
      height: 0,
      weight: 0,
      types: [],
      family: ''
    };

  }
}



