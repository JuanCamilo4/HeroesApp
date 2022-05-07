import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = environment.baseURL;
  private _auth: Auth | undefined;

  get auth() {
    return {...this._auth}
  }

  constructor(private http: HttpClient) { }

  verificaAutenticacion(): Observable<boolean> | boolean {
    if (!localStorage.getItem('token')) {
      return false;
    }

    return this.http.get<Auth>(`${this.url}/usuarios/1`)
      .pipe( //Eñ map recibe el valor y lo transforma
        map(auth => {{
          console.log(auth);
          return true;
        }})
      )
  }

  login(){
    return this.http.get<Auth>(`${this.url}/usuarios/1`)
      .pipe( //El tap se usa para crear efectos secundarios. Antes de hacer la petición va a psar por el tap
        tap(res => this._auth = res),
        tap(res => localStorage.setItem('id', res.id))
      )
  }

}
