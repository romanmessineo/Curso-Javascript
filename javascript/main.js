const proveedores = [
  {
    id: 1,
    nombre: "Famma",
    direccion: "Av Circunvalacion KM 4,5",
    locacion: "Body",
    img: "https://img.youtube.com/vi/vmTUZCzg4bk/0.jpg",
  },
  {
    id: 3,
    nombre: "Tenneco",
    direccion: "Calle 98 N° 1241",
    locacion: "Mecànica",
    img: "https://img.youtube.com/vi/vmTUZCzg4bk/0.jpg",
  },
  {
    id: 4,
    nombre: "Treves",
    direccion: "Camino de la tradicion 140",
    locacion: "Patio Central",
    img: "https://img.youtube.com/vi/vmTUZCzg4bk/0.jpg",
  },
  {
    id: 5,
    nombre: "Siderar",
    direccion: "Cno Gral. Belgrano km 31,5",
    locacion: "Prensas",
    img: "https://img.youtube.com/vi/vmTUZCzg4bk/0.jpg",
  },
  {
    id: 6,
    nombre: "Lequipe",
    direccion: "El Salvador 346",
    locacion: "Patio Central",
    img: "https://img.youtube.com/vi/vmTUZCzg4bk/0.jpg",
  },
  {
    id: 7,
    nombre: "Cozzuol Pco",
    direccion: "Av. Constituyentes 5099",
    locacion: "Patio Central",
    img: "https://img.youtube.com/vi/vmTUZCzg4bk/0.jpg",
  },
];

const menuProveedores = new MenuProveedores(proveedores);
console.log("Lista de Proveedores originales", menuProveedores.proveedores);

document.addEventListener("DOMContentLoaded", function (event) {
  let newsProvArray = JSON.parse(localStorage.getItem("nuevoProv"));
  newsProvArray.forEach(function (arrayProv) {
    proveedores.push(arrayProv);
  });

  console.log("Prov cargados antes", newsProvArray);
});

//mostrarMenu()

/* function mostrarMenu() { */
/*   let opcion = "";
  while (opcion !== "6") {
    opcion = prompt(`Ingrese una opción:
                      1. Ingrese nuevo Proveedor
                      2. Listar Proveedores
                      3. Buscar Proveedor
                      4. Actualizar Proveedor
                      5. Ordenar Proveedores
                      6. Terminar`);
    switch (opcion) {
      case "1":
        agregarProveedor();
        break;
      case "2":
        listarProveedores();
        break;
      case "3":
        buscarProveedor();
        break;
      case "4":
        actualizarProveedor();
        break;
      case "5":
        ordenarProveedores();
        break;
      case "6":
        alert("Gracias");
        break;
      default:
        alert("Opción Inválida");
        break;
    }
  }
} */

function agregarProveedor() {
  let nombre = prompt("Ingrese nombre o razon social");
  let direccion = prompt("Ingrese direccion");
  let locacion = prompt("Ingrese locacion GM");
  let img = prompt("adjunte imagen");

  let proveedor = new Proveedor(
    menuProveedores.darCantidad() + 1,
    nombre,
    direccion,
    locacion,
    img
  );

  menuProveedores.agregarProveedor(proveedor);
  menuProveedores.guardarNuevoProveedor(proveedor);
  menuProveedores.listarNuevoProv(proveedor);
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
  let nombre = prompt("Ingrese un nombre");
  let direccion = prompt("Ingrese direccion");
  let locacion = prompt("Ingrese locacion GM");
  let img = prompt("adjunte imagen");

  menuProveedores.modificarProveedor(
    nombreABuscar,
    nombre,
    direccion,
    locacion,
    img
  );
}

function ordenarProveedores() {
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
  let nombreABuscar = prompt("Ingrese el nombre del Proveedor");
  menuProveedores.zona(nombreABuscar);
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
