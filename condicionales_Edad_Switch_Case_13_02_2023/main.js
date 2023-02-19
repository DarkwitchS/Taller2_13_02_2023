let edad = Number(prompt(`Ingrese su edad`));

switch(true){
   case (edad >= 18):
      alert(`Es mayor de edad`);
   break;

   default:
      alert(`La edad ingresada no cumple con los parámetros`);
   break;

}