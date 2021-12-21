import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/interfaces/card';
import { CardsService } from 'src/app/services/cards.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public cards: Card[]=[];

  constructor(private _cardsService: CardsService) {}

  async ngOnInit() {
    try {
      this.cards = (await this._cardsService.getCards());
      } catch (error) {
      console.log(error);
    }
  }

}
