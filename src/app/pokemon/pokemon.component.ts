import { Component , OnInit} from '@angular/core';
import { FakestoreService } from '../service/fakestore.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent implements OnInit{
  pokemons: any[] = []; 
  favorites: Set<string> = new Set(); 
  constructor(private pokemonService: FakestoreService, private router: Router) { } 
  
    ngOnInit(): void { this.pokemonService.getPokemons().subscribe(data => { this.pokemons = data.results; }); } toggleFavorite(pokemon: any): void { if (this.favorites.has(pokemon.name)) { this.favorites.delete(pokemon.name); } else { this.favorites.add(pokemon.name); } } navigateToDetail(name: string): void { this.router.navigate(['/pokemon', name]); }
}
