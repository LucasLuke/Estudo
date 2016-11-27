import {Component, ViewChild} from '@angular/core';
import {Platform, ionicBootstrap, NavController, Menu} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {ColetaPage} from './pages/coleta/coleta';

@Component({
  templateUrl: './build/app.html'
   //config: { mode: "md" } // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  rootPage: any = HomePage;
  home: any = HomePage;
  coleta : any = ColetaPage;
  
  @ViewChild(Menu) menu: Menu;
  @ViewChild('content') content: NavController;
fnf
  constructor(private platform: Platform) {
    //this.rootPage =HomePage;
  // this.coleta = ColetaPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
  
  openPage(opcao){
  	this.rootPage = opcao;
  };
}

ionicBootstrap(MyApp);
 