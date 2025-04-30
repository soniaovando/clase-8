alert("Hola Mundo");
let nombre="Sonia Ovando";
console.log(nombre);
let nacimiento=prompt("Ingrese año nacimiento: ");
console.log("Su edad es: "+(2025-nacimiento));
edad=2025-nacimiento;
if (edad>18){
    console.log("Es mayor de edad.")
    console.log("Welcome!");
}else if(edad>10 && edad<18){
    //&&=>será verdadero si todas las validaciones son verdaderas
    //||=>o, será verdadero si por lo menos uno es verdadero 
    console.log("Es menor de edad");
    console.log("Pero tiene mas de 10 años")

}else{
    console.log("Es menor de edad");
}
//ciclos
let tabla=prompt("Ingrese la tabla: ",7);
let cont=1
//while
console.log("******** While ********");
while(cont<=10){
    console.log(tabla+" x "+cont+" = "+tabla*cont);
    cont++;
}

console.log("******** Do-While ********");
cont=1
do{
    console.log(tabla+" x "+cont+" = "+tabla*cont);
    cont++;
}while(cont<=10);
console.log("******** For ********");
for (let i= 1; i<= 10; i++) {
    console.log(tabla+" x "+i+"" = "+tabla*i);
}