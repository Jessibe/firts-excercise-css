var testArray = [];
for (var i = 0; i<=10; i +=1){
  testArray.push(i);
}
console.log(testArray);
//eliminar el elemento del arreglo
testArray.shift();
console.log (testArray);
//Eliminar el ultimo elem ento del arreglo
testArray.pop();
console.log(testArray);
//revertir los elementos del arreglo
testArray.reverse();
console.log (testArray);
//-----------------------------------******
var testString = "abcde";
testArray.charAt(2);
/*Para obtener un caracter a partir de su codigo
ascii utilizoel metodo String.fromCharCode*/
var codigo = charCodeAt(2)
console.log (codigo);
String.fromCharCode(codigo);

/*//El codigo inicia por medio de un prompt, donde
//el usuario debe ingresar los digitos de su tarjeta.
var numbersCard = prompt ("Ingrese aquí los 16 digitos de su tarjeta");
//El número ingresado se convierte a un array por medio de split
/*var numbersToArray = numbersCard.split ();
//Los numeros invierten su orden por medio del metodo reverse.
numbersCard.reverse ();
/*function (isValidCard);
{
  for (var i = 0; i < array.length; i++) {
    array[i]
  }
}
