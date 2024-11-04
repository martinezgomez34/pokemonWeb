import { Component , OnInit} from '@angular/core';
import { FakestoreService } from '../service/fakestore.service';
import { CommonEngine } from '@angular/ssr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent implements OnInit{
  pokemons: any[] = [];
  games: any[] = [];
  ability: any[] = [];

  constructor(private pokemonService: FakestoreService) { }

  ngOnInit(): void {
    this.Pokemons();
    this.Games();
    this.Ability();
  }

  Pokemons(): void {
    this.pokemonService.getPokemons().subscribe(response => {
      this.pokemons = response.results;
    });
  }
  Games(): void {
    this.pokemonService.getGames().subscribe(response => {
      this.games = response.results;
    })
  }
  Ability(): void {
    this.pokemonService.getAbility().subscribe(response => {
      this.ability = response.results;
    });
  }

}
