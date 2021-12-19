import { Component, OnInit } from '@angular/core';
import { Centro } from 'src/app/interfaces/centro';
import { CentrosService } from 'src/app/services/centros.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  centros:Centro[] = [];
  constructor(
              private _centrosService: CentrosService) { }

  async ngOnInit() {
    try {
      this.centros = (await this._centrosService.getCentros());
    } catch (error) {
      console.log(error);
    }
  }

}
