import { Component, Input } from '@angular/core';
import { AlertController, App, MenuController } from 'ionic-angular';

import { AuthService } from './../../providers/auth.service';
import { BaseComponent } from "../base.component";
import { User } from './../../models/user.model';
import { UserProfilePage } from './../../pages/user-profile/user-profile';
import { ListPage } from '../../pages/list/list';
import { ChatPage } from '../../pages/chat/chat';
import { SobrePage } from '../../pages/sobre/sobre';
import { TratamentoPage } from '../../pages/tratamento/tratamento';

@Component({
  selector: 'user-menu',
  templateUrl: 'user-menu.component.html'
})
export class UserMenuComponent extends BaseComponent {

  @Input('user') currentUser: User;

  constructor(
    public alertCtrl: AlertController,
    public authService: AuthService,
    public app: App,
    public menuCtrl: MenuController
  ) {
    super(alertCtrl, authService, app, menuCtrl);
  }

  Perfil(): void {
    this.navCtrl.push(UserProfilePage);
  }

  List() {
    this.navCtrl.push(ListPage);
  }

  Sobre() {
    this.navCtrl.push(SobrePage);
  }

  Tratamento() {
    this.navCtrl.push(TratamentoPage);
  }

}
