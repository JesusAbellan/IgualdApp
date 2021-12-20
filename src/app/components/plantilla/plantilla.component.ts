import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../interfaces/card';
import { CardsService } from '../../services/cards.service';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.scss'],
})
export class PlantillaComponent implements OnInit {

  @Input("index") index: number;
  card: Card = null;
  constructor(private _cardServie: CardsService) { }

  async ngOnInit() {
    try {
      this.card =  await this._cardServie.getSpecifiCard(this.index);
    } catch (error) {
      console.log("Error al encontrar la card específica");
    }
  }
}
