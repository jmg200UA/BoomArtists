import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dia1Page } from './dia1.page';

const routes: Routes = [
  {
    path: '',
    component: Dia1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dia1PageRoutingModule {}
