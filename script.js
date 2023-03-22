import { SZAMLISTA } from "./adat.js";
import { SZOVEGLISTA } from "./adat.js";


/* console.log(SZAMLISTA); */
/* console.log(SZOVEGLISTA); */
$(function () {
  /*    let kevertIndexLista = keveres1(SZAMLISTA);
    console.log(kevertIndexLista)
    /*keveres1(SZAMLISTA)*/
  /*     for (let index = 0; index < SZAMLISTA.length; index++) {
        console.log(SZAMLISTA[kevertIndexLista[index]])
    }  */
  console.log(SZOVEGLISTA);
  keveres2(SZOVEGLISTA);
  console.log(SZOVEGLISTA);
  keveres3(SZOVEGLISTA);
});

function keveres1(lista) {
  let megkevertIndex = [];
  let szamok;
  while (megkevertIndex.length < lista.length) {
    szamok = Math.floor(Math.random() * lista.length);
    let index = 0;
    while (
      index < megkevertIndex.length &&
      !(szamok == megkevertIndex[index])
    ) {
      index++;
    }
    if (index >= megkevertIndex.length) {
      megkevertIndex.push(szamok);
    }
  }
  console.log(megkevertIndex);
  return megkevertIndex;
}

function keveres2(lista) {
  lista.sort();
}

function keveres3(lista) {
  lista.sort(function (a, b) {
    return b - a;
  });
}
