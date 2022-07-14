//INICIAR SESION
console.log("Usuario: usuario1", "Contraseña: password1");

function logIn() {
  let preguntaUsuario = prompt("Usted tiene usuario? si - no");

  if (preguntaUsuario === "si") {
    pedirDatos();
    let esValido = validarDatos(nombreUsuario, contra);
    validarLogin(esValido);
  } else {
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
      alert("LOGIN EXITOSO - esta funcion estara disponible proximamente");
    }
  }
}

//FUNCION PARA IGRESAR REMITOS
function igresarRtos() {
  let cantRtos = Number(prompt("Cuantos remitos trajo?"));
  let contador = 0;
  while (contador < cantRtos) {
    let numRto = Number(prompt(`Ingrese el numero del remito ${contador + 1}`));
    console.log(`Numero Rto: ${numRto}`);
    contador++;
  }
}

//VER DONDE DESCARGA CADA PROVEEDOR
function zonaDescarga() {
  let operacion = prompt(`Que proveedor trae? 
        FAMMA 
        COZZUOL
        TENNECO
        EZEIZA`);

  let numero1 = Number(prompt("Ingrese el número de viaje"));
  console.log(operacion + " Viaje numero:" + numero1);

  if (isNaN(numero1)) {
    alert("NUMEROS NO VALIDOS");
  } else {
    switch (operacion) {
      case "FAMMA": {
        const resultado = "Boddy";
        alert(`Usted descarga en ${resultado}`);
        break;
      }
      case "COZZUOL": {
        const resultado = "No Produtivo";
        alert(`Usted descarga en ${resultado}`);
        break;
      }
      case "TENNECO": {
        const resultado = "Mecanica";
        alert(`Usted descarga en ${resultado}`);
        break;
      }
      case "EZEIZA": {
        const resultado = "WhereHouse";
        alert(`Usted descarga en ${resultado}`);
        break;
      }
      default: {
        alert("Comuniquese con un operador de trafico");
        break;
      }
    }
  }
}

//SEGURIDAD
function elementoSeguridadPersonal() {
  let seguridadPersonal =
    prompt(`Usted posee los siguientes elementos de seguridad? "si" - "no"
        Calzado de seg
        Chaleco naranja
        Casco
        Gafas
        Guantes`);

  if (seguridadPersonal === "si") {
    alert("Gracias! Esta autorizado para ingresar");
  } else {
    alert("Comuniquese con personal de trafico");
    console.log("No cumple con normas de seguridad");
  }
}

