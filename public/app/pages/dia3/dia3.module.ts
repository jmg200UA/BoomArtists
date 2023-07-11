import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dia3PageRoutingModule } from './dia3-routing.module';

import { Dia3Page } from './dia3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dia3PageRoutingModule
  ],
  declarations: [Dia3Page]
})
export class Dia3PageModule {}
