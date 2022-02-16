import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private _usuarioService:UsuarioService) { }
  public usuario = {
    email:'',
    pwd:''
  }
  async ngOnInit() {  
  }
  async login(){
    const respuesta = await this._usuarioService.login(this.usuario);
    if(respuesta.status == 'ok'){
      console.log('usuario logado');
    } else {
      console.log(respuesta.message);
    }
  }
  esValido():boolean {
    return true;
  }
}
