import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SelecionePage } from '../pages/selecione/selecione';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { LoginPage } from '../pages/login/login';
import { ChatPage } from '../pages/chat/chat';
import { ListPage } from './../pages/list/list';
import { SobrePage } from '../pages/sobre/sobre';
import { UserProfilePage } from './../pages/user-profile/user-profile';
import { TratamentoPage } from '../pages/tratamento/tratamento';
import { ExerciciosPage } from '../pages/exercicios/exercicios';
import { DicasPage } from   '../pages/dicas/dicas';
import { ContatoPage } from '../pages/contato/contato'
import { CapitalizePipe } from './../pipes/capitalize.pipe';

import { AuthService } from './../providers/auth.service';
import { UserService } from './../providers/user.service';
import { ChatService } from './../providers/chat.service';
import { MessageService } from './../providers/message.service';


import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { ProgressBarComponent } from './../components/progress-bar/progress-bar.component';
import { CustomLoggedHeaderComponent } from './../components/custom-logged-header/custom-logged-header.component';
import { MessageBoxComponent } from './../components/message-box/message-box.component';
import { UserInfoComponent } from './../components/user-info/user-info.component';
import { UserMenuComponent } from './../components/user-menu/user-menu.component';


const firebaseAppConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyC4DC1iayAoawdRqOTfK1JkHchYNPcxag4",
    authDomain: "chat-1b9c1.firebaseapp.com",
    databaseURL: "https://chat-1b9c1.firebaseio.com",
    projectId: "chat-1b9c1",
    storageBucket: "chat-1b9c1.appspot.com",
    messagingSenderId: "976944908324"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SelecionePage,
    CadastroPage,
    LoginPage,
    ChatPage,
    ListPage,
    SobrePage,
    TratamentoPage,
    ExerciciosPage,
    DicasPage,
    ContatoPage,
    CapitalizePipe,
    CustomLoggedHeaderComponent,
    MessageBoxComponent,
    ProgressBarComponent,
    UserInfoComponent,
    UserMenuComponent,
    UserProfilePage

  ],
  imports: [
    AngularFireModule.initializeApp(firebaseAppConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SelecionePage,
    CadastroPage,
    LoginPage,
    ChatPage,
    SobrePage,
    TratamentoPage,
    DicasPage,
    UserProfilePage,
    ExerciciosPage,
    ContatoPage
  ],
  providers: [
    AuthService,
    StatusBar,
    SplashScreen,
    UserService,
    ChatService,
    MessageService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
