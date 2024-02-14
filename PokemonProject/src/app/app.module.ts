import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './base/app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokeCardComponent } from './poke-card/poke-card.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EvolutionLevelPipe } from './Pipes/evolution-level.pipe';
import { ColorByTypeDirective } from './Directives/color-by-type.directive';
import { CreatePokemonComponent } from './create-pokemon/create-pokemon.component';
import { InMemoryDataService } from './in-memory-data.service';
import { httpInterceptorProviders } from './httpInterceptorProviders';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    EvolutionLevelPipe,
    PokeCardComponent,
    DashboardComponent,
    ColorByTypeDirective,
    CreatePokemonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
