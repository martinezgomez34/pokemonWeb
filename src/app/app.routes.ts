import { Routes } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    {
        path: '',
        component: PokemonComponent
    },
    {
        path: 'Details',
        component: DetailsComponent
    },
];
