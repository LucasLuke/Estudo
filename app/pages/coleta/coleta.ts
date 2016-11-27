import {Page,ViewController, NavParams, NavController} from 'ionic-angular';
import {DaoColeta} from '../../dao/dao-coleta';

@Page({
  templateUrl: 'build/pages/coleta/coleta.html'
})


export class ColetaPage {
  nome:string; 
  peso:string; 
  PA:string;
  hgt:string;
  controle:string;
  view:any = ViewController;
  navDao:any = NavController;
  coleta:any = NavParams;
  List = [];
 
  constructor(view: ViewController, nav:NavParams, navDao:NavController) {
  	let coleta = nav.get("parametros");	
    this.nome = 'Lucas';
    this.List = this.getlistColeta();

  }

  getNome(){
  	return 'Retornando o nome ' + this.nome;
  }


  Salvar(){
  	 this.coleta.peso = this.peso;
  	 this.coleta.PA = this.PA;
  	 this.coleta.hgt = this.hgt;
  	 this.coleta.controle = this.controle;
  	 let dao = new DaoColeta();
  	 //alert(this.PA);

  	 dao.insert(this.peso, this.PA, this.hgt, this.controle);
  	 
  }

  getlistColeta(){
  	let dao = new DaoColeta();
    let DadosList = [];
    //var navegadores = new Array( {'Safari', 'IE', 'Firefox', 'Chrome', 'Opera'} );
   // var i = this.DadosList.values();
  	DadosList = dao.getListarDados();
     //console.log(navegadores);
    //var obj = new Object();
   // for(var i =0;this.DadosList.length; i++){
       //console.log(Object.keys(this.DadosList).[1]);
     return DadosList;
     // console.log(this.DadosList);

    
  }
}