import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Club } from '../model/Club';
import { ClubService } from '../services/club';
import { SearchFilterPipe } from '../search-filter-pipe';

@Component({
  selector: 'app-recherche-par-nom',
  standalone: true,
  imports: [FormsModule, CommonModule,SearchFilterPipe],
  templateUrl: './recherche-par-nom.html',
  styles: ``
})
export class RechercheParNom implements OnInit {

  allClubs!: Club[];
  clubs!: Club[];
  searchTerm!: string;

  constructor(private clubService: ClubService) {}

  ngOnInit(): void {
    this.clubService.listeClub().subscribe((c) => {
      console.log(c);
      this.clubs = c; // initialize displayed list
    });
  }
  onKeyUp(filterText: string) {
    if (!filterText) {
      // if input is empty, show all clubs again
      this.clubs = this.allClubs;
      return;
    }
    const lower = filterText.toLowerCase();
    this.clubs = this.allClubs.filter((item) =>
      item.nameClub?.toLowerCase().includes(lower)
    );
  }
}
