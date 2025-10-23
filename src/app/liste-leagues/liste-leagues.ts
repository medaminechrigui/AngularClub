import { Component, OnInit } from '@angular/core';
import { League } from '../model/League';
import { ClubService } from '../services/club';
import { UpdateLeague } from "../update-league/update-league";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liste-leagues',
  imports: [CommonModule,UpdateLeague],
  templateUrl: './liste-leagues.html',
  styles: ``
})
export class ListeLeagues implements OnInit {
 updatedl:League = {"leagueID":0,"leagueName":""};
Leagues! : League[];
ajout:boolean=true;
constructor(private clubService : ClubService) { }
ngOnInit(): void {
this.clubService.listeLeagues().
subscribe(cats => {this.Leagues = cats._embedded.leagues;
console.log(cats);
});
}
leagueUpdated(l: League){
console.log("league updated event",l);
this.clubService.ajouterLeague(l).
 subscribe( ()=> this.chargerLeagues());
}
chargerLeagues(){
this.clubService.listeLeagues().
subscribe(l => {this.Leagues = l._embedded.leagues;
console.log(l);
});

}
updatel(l:League) {
this.updatedl=l;
this.ajout=false; 
}
}
