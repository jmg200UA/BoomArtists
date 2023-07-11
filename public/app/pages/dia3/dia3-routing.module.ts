import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dia3Page } from './dia3.page';

const routes: Routes = [
  {
    path: '',
    component: Dia3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dia3PageRoutingModule {}
