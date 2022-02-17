import { Usuario } from './../../interfaces/usuario';
import { Component, OnInit } from '@angular/core';
import { Centro } from 'src/app/interfaces/centro';
import { CentrosService } from 'src/app/services/centros.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

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
    pwd:''
  };
  public pwd2 = '';
  public cadenaError = '';
  centros:Centro[] = [];
  constructor(private _centrosService: CentrosService,
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
    console.log(respuesta);
    if(respuesta.status=='ok'){
      this._router.navigate(['login'])
    }
   }

  esValido():boolean{
 
    if (this.usuario.nombre.length<2) {
      this.cadenaError = 'El nombre debe tener al menos 2 caracteres';
      return false;
    }
    
    if (this.usuario.apellidos=='') {
      this.cadenaError = 'El apellido no puede estar vacío';
      return false;
    }

    if (this.usuario.email=='') {
      this.cadenaError = 'Email es un campo obligatorio';
      return false;
    }
    
    if (this.usuario.pwd.length<6) {
    this.cadenaError = 'La contraseña debe tener al menos 6 caracteres';
    return false;
    } 
    
    if (this.usuario.pwd != this.pwd2) {
      this.cadenaError = 'Las contraseñas no coinciden. Inténtalo otra vez';
      return false;          
    } 

    return true;
  }

}
