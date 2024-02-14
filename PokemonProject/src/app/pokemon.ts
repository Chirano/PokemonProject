import { Type } from './Type';
export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: Type[];
  family: string;
}
export function getPokemonImage(pokemon: Pokemon): string {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonId(pokemon)}.png`;
}

export function getPokemonId(pokemon: Pokemon): number {
  return (pokemon.id);
}

