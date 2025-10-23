import { League } from './../model/League';
import { ClubService } from './../services/club';
import { Component, OnInit } from '@angular/core';
import { Club } from '../model/Club';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-recherche-par-league',
  imports: [FormsModule, CommonModule],
  templateUrl: './recherche-par-league.html',
  styles: ``
})
export class RechercheParLeague implements OnInit{
clubs! : Club[];
Idl! : number;
leagues! : League[];
constructor(private clubService: ClubService) { }
ngOnInit(): void {
this.clubService.listeLeagues().
subscribe(l => {this.leagues = l._embedded.leagues;
console.log(l);
});
}
onChange() {
this.clubService.rechercherParLeague(this.Idl).
subscribe(c =>{this.clubs=c});
}

}
