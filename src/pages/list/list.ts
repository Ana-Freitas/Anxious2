import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TratamentoPage } from '../tratamento/tratamento';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }

  Tratamento() {
    this.navCtrl.push(TratamentoPage);
  }
   
}
