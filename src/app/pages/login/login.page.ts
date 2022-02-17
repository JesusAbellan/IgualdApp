import { UsuarioService } from 'src/app/services/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private _usuarioService: UsuarioService) { }
  public usuario = {
    email:'',
    pwd:''
  }
 ngOnInit() {
    }
  async login() {
    const respuesta = await this._usuarioService.login(this.usuario);
    if(respuesta.status=='ok'){
      console.log('usuario logado')
    } else{
      console.log(respuesta.mensaje);
    }
  }

  esValido():boolean {
    return true;
  }
}
