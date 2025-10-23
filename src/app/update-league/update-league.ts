import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { League } from '../model/League';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-league',
  imports: [FormsModule],
  templateUrl: './update-league.html',
  styles: ``
})
export class UpdateLeague implements OnInit{
@Input()
league! : League;
@Output()
leagueUpdated = new EventEmitter<League>();
@Input()
ajout!:boolean;
ngOnInit(): void {
console.log("ngOnInit du composant UpdateLeague ",this.league);
}
saveLeague(){
this.leagueUpdated.emit(this.league);
}
}
