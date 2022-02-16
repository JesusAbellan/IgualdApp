import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Centro } from 'src/app/interfaces/centro';
import { CentrosService } from 'src/app/services/centros.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../interfaces/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  public usuario = {
    usuario:'',
    email:'',
    centro:'',
    pwd:''
  };

  public pwd2 = '';

  public cadenaError = '';

  centros:Centro[] = [];

  constructor(
              private _centrosService: CentrosService,
              private _usuarioService:UsuarioService,
              private _router:Router) { }

  async ngOnInit() {
    try {
      this.centros = (await this._centrosService.getCentros());
    } catch (error) {
      console.log(error);
    }
  }

  async register() {
    const respuesta = await this._usuarioService.crearUsuario(this.usuario);
    console.log(respuesta)
    if(respuesta.status == 'ok'){
      this._router.navigate(['login']);
    } else {
      this._router.navigate(['home']);
    }
  }

  esValido():boolean {
    if(this.usuario.pwd !== this.pwd2){
      this.cadenaError = 'Las contraseñas tienen que ser iguales';

      return false;
    } else if (this.usuario.usuario === ''){
      this.cadenaError = 'No puedes dejar el Nombre vacío'

      return false;
    } else if (this.usuario.email === '') {
      this.cadenaError = 'No puedes dejar el Email vacío'
      
      return false;
    } else if (this.usuario.pwd === '') {
      this.cadenaError = 'No puedes dejar la Contraseña vacía'

      return false;
    }
    this.cadenaError = '';
    
    return true;
  }

}
