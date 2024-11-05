import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakestoreService } from '../service/fakestore.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit{
  pokemon: any;

  constructor(private route: ActivatedRoute, private pokemonService: FakestoreService) { }

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    
    this.pokemonService.getPokemonDetails(name!).subscribe(data => {
      this.pokemon = data;
    });
  }

}
