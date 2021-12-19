import { Component, OnInit } from '@angular/core';
import { Input } from 'src/app/interfaces/input';
import { InputService } from 'src/app/services/input.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  inputs: Input[] = [];

  constructor(private _inputService: InputService) { }
  async ngOnInit() {
    try {
      this.inputs = (await this._inputService.getInputs("login"));
    } catch (error) {
      console.log(error);
    }
  }

}
