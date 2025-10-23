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

  constructor(private http : HttpClient) {
}
listeClub(): Observable<Club[]>{
return this.http.get<Club[]>(this.apiURL);
}
ajouterClub( C: Club):Observable<Club>{
return this.http.post<Club>(this.apiURL, C, httpOptions);
}
supprimerClub(id : number) {
const url = `${this.apiURL}/${id}`;
return this.http.delete(url, httpOptions);
}
consulterClub(id: number): Observable<Club> {
const url = `${this.apiURL}/${id}`;
return this.http.get<Club>(url);
}
updateClub(c :Club): Observable<Club> {
    return this.http.put<Club>(this.apiURL, c, httpOptions);
}
listeLeagues():Observable<LeagueWrapper>{
return this.http.get<LeagueWrapper>(this.apiURLl);
}
rechercherParLeague(leagueID: number):Observable< Club[]> {
const url = `${this.apiURL}/clubsleague/${leagueID}`;
return this.http.get<Club[]>(url);
}
rechercherParNom(nom: string):Observable< Club[]> {
const url = `${this.apiURL}/clubbyname/${nom}`;
return this.http.get<Club[]>(url);
}
ajouterLeague( l : League):Observable<League>{
return this.http.post<League>(this.apiURLl, l, httpOptions);
}
}
