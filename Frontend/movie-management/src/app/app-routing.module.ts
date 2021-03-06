import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSpecComponent } from './add-spec/add-spec.component';
import { AddComponent } from './add/add.component';
import { EditScComponent } from './edit-sc/edit-sc.component'
import { EditComponent } from './edit/edit.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieGuard } from './movie.guard';
import { MovieComponent } from './movie/movie.component';
import { RechercheParScenaristeComponent } from './recherche-par-scenariste/recherche-par-scenariste.component';
import { ScenaristeComponent } from './scenariste/scenariste.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'movie/add', component: AddComponent },
  { path: 'movie/edit', component: EditComponent },
  { path: 'scenariste', component: ScenaristeComponent },
  { path: 'scenariste/edit', component: EditScComponent },
  { path: 'scenariste/add', component: AddSpecComponent },
  { path: 'recherche-par-scenariste', component: RechercheParScenaristeComponent },
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path : "add-film", component : AddComponent, canActivate:[MovieGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
