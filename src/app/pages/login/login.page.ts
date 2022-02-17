import { UsuarioService } from 'src/app/services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private _usuarioService: UsuarioService, private _router:Router) { }
  public cadenaError:String;
  public usuario = {
    email:'',
    pwd:''
  }
 ngOnInit() {
    }
  async login() {
    const respuesta = await this._usuarioService.login(this.usuario);
    if(respuesta.status=='ok'){
      console.log('usuario logado');
      this._router.navigate(['logado']);
      
    } else{
      console.log(respuesta.mensaje);
      alert('Error en el login');
    }
  }

  esValido():boolean {
    if (this.usuario.email=='') {
      this.cadenaError = 'Email es un campo obligatorio';
      return false;
    }
    
    if (this.usuario.pwd.length<6) {
    this.cadenaError = 'La contraseña es un campo obligatorio';
    return false;
    } 

    return true;
  }
}
