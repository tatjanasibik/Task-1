/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

function weightConverter() {
    let weight = document.getElementById("search").value;
    document.getElementById("Gramai").innerHTML = weight / 0.0010000;
    document.getElementById("Svarai").innerHTML = weight * 2.2046;
    document.getElementById("Uncijos").innerHTML = weight * 35.274;
  }
