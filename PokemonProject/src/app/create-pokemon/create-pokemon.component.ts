import { Component, Type } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.component.html',
  styleUrls: ['./create-pokemon.component.css']
})
export class CreatePokemonComponent {
  newPokemon: Pokemon = {
    id: 0,
    name: '',
    height: 0,
    weight: 0,
    types: [''],
    family: ''
  }


  pokemonList: any[] = [];
  pokemonForm: FormGroup | undefined;

  constructor(private formBuilder: FormBuilder, private pokemonService: PokemonService) {

  }

  addPokemon(name: string, height: number, weight: number, types: string, family: string): void {
    if (!name) { return; }
    this.pokemonService.addPokemon({ name, height, weight, family } as Pokemon)
      .subscribe(pokemon => {
        this.pokemonList.push(pokemon);
      });
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



