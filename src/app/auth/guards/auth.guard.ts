import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanLoad, CanActivate {

  constructor(private authService: AuthService){}

  canActivate( //Esto evita que el modulo se active 
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.authService.auth.id) {
        return true;
      }
    
    console.log("bloqueado - CanAtivate")
    return true;
  }
  canLoad( //Solo sirve para prevenir que el usuario cargue el modulo
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

      return this.authService.verificaAutenticacion()

      /*if (this.authService.auth.id) {
        return true;
      }
    
    console.log("bloqueado")
    return false; //Si regresa false no deja pasar a la ruta*/
  }
}
