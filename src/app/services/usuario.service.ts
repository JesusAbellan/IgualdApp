import { RespuestaLogin } from './../interfaces/RespuestaLogin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RespuestaRegistro } from '../interfaces/RespuestaRegistro';
import { Storage } from '@capacitor/storage';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private _http:HttpClient,
              private _router:Router) { }

  public url = environment.urlUsuario;
  
  crearUsuario(usuario:any){
   return new Promise<RespuestaRegistro>((resolve, reject) => {
      this._http.post<RespuestaRegistro>(`${this.url}newUser`, usuario).subscribe(resp=>{resolve(resp);
      }, err=>{
        console.log('Hay un error creando usuario');
        reject(err);
      });
    });
  }

  login(usuario:any){
    return new Promise<RespuestaLogin>((resolve, reject) => {
       this._http.post<RespuestaLogin>(`${this.url}login`, usuario).subscribe(resp=>{resolve(resp);
        if (resp.status=='ok') {
          this.guardaToken(resp.token);
        }
       }, err=>{
         console.log('Hay un error en el login');
         reject(err);
       });
     });
   }

   async getToken(){
     const tokenAlmacenado = await Storage.get({ key: 'token' });
     if (tokenAlmacenado) {
       return tokenAlmacenado.value;
     }
     return null;
   }

   async compruebaToken():Promise<boolean> {
     const token = await this.getToken();
     if (!token) {
       this._router.navigate(['login']);
       return Promise.resolve(false);
     }else{
       
     }
   }

   async guardaToken(token:string){
    await Storage.set({
      key:'token',
      value:token
    });
    const tokenAlmacenado = (await Storage.get({ key: 'token' })).value;
   }
}
  