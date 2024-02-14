import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemon } from './pokemon';
import { MessageService } from './message.service';
import { Observable, catchError, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemons: Pokemon[] = [];
  searchQuery: string = '';
  searchResults: Pokemon[] = [];
  constructor(private http: HttpClient, private messageService: MessageService) { }

  pokemonsUrls = 'https://softwium.com/api/pokemons';
  localpokemonUrl = 'api/pokemons';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private log(message: string) {
    this.messageService.add(`PokemonService: ${message}`)
  }

  getAllPokemon(): Observable<Pokemon[]> {
    return this.http.get<any[]>(this.pokemonsUrls).pipe(
      map(pokemonList => pokemonList.map(pokemon => this.transformPokemon(pokemon)))
    );
  }

  private transformPokemon(pokemon: any): Pokemon {
    return {
      id: pokemon.id,
      name: pokemon.name,
      height: pokemon.height,
      weight: pokemon.weight,
      types: pokemon.types,
      family: pokemon.family
    };
  }
  
 getPokemon(id: number): Observable<Pokemon> {
    const url = `${this.pokemonsUrls}/${id}`;
    return this.http.get<Pokemon>(url).pipe(
      tap(_ => this.log(`fetched pokemon id=${id}`)),
      catchError(this.handleError<Pokemon>(`getHero id=${id}`))
    );
 }


  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.post<Pokemon>(this.localpokemonUrl, pokemon, this.httpOptions).pipe(
      tap((newPokemon: Pokemon) => this.log(`added pokemon w/ id=${newPokemon.id}`)),
      catchError(this.handleError<Pokemon>('addPokemon'))
    );
  }

  deletePokemon(id: Number): Observable<Pokemon> {
    const url = `${this.localpokemonUrl}/${id}`;

    return this.http.delete<Pokemon>(url, this.httpOptions).pipe(
      tap(_ => this.log(`delete pokemon w/ id=${id}`)),
      catchError(this.handleError<Pokemon>('deletePokemon'))
    );
  }

  updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.put<Pokemon>(this.localpokemonUrl, pokemon, this.httpOptions).pipe(
      tap(_ => this.log(`update pokemon w/ id=${pokemon.id}`)),
      catchError(this.handleError<Pokemon>('updatePokemon'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }

}
