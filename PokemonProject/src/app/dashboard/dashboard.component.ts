import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { AuthService } from '../auth.service';
import { MessageService } from '../message.service';
import { GuardService } from '../guard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService, public authGuardService: GuardService,
    public authService: AuthService,
           private messageService: MessageService,) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    if (!this.authGuardService.canActivate()) {
      return this.messageService.add("Error: login to access this page.");
    }
    this.pokemonService.getAllPokemon()
      .subscribe(pokemons => this.pokemons = pokemons.slice(1, 5));
  }
}
