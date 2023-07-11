import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dia1PageRoutingModule } from './dia1-routing.module';

import { Dia1Page } from './dia1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dia1PageRoutingModule
  ],
  declarations: [Dia1Page]
})
export class Dia1PageModule {}
