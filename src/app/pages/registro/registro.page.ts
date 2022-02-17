import { Usuario } from './../../interfaces/usuario';
import { Component, OnInit } from '@angular/core';
import { Centro } from 'src/app/interfaces/centro';
import { CentrosService } from 'src/app/services/centros.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  public usuario = {
    nombre:'',
    apellidos:'',
    email:'',
    role:[],
    pwd:''
  };
  public pwd2 = '';
  public cadenaError = '';
  centros:Centro[] = [];
  constructor(
              private _centrosService: CentrosService) { }
ss
  async ngOnInit() {
    try {
      this.centros = (await this._centrosService.getCentros());
    } catch (error) {
      console.log(error);
    }
  }

  register() {

  }

  esValido():boolean{
    if (this.usuario.nombre.length<2) {
      this.cadenaError = 'El nombre debe tener al menos 2 caracteres';
    } else {
      if (this.usuario.pwd.length<6) {
        this.cadenaError = 'La contraseña debe tener al menos 6 caracteres';
      } else {
        if (this.usuario.pwd != this.pwd2) {
          this.cadenaError = 'Las contraseñas no coinciden. Inténtalo otra vez';          
        } else {
          return true;
        }
      }
    }
    return false; //comprobaciones
  }

}
