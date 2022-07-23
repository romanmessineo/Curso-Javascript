const proveedores = [
  { id: 1, nombre: "Famma", direccion: "Av Circunvalacion KM 4,5", locacion: "Body" },
  { id: 3, nombre: "Tenneco", direccion: "Calle 98 N° 1241", locacion: "Mecànica" },
  { id: 4, nombre: "Treves", direccion: "Camino de la tradicion 140", locacion: "Patio Central" },
  { id: 5, nombre: "Siderar", direccion: "Cno Gral. Belgrano km 31,5", locacion: "Prensas" },
  { id: 6, nombre: "Lequipe", direccion: "El Salvador 346", locacion: "Patio Central" },
  { id: 7, nombre: "Cozzuol Pco", direccion: "Av. Constituyentes 5099", locacion: "Patio Central" },
]


const menuProveedores = new MenuProveedores(proveedores);
console.log("Lista de Proveedores originales", menuProveedores.proveedores)
//mostrarMenu()


function mostrarMenu() {
  let opcion = "";
  while (opcion !== "6") {
      opcion = prompt(`Ingrese una opción:
                      1. Ingrese un Proveedor
                      2. Listar Proveedores
                      3. Buscar Proveedor
                      4. Actualizar Proveedor
                      5. Ordenar Proveedores
                      6. Terminar`)
      switch (opcion) {
          case "1": 
              agregarProveedor()
              break;
          case "2":
              listarProveedores()
              break;
          case "3": 
              buscarProveedor()
              break;
          case "4": 
              actualizarProveedor()
              break;
          case "5": 
              ordenarProveedores()
              break;
          case "6":
              alert("Gracias")
              break;
          default:
              alert("Opción Inválida")
              break;
      }
  }
}

function agregarProveedor() {
  let nombre = prompt("Ingrese nombre o razon social")
  let direccion = prompt("Ingrese direccion")
  let locacion = prompt("Ingrese locacion GM")

  let proveedor = new Proveedor(menuProveedores.darCantidad() + 1, nombre, direccion, locacion);
  menuProveedores.agregarProveedor(proveedor);

  console.log("Menu Proveedores", menuProveedores);
}

function listarProveedores() {
  menuProveedores.listarProveedores();
}


function buscarProveedor() {
  let nombreABuscar = prompt("Ingrese el nombre del Proveedor");
  menuProveedores.buscar(nombreABuscar);

}

function actualizarProveedor() {

  let nombreABuscar = prompt("Ingrese nombre del Proveedor a modificar");
  let nombre = prompt("Ingrese un nombre")
  let direccion = prompt("Ingrese direccion")
  let locacion = prompt("Ingrese locacion GM")

  menuProveedores.modificarProveedor(nombreABuscar, nombre, direccion, locacion);

}

function ordenarProveedores()
{
  menuProveedores.ordenarProveedores();
}

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