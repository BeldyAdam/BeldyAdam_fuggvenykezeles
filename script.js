import { SZAMLISTA } from "./adat.js";
import { SZOVEGLISTA } from "./adat.js";
import { OBJEKTUMLISTA } from "./adat.js";
import { KOR } from "./adat.js";

$(function () {
  /*    let kevertIndexLista = keveres1(SZAMLISTA);
    console.log(kevertIndexLista)
    /*keveres1(SZAMLISTA)*/
  /*     for (let index = 0; index < SZAMLISTA.length; index++) {
        console.log(SZAMLISTA[kevertIndexLista[index]])
    }  */
/*   console.log(SZOVEGLISTA);
  keveres2(SZOVEGLISTA);
  console.log(SZOVEGLISTA);
  keveres3(SZOVEGLISTA); */

  console.log(OBJEKTUMLISTA);
  console.log("Név szerint");
  console.log(nevRendezes(OBJEKTUMLISTA));
  console.log("Kor szerint");
  console.log(korRendezes(KOR));
});


function nevRendezes(lista){
  let rendezettNevek = lista.sort();
  return rendezettNevek;
}

function korRendezes(lista){
  let kor = lista.sort((a, b) => a.kor - b.kor);
  return kor;
}

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
