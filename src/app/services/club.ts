import { Auth } from './auth';
import { Injectable } from '@angular/core';
import { Club } from '../model/Club';
import { League } from '../model/League';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LeagueWrapper } from '../model/LeagueWrapped';
const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
  providedIn: 'root'
})
export class ClubService {
  apiURL: string = 'http://localhost:8080/club/api';
  apiURLl: string = 'http://localhost:8080/club/l';
  constructor(private http : HttpClient ,private auth :Auth) {
}

listeClub(): Observable<Club[]>{
 return this.http.get<Club[]>(this.apiURL+"/all");
}

ajouterClub( club: Club):Observable<Club>{
/*let jwt = this.auth.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})*/
return this.http.post<Club>(this.apiURL+"/addclub", club);

}
supprimerClub(id : number) {
const url = `${this.apiURL}/delclub/${id}`;
/*let jwt = this.auth.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})*/
return this.http.delete(url);
}
consulterClub(id: number): Observable<Club> {
const url = `${this.apiURL}/getbyid/${id}`;
/*let jwt = this.auth.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})*/
return this.http.get<Club>(url);
}
UpdateClub(club :Club) : Observable<Club> {
/*let jwt = this.auth.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})*/
return this.http.put<Club>(this.apiURL+"/updateclub", club);
}
listeLeagues():Observable<LeagueWrapper>{
/*let jwt = this.auth.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})*/
return this.http.get<LeagueWrapper>(this.apiURLl);
}
rechercherParLeague(leagueID: number): Observable<Club[]> {
const url = `${this.apiURL}/clubsleague/${leagueID}`;
return this.http.get<Club[]>(url);
}
rechercherParNom(nom: string):Observable< Club[]> {
const url = `${this.apiURL}/clubbyname/${nom}`;
return this.http.get<Club[]>(url);
}
ajouterLeague( l: League):Observable<League>{
return this.http.post<League>(this.apiURLl, l, httpOptions);
}
}
