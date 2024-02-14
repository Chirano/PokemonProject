import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pokemons = [
      { id: 124, name: 'Newlasaur' },
      
    ];
    return { pokemons };
  }

  
  genId(pokemons: Pokemon[]): number {
    return pokemons.length > 0 ? Math.max(...pokemons.map(pokemons => pokemons.id)) + 1 : 11;
  }
}
