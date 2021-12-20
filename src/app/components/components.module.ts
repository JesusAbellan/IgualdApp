import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { PlantillaComponent } from './plantilla/plantilla.component';



@NgModule({
  declarations: [
    CabeceraComponent,
     PlantillaComponent
    ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    CabeceraComponent,
    PlantillaComponent
  ]
})
export class ComponentsModule { }
