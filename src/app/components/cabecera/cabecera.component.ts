import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { computeStackId } from '@ionic/angular/directives/navigation/stack-utils';
import { Item } from 'src/app/interfaces/item';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss'],
})
export class CabeceraComponent implements OnInit {

  @ViewChild('miMenu') miMenu:MenuController;
  constructor(private _itemsService: ItemsService, public router:Router) { }
  items:Item[] = [];
  async ngOnInit() {
    try{
      this.items = await this._itemsService.getItems();
      console.log(this.items);
    }catch(error){
      console.log(error);
       }
  }
  abrirMenu(){
    this.miMenu.open();
  }
}
