import { Component, OnInit } from '@angular/core';
import { Club } from '../model/Club';
import { ClubService } from './../services/club';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Auth } from '../services/auth';
@Component({
  imports: [CommonModule,RouterLink],
  selector: 'app-clubs',
  templateUrl: './clubs.html',
  styleUrls: ['./clubs.css']
})
export class Clubs implements OnInit {
  Clubs: Club[] = [];
  // initialize to avoid undefined error

  constructor(private clubService: ClubService,public auth:Auth) {}

  ngOnInit(): void {
this.chargerClubs();
}

chargerClubs(){
this.clubService.listeClub().subscribe(c => {
console.log(c);
this.Clubs = c;
});
}
supprimerClub(p: Club) {
  const conf = confirm('Etes-vous sûr ?');
  if (conf && p.idClub !== undefined) {
    this.clubService.supprimerClub(p.idClub).subscribe(() => {
      console.log('Club supprimé');
      this.chargerClubs();
    });
  }
}
}
