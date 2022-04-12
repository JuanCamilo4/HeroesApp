import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroe } from '../interfaces/Heroe.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseURL: string = environment.baseURL;

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.baseURL}/heroes`);
  }
  
  getHeroeById(_id: string): Observable<Heroe> {
    return this.http.get<Heroe>(`${this.baseURL}/heroes/${_id}`);
  }

  getSugerencias(termino: string): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.baseURL}/heroes?q=${termino}`);
  }

}
