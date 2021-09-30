"use strict";

/**Definicion de variables */
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let resultado = document.getElementById("resultado");
let resultado2 = document.getElementById("resultado2")
let btn = document.getElementById("btn");
let sol1 = 0;
let sol2 = 0;


btn.onclick = function () {

  /**Cast de variables que contiene los inputs */
  let a = parseFloat(num1.value);
  let b = parseFloat(num2.value);
  let c = parseFloat(num3.value);

  //Calculo de la discriminante
  let resultadoDiscriminante = (Math.pow(b, 2) - 4 * a * c);
  //Imprimir discriminante en un contenedor
  resultado.innerHTML = `<p id='discriminante'> El discriminante da: ${resultadoDiscriminante} </p> `;
  /**Comprobamos si la ecuacion es completa sino sera incompleta y pasara para
   * las soluciones de las incompletas
   */
  if (a != 0 && b != 0 && c != 0) {
    resultado.innerHTML += `La ecuacion es completa`;
    discriminante(a,b,c,resultadoDiscriminante)
  }else if(b == 0 || c == 0){
    resultado.innerHTML += `La ecuacion es incompleta`;
    esgIncompleta(a, b, c);
  }

};


//Funcion que permite determinar cuantas soluciones tiene la ecuacion dada su discriminante
function discriminante(a,b,c,discriminante) {

  if (discriminante == 0) {
    return UnicaSolucionReal(a, b);
  }

  if (discriminante > 0) {
    return esgCompleta(a, b, discriminante);
  }else{
    return resultado2.innerHTML = `La ecuación no posee soluciones reales`;
  }
}

//Funcion que determina si tiene una solucion real
function UnicaSolucionReal(a, b) {
  sol1 = -b / 2 * a;
  return resultado2.innerHTML = `Tiene una única real solución que es ${sol1} `;
}

//Funcion que determina las dos posibles soluciones que tiene
function esgCompleta(a, b, discriminante) {

  sol1 = (-b + Math.sqrt(discriminante) / (2 * a));
  sol2 = (-b - Math.sqrt(discriminante) / (2 * a));

  return resultado2.innerHTML += `La primera solucion es : ${sol1} <br>
                                 La segunda solucion es: ${sol2}`;
}


//Si la ecuacion es incompleta pasata por esta funcion que dice las posibles solucione dados sus parametros
function esgIncompleta(a, b, c) {

  if (b == 0 && c != 0) {
    sol1 = +(-Math.sqrt(c / a));
    sol2 = -(-Math.sqrt(c / a));

    let res1 = sol1.toFixed(5);
    let res2 = sol2.toFixed(5);

    return resultado2.innerHTML = `La primera solucion es : ${res1}<br>
                                  La segunda solucion es : ${res2}`;
  }

  if (b != 0 && c == 0) {
    sol1 = 0;
    sol2 = -(b / a);
    return resultado2.innerHTML = `La primera solucion es : ${sol1}<br>
    La segunda solucion es : ${sol2}`;
  }

  if (b == 0 && c == 0) {
    return resultado2.innerHTML = "Tiene una unica solucion que es 0."
  }
}