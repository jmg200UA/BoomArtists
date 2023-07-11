import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'dia1',
    loadChildren: () => import('./pages/dia1/dia1.module').then( m => m.Dia1PageModule)
  },
  {
    path: 'dia2',
    loadChildren: () => import('./pages/dia2/dia2.module').then( m => m.Dia2PageModule)
  },
  {
    path: 'dia3',
    loadChildren: () => import('./pages/dia3/dia3.module').then( m => m.Dia3PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
