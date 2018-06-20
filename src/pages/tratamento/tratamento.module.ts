import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TratamentoPage } from './tratamento';

@NgModule({
  declarations: [
    TratamentoPage,
  ],
  imports: [
    IonicPageModule.forChild(TratamentoPage),
  ],
})
export class TratamentoPageModule {}
