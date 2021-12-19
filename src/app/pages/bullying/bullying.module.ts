import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BullyingPageRoutingModule } from './bullying-routing.module';

import { BullyingPage } from './bullying.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BullyingPageRoutingModule
  ],
  declarations: [BullyingPage]
})
export class BullyingPageModule {}
