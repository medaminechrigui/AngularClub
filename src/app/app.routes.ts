import { Routes } from '@angular/router';
import { Clubs } from './clubs/clubs';
import { AddClub } from './add-club/add-club';
import { UpdateClub } from './update-club/update-club';
import { RechercheParLeague } from './recherche-par-league/recherche-par-league';
import { RechercheParNom } from './recherche-par-nom/recherche-par-nom';
import { ListeLeagues } from './liste-leagues/liste-leagues';
import { Login } from './login/login';
import { Forbidden } from './forbidden/forbidden';
import { clubGuard } from './club-guard';

export const routes: Routes = [
{path: "updateClub/:id", component: UpdateClub},
{path: "clubs", component : Clubs},
{path: "add-club", component : AddClub,canActivate:[clubGuard]},
{path: "", redirectTo: "clubs", pathMatch: "full"},
{path: "rechercheParLeague", component : RechercheParLeague},
{path: "rechercheParNom", component : RechercheParNom},
{path: "listeLeagues", component : ListeLeagues},
{path: 'login', component: Login},
{path: 'app-forbidden', component: Forbidden},




];
