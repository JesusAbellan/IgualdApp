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
    path: 'info',
    loadChildren: () => import('./pages/info/info.module').then( m => m.InfoPageModule)
  },  {
    path: 'bullying',
    loadChildren: () => import('./pages/bullying/bullying.module').then( m => m.BullyingPageModule)
  },
<<<<<<< HEAD
=======
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
>>>>>>> a88e369262952c5151ff9ce55956a2bb1f70599c


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
