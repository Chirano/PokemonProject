import { Component, Input, OnInit } from '@angular/core';
import { Pokemon, getPokemonImage } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute,
      private location: Location) { }

  @Input() pokemon?: Pokemon;

  public getPokemonImage = getPokemonImage;

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pokemonService.getPokemon(id)
      .subscribe(pokemon => this.pokemon = pokemon);
  }
  getIndividualTypes(): string[] {
    if (!this.pokemon || !this.pokemon.types) return [];
    const strvalue: string[] = this.pokemon.types.map(type => type.toString());
    return strvalue;
  }
  goBack(): void {
    this.location.back();
  }
}

