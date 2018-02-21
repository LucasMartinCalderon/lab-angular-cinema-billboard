import { Routes } from "@angular/router";
import { MyHomeComponentComponent } from './my-home-component/my-home-component.component';
import { MyMovieComponentComponent } from './my-movie-component/my-movie-component.component';


const routes:Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: MyHomeComponentComponent },
  { path: 'movie/:id', component: MyMovieComponentComponent }
];

export {routes};