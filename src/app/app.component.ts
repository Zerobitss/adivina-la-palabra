import { Component } from '@angular/core';
import { headersToString } from 'selenium-webdriver/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  frase = 'FELIZ12';
  palabraOculta = '';
  intentos = 0;
  gano = false;
  perdio = false;
  img = 0;
  

  
  letras = [
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
            'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2',
            '3','4', '5', '6', '7', '8', '9',];

  constructor(){
 
    this.palabraOculta = '_ '.repeat(this.frase.length);
    console.log('El AppComponent ha sido creado');

  }

  prueba(valor){

    this.existeLetra(valor);
    const ocultaArr = this.palabraOculta.split(' ');    
    for (let i = 0; i < this.frase.length; i++){

      if (this.frase[i] === valor){

        ocultaArr[i] = valor;
      }
      this.palabraOculta = ocultaArr.join(' ');
      this.verificaGane();
    } 
  }

  existeLetra (valor){

    if (this.frase.indexOf(valor) > 0){
     this.intentos ++;
     this.img ++;

      console.log('letra encontrada: '+ valor);
    }
   else {
     this.intentos ++;
      console.log('no encontro la letra: ' + valor);
      
    }
  }

  verificaGane (){

    const ocultaArr = this.palabraOculta.split(' ');
    const palabraEvaluar = ocultaArr.join('');

    if(palabraEvaluar === this.frase){
      
      this.gano = true;
      console.log('Usuario gano');

    }

    if (this.intentos === 8){

      this.perdio = true;
      console.log('Usuario perdio');
      
    }
  }
  
   reFresh(){
      
    location.reload(true)
  window.setInterval("reFresh()",300000);
}



}
