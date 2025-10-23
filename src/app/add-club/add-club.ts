import { Component, OnInit } from '@angular/core';
import { Club } from '../model/Club';
import { FormsModule } from '@angular/forms';
import { ClubService } from '../services/club';
import { League } from '../model/League';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-add-club',
  templateUrl: './add-club.html',
  styleUrls: ['./add-club.css']
})
export class AddClub implements OnInit {
newClub = new Club();
Leagues! : League[];
newIdl! : number;
newLeague! : League;
constructor(private ClubService: ClubService,
private router :Router) { }
ngOnInit(): void {
this.ClubService.listeLeagues().
subscribe(cats => {console.log(cats);
this.Leagues = cats._embedded.leagues;
}
);
}

addClub(){
delete this.newClub.idClub;
this.newClub.league = this.Leagues.find(l => l.leagueID == this.newIdl)!;
this.ClubService.ajouterClub(this.newClub)
.subscribe(prod => {
console.log(prod);
this.router.navigate(['clubs']);
});
}
}
