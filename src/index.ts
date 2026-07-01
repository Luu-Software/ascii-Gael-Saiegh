import { preguntar } from './lib/consola.ts';  


function repetirLetra(letra: string, cantidad: number): string {
 
  let resultado : string = "" ; 

  let repeticiones: number = 0 ; 

  while (repeticiones < cantidad) {  
    resultado= resultado  + letra; 
 repeticiones= repeticiones + 1 
       } 
 
       return resultado ;  
     }
 
let caracter: string = preguntar('¿Con que caracter vas a dibujar el cuadrado? ');
let tamaño: number = Number(preguntar('¿De qué tamaño? '));
let tamaño2: number= tamaño
while (tamaño >0) { 
  console.log (repetirLetra(caracter, tamaño2, ))
tamaño= tamaño - 1
}
