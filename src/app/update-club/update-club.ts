import { League } from './../model/League';
import { Component, OnInit } from '@angular/core';
import { Club } from '../model/Club';
import { ClubService } from '../services/club';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-club',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-club.html',
  styles: ``,
})
export class UpdateClub implements OnInit {
  currentclub = new Club();
  Leagues!: League[];
  updateleagueID! : number | undefined;
  constructor(
    private clubService: ClubService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.clubService.listeLeagues().
subscribe(l => {console.log(l);
this.Leagues= l._embedded.leagues;
});

    this.clubService.consulterClub(this.activatedRoute.snapshot.params['id']).subscribe((club) => {
    this.currentclub = club;
    this.updateleagueID = this.currentclub.league?.leagueID;
    })
  }

  updateClub() {

    this.currentclub.league = this.Leagues.find(
      (l) => l.leagueID == this.updateleagueID
    )!;
    this.clubService.updateClub(this.currentclub).subscribe((club) => {
      this.router.navigate(['/clubs']);
    });
  }
}
