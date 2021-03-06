import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Item } from 'src/app/interfaces/item';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss'],
})
export class CabeceraComponent implements OnInit {

  @ViewChild('miMenu') miMenu:MenuController;
  items:Item[] = [];

  constructor(private _itemsService: ItemsService, public router:Router) { }
  
  async ngOnInit() {
    try{
      this.items = await this._itemsService.getItems();
    }catch(error){
      console.log(error);
       }
  }
  
  abrirMenu(){
    this.miMenu.open();
  }
}
