import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    {
        path: '',
        component: PokemonComponent
    },
    {   path: 'pokemon/:name',
        component: DetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}