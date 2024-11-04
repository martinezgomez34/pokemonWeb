import { Component, OnInit } from '@angular/core';
import { FakestoreService } from '../service/fakestore.service';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [

  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit{
  ability: any[] = [];
  
  constructor(private pokemonService: FakestoreService) { }

  ngOnInit(): void {
    this.Ability();
  }

  Ability(): void {
    this.pokemonService.getAbility().subscribe(response => {
      this.ability = response.results;
    });
  }

}
