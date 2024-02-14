import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService, public authService: AuthService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonService.getAllPokemon()
      .subscribe(pokemons => this.pokemons = pokemons.slice(1, 5));
  }
}
