import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
}) 
export class EstaLogadoGuard implements CanActivate {
  constructor(private _usuarioService:UsuarioService){}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this._usuarioService.compruebaToken();
  }
  
}
