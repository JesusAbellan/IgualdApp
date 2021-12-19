import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private _http:HttpClient) { }

  getItems() {
    return new Promise<Item[]>((resolve, reject) => {
      const url = '../../assets/items.json';
      this._http.get<Item[]>(url).subscribe(item=>{
        resolve(item);
      }, err=>{
        console.log('Hay un error trayendo items');
        reject(err);
      });
    });
  }
}