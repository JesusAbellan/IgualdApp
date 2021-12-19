import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Centro } from '../interfaces/centro';

@Injectable({
  providedIn: 'root'
})
export class CentrosService {

  constructor(private _http:HttpClient) { }

  getCentros() {
    return new Promise<Centro[]>((resolve, reject) => {
      const url = `../../assets/centros.json`;
      this._http.get<Centro[]>(url).subscribe(inputs=>{
        resolve(inputs);
      }, err=>{
        console.log('Hay un error trayendo centros');
        reject(err);
      });
    });
  }

}
