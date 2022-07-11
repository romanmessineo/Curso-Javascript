//ver onde descarga cada proveedor
function zonaDescarga(){
var operacion = prompt(`Que proveedor trae? 
        FAMMA 
        COZZUOL
        TENNECO
        EZEIZA`);

var numero1 = Number(prompt("Ingrese el número de viaje"));
/* const numero2 = Number(prompt("Ingrese otro número")); */

if (isNaN(numero1)) {
    alert("NUMEROS NO VALIDOS")
}
else {
    switch (operacion) {
        case 'FAMMA':
            {
                const resultado = ("Boddy");
                alert(`Usted descarga en ${resultado}`)
                break;
            }
        case 'COZZUOL':
            {
                const resultado = ("No Produtivo");
                alert(`Usted descarga en ${resultado}`)
                break;
            }
        case 'TENNECO':
            {
                const resultado = ("Mecanica");
                alert(`Usted descarga en ${resultado}`)
                break;
            }
        case 'EZEIZA':
            {
                const resultado = ("WhereHouse");
                alert(`Usted descarga en ${resultado}`)
                break;
            }
        default:
            {
                alert("Comuniquese con un operador de trafico")
                break;
            }

    } }

//------------------------------------------------------------------------------------------------------------------------


    /* if(operacion === 'SUMA')
     {
         const resultado = numero1+numero2;
         alert(`El resultado es ${resultado}`)
     }
     else if(operacion === 'MUL')
     {
         const resultado = numero1*numero2;
         alert(`El resultado es ${resultado}`)
     }
     else if(operacion === 'DIV')
     {
         if(numero2 === 0){
             alert("División Inválida")
         }
         else 
         {
             const resultado = numero1/numero2;
             alert(`El resultado es ${resultado}`)
         }
         
     }
     else if(operacion === 'RESTA')
     {
         const resultado = numero1-numero2;
         alert(`El resultado es ${resultado}`)
     }
     else 
     {
         alert(`La operación es inválida`)
     } */
}









function logIn(){
let preguntaUsuario = prompt("Usted tiene usuario? si - no");
console.log ("Usuario: usuario1", "Contraseña: password1")



  if (preguntaUsuario === "si") {
    pedirDatos();
    let esValido = validarDatos(nombreUsuario, contra);
    validarLogin(esValido);
  }
  else {
    alert("Igualmente puede accededer");
  }


  function pedirDatos() {
    nombreUsuario = prompt("Inrgese nombre usuario");
    contra = prompt("Ingrese Contraseña");
  }

  function validarDatos(username, pwd) {
    let esValido = false;
    if (username === "usuario1" && pwd === "password1") {
      esValido = true;
    }
    return esValido;
  }

  function validarLogin(isValid) {
    if (!isValid) {
      alert("ERROR");
      init();
    } else {
      alert("LOGIN EXITOSO - esta funcion estara disponible proximamente")
    }
  } 
   }

  /* pedirProveedor();
  
  mostrarZona();



  function pedirProveedor() {prompt (`DE QUE PROVEEDOR ES LA MERCADERIA:
              COZZUOL
              FAMMA
              TENNEO
              LEQUIPE`);}

  function zona() {if (pedirProveedor ===("FAMMA")) alert("desarga en body")};            
  
  
function mostrarZona(){let preguntaZona = prompt (`Sabe donde descarga: "SI" - "NO"`);
    if (preguntaZona==="SI") {alert ("Gracias por su visita")
    } ;
   */



/* if (pedirProveedor === false) {
  alert ("Proveedor no encontrado")}
else{
  if {preguntaZona
    
  }
}
 */





  


  
      
              






  /* let validarLogin = true;
  while (validarLogin) {
    preguntaUsuario ;
  } */
  
  /* function Ingreso(continuar){
    if (validarLogin == "LOGIN ESXITOSO" || preguntaUsuario == "Igualmente puede accededer" ){
      alert ("En que podemos ayuarlo?")
    }


  
    



















/* if (validarLogin || validarDatos

 ) */




/* let numero1 = Number(prompt("Ingrese un numero")) // parseInt(prompt("Ingrese un numero"))
  let numero2 = Number(prompt("Ingrese otro numero"))
  let suma = numero1+numero2
  let mul = numero1*numero2
  alert(`Multiplicación ${mul}`)
  console.log(`Suma, ${suma}`) */
/* 
  let Nombre1 = "Te amo mucho!!"
  let Pregunta = prompt("Hola mi vida. Como estas?")
  alert(Nombre1, Pregunta)
   */

/*   let ingresarNumero = parseInt(prompt("Ingresar Numero"));

  for (let i = 1; i <= 10; i++) {
      let resultado = ingresarNumero * i ;
      alert(ingresarNumero +" X "+ i +" = "+ resultado);
  } */

/* for (let i = 1; i <= 20; i++) {
    // En cada repeticion solicitamos un nombre.
    let ingresarNombre = prompt("Ingresar nombre") ;
    // Informamos el turno asignado usando el numero de repeticion (i).
    alert(" Turno Nº "+i+" Nombre: "+ingresarNombre);
}
 */
//    WHILE bucle infinito

/*  let repetir = true;
while (repetir) {
  console.log ("Al infinito y... mas allà");
}  */

/* let repetir = false;
do{
  console.log("Solo una vez");
}while(repetir)  */

/* let numero1 = Number(prompt("Ingrese un numero")) // parseInt(prompt("Ingrese un numero"))
  let numero2 = Number(prompt("Ingrese otro numero"))
  let suma = numero1+numero2
  let mul = numero1*numero2
  alert(`Multiplicación ${mul}`)
  console.log(`Suma, ${suma}`)
 */
/*
        Escriba un programa que pida al usuario:
        Una operacion: SUMA / MUL 
        2 números
        e imprima en consola, el resultado de la operación.
        
        Complete el ejercicio, con DIVISION y RESTA. 

        SI TRATA DE DIVIDIR POR 0; MUESTRE UN ERROR

    */

/*         const operacion = prompt(`INGRESE UNA OPERACION: 
        SUMA 
        MUL
        DIV
        RESTA`);

    const numero1 = Number(prompt("Ingrese un número"));
    const numero2 = Number(prompt("Ingrese otro número"));

    if(isNaN(numero1) || isNaN(numero2))
    {
        alert("NUMEROS NO VALIDOS")
    }
    else
    {
        if (operacion ==="SUMA")
        const resultado = numero1+numero2;
        alert("El resultado es "{resultado})
    }


    switch (operaion)
    {
      ase "SUMA":

    } */

/* 
let numero1 = Number(prompt("Ingrese un numero")) 
    for (let i = 0; i<=numero1; i++) 
    {
      console.log(i)
    } */

//FUNCIONES

/* function saluar() {
  console.log("Hola como estas?");
}

saluar();

function solicitarNombre(){
  let nombreIngresado = prompt ("Ingresar nombre")
  alert("El nombre ingresado es " + nombreIngresado)
}
solicitarNombre();
solicitarNombre(); */

/* let resultado = 0; */

/* function sumar(primerNumero, segundoNumero) {
  resultado = primerNumero + segundoNumero;
}

function mostrar(mensaje) {
  console.log(mensaje);
} */

//llamamos primero a sumar y luego a mostrar
/* sumar(7, 3);
mostrar(resultado);
 */
/* function calculadora(primerNumero ,segundoNumero, operacion) {
  switch (operacion) {
    case "+":
      return primerNumero + segundoNumero;
      break;
    case "-":
        return primerNumero - segundoNumero;
      break;
      case "*":
        return primerNumero - segundoNumero;
      break;
      case "/":
        return primerNumero - segundoNumero;
      break; 
      default:
        return 0;
        break;     
  } 
  
} 

console.log (calculadora(10 , 5, "*")); */

/* let pedirUsuario = prompt("Igresar Usuario")
let pedirContraseña = prompt("Igrese password")

if(
  pedirUsuario === "usuario1" && pedirContraseña === "password1")
  {alert ("igreso exitoso")}
  else(
    alert ("usuario o contraseña invalida")
  ) */
