import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { MessageService } from '../message.service';
import { Pokemon, getPokemonImage } from '../pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[] = [];
  public getPokemonImage = getPokemonImage;

  constructor(private pokemonService: PokemonService, private messageService: MessageService) { }

  getPokemons(): void {
    this.pokemonService.getAllPokemon().subscribe((data: Pokemon[]) => this.pokemons = data);
  }

  ngOnInit(): void {
    this.getPokemons();
  }

}
