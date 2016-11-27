import {Storage, SqlStorage,NavParams} from 'ionic-angular';


export class DaoColeta {

	constructor(){
		
		let storage = new Storage(SqlStorage);
		//this.coletaDados =  database;
		//this.schema = schema;
		let lista = [];
		console.log("Tabela criada");
		//this.teste();
		storage
		.query("CREATE TABLE IF NOT EXISTS coleta (id INTEGER PRIMARY KEY AUTOINCREMENT, peso TEXT, pa TEXT, hgt TEXT, controle TEXT)")
		.then(data => {
			//console.log("Tabela criada");
		}, (error) => {
			console.log("Erro na criação da tabela" + JSON.stringify(error.err));
		});

	}

    getListarDados() {
	 
	    let storage = new Storage(SqlStorage);
	    var lista = [];
	   
	    storage
	    	.query("SELECT * FROM coleta")
	    	.then((data) => {
	      		
	      		for (var i = 0; i < data.res.rows.length; i++) {
	       			
	       			let row = data.res.rows.item(i)
	       			//console.log(row);	       			
	       			let item = {
	       			 	    'id': row.id,
	       			 	    'peso': row.peso,
	       			 	    'pa': row.pa,
	       			 	    'hgt': row.hgt,
	       			 	    'controle': row.controle
	        		};
	               
	               lista.push(item);
	               //console.log(item.id);
	            //    console.log('l');
	            }
	            //sucessCalback(lista);
	            //cb(lista)
	
	         }, (error) => {
	      		console.log("Erro na criação da tabela " + JSON.stringify(error.err));
	         });
	    	
	    	return lista;
	}

 // teste(){
 // 	console.log(this.getListarDados());
 // }

   insert(peso, pa, hgt, controle){
   		//let peso:string;

		let storage = new Storage(SqlStorage);
		console.log(peso);

		storage
		.query("INSERT INTO coleta(peso, pa, hgt, controle) " + 
	    "VALUES(?,?,?, ?)", [peso,pa,hgt, controle])
	    .then((data) => {  
			console.log("Gravou");
		}, (error) => {
		    console.log("Erro na criação da tabela " + JSON.stringify(error.err));
		});
//coleta.peso,coleta.pa,coleta.hgt,coleta.controle
	}

	edit(){

	}

	delete(){

	}
}