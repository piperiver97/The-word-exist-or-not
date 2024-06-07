import { nombre1 } from "./js/ex1.js";
import { sum } from "./js/ex2.js";
import { printTerminal } from "./js/printData.js";
import { wordExist } from "./js/ex3.js";

let number1 = 3;
let number2 = 5;

function app() {
  printTerminal(nombre1);
  printTerminal(sum(number1, number2));
  printTerminal(wordExist());
}
app();