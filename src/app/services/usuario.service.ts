import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RespuestaRegistro } from '../interfaces/respuestaRegistro';
import { RespuestaLogin } from '../interfaces/respuestaLogin';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private _http:HttpClient) { }

  public url = environment.urlUsuario;
  
  crearUsuario(usuario:any){
    return new Promise<RespuestaRegistro>(resolve => {
      this._http.post<RespuestaRegistro>(`${this.url}newUser`,usuario).subscribe(resp=>{
        resolve(resp)
      });
    });
  }

  login(usuario:any){
    return new Promise<RespuestaLogin>(resolve => {
      this._http.post<RespuestaLogin>(`${this.url}login`,usuario).subscribe(resp=>{
        console.log(resp);
        resolve(resp)
      });
    });
  }
}
