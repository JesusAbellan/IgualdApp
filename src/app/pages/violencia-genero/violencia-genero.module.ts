import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViolenciaGeneroPageRoutingModule } from './violencia-genero-routing.module';

import { ViolenciaGeneroPage } from './violencia-genero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViolenciaGeneroPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ViolenciaGeneroPage]
})
export class ViolenciaGeneroPageModule {}
