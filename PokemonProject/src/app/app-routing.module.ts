import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokeCardComponent } from './poke-card/poke-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatePokemonComponent } from './create-pokemon/create-pokemon.component';

const routes: Routes = [
  { path: 'pokemons', component: PokemonListComponent },
  { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
  { path: 'pokecard/:id', component: PokeCardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'mypokemon', component: CreatePokemonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
