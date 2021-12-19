import { Component, OnInit } from '@angular/core';
import { Centro } from 'src/app/interfaces/centro';
import { CentrosService } from 'src/app/services/centros.service';
import { InputService } from 'src/app/services/input.service';
import { Input } from '../../interfaces/input';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  inputs:Input[] = [];
  centros:Centro[] = [];
  constructor(private _inputService: InputService,
              private _centrosService: CentrosService) { }

  async ngOnInit() {
    try {
      this.inputs = (await this._inputService.getInputs("registro"));
      this.centros = (await this._centrosService.getCentros());
    } catch (error) {
      console.log(error);
    }
  }

}
