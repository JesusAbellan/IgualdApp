import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../interfaces/card';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private _http:HttpClient) { }

  getCards() {
    return new Promise<Card[]>((resolve, reject) => {
      const url = '../../assets/cards.json';
      let cards: Card[] = [];
      this._http.get<Card[]>(url).subscribe(cards=>{
        resolve(cards);
      }, err=>{
        console.log('Hay un error trayendo cards');
        reject(err);
      });
    });
  }

  getSpecifiCard(index:number){
    return new Promise<Card[]>((resolve, reject) => {
      const url = '../../assets/cards.json';
      let cards: Card[] = [];
      this._http.get<Card[]>(url).subscribe(cards=>{
        resolve(cards);
      }, err=>{
        console.log('Hay un error trayendo cards');
        reject(err);
      });
    }).then(card => card[index]);
  }
}
