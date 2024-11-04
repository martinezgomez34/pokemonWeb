import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakestoreService {
  private apiUrl = 'https://pokeapi.co/api/v2'; 

  constructor(private http: HttpClient) { } 

  getPokemons(): Observable<any> {
    return this.http.get(`${this.apiUrl}/pokemon`);
  }
  getGames(): Observable<any> {
    return this.http.get(`${this.apiUrl}/version`)
  }
  getAbility(): Observable<any> {
    return this.http.get(`${this.apiUrl}/ability`)
  }
}
