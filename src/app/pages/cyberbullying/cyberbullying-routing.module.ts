import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CyberbullyingPage } from './cyberbullying.page';

const routes: Routes = [
  {
    path: '',
    component: CyberbullyingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CyberbullyingPageRoutingModule {}
