import {Component} from '@angular/core';
import {App, MenuController} from 'ionic-angular';
import {ColetaPage} from '../../pages/coleta/coleta';

@Component({
  templateUrl: 'build/pages/home/home.html'
})

export class HomePage {
  nome :string = "Lucas";
  private rootPage:any = HomePage;
  private coleta:any = ColetaPage;


 
  constructor(app: App, menu: MenuController) {
  	menu.enable(true);
  //	this.nome = 'Lucas';
  }

  getNome(){
  	return 'Retornando o nome ' + this.nome;
  }

  openPage(opcao){
    //alert(opcao);
    this.rootPage = opcao;
    
  }

}
//ionicBootstrap(MyApp);
/*
@Component({
  templateUrl: './pages/coleta/coleta.html'
})*/
