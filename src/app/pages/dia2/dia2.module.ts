import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dia2PageRoutingModule } from './dia2-routing.module';

import { Dia2Page } from './dia2.page';

import { LastfmService } from 'src/app/lastfm.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dia2PageRoutingModule
  ],
  declarations: [Dia2Page],
  providers: [LastfmService]
})
export class Dia2PageModule {}
