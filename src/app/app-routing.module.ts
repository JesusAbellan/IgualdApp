import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'home/login',
    redirectTo: 'login'
  },
  {
    path: 'info',
    loadChildren: () => import('./pages/info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'identidad-genero',
    loadChildren: () => import('./pages/identidad-genero/identidad-genero.module').then( m => m.IdentidadGeneroPageModule)
  },
  {
    path: 'violencia-genero',
    loadChildren: () => import('./pages/violencia-genero/violencia-genero.module').then( m => m.ViolenciaGeneroPageModule)
  },
  {
    path: 'bullying',
    loadChildren: () => import('./pages/bullying/bullying.module').then( m => m.BullyingPageModule)
  },
  {
    path: 'cyberbullying',
    loadChildren: () => import('./pages/cyberbullying/cyberbullying.module').then( m => m.CyberbullyingPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
