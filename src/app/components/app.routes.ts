import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ArtistsComponent } from './artists/artists.component';

const routes: Routes = [
    { path: 'Home', component: HomeComponent },
    { path: 'Search', component: SearchComponent},
    { path: 'Artists/:id', component: ArtistsComponent},
    { path: '**', pathMatch:'full', redirectTo: 'Home'}
];

export const appRouting = RouterModule.forRoot(routes);
