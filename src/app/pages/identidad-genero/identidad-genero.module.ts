import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdentidadGeneroPageRoutingModule } from './identidad-genero-routing.module';

import { IdentidadGeneroPage } from './identidad-genero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdentidadGeneroPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IdentidadGeneroPage]
})
export class IdentidadGeneroPageModule {}
