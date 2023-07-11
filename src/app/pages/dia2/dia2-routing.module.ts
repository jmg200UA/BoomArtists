import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dia2Page } from './dia2.page';

const routes: Routes = [
  {
    path: '',
    component: Dia2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dia2PageRoutingModule {}
