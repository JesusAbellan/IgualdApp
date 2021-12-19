import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Input } from '../interfaces/input';

@Injectable({
  providedIn: 'root'
})
export class InputService {

  constructor(private _http:HttpClient) { }

  getInputs() {
    return new Promise<Input[]>((resolve, reject) => {
      const url = '../../assets/login.json';
      this._http.get<Input[]>(url).subscribe(inputs=>{
        resolve(inputs);
      }, err=>{
        console.log('Hay un error trayendo inputs');
        reject(err);
      });
    });
  }
}
