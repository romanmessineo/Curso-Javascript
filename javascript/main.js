const proveedores = [
  {
    id: 1,
    nombre: "Famma",
    direccion: "Av Circunvalacion KM 4,5",
    locacion: "Body",
    img: "https://mag-nic.com.ar/assets/archivos/images/image(7).png",
  },
  {
    id: 3,
    nombre: "Tenneco",
    direccion: "Calle 98 N° 1241",
    locacion: "Mecànica",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR59lQtDZEnMRlcoRRKCWmuKqC4DFNGmvfCAF7D5o--sj1qeWnue9U3OPWFTRKAmi7sb-Y&usqp=CAU",
  },
  {
    id: 4,
    nombre: "Treves",
    direccion: "Camino de la tradicion 140",
    locacion: "Patio Central",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO1tx5jSQjJAjA6TP9CNORs6_JTIP1hEjw_qqGZfnuuxeroPUFcQ8895T5n2Z06OwUVKg&usqp=CAU",
  },
  {
    id: 5,
    nombre: "Siderar",
    direccion: "Cno Gral. Belgrano km 31,5",
    locacion: "Prensas",
    img: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/122017/untitled-1_186.png?XcD.11NMqY9QJjez55Gqi04ofNjsysNC&itok=4TncqI1Z",
  },
  {
    id: 6,
    nombre: "Lequipe",
    direccion: "El Salvador 346",
    locacion: "Patio Central",
    img: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/112010/lequipe.png?itok=Eud4lqNX",
  },
  {
    id: 7,
    nombre: "Cozzuol Pco",
    direccion: "Av. Constituyentes 5099",
    locacion: "Patio Central",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoLn8cDvGZcyZQrbQwfNoybFkid8o3D3OakNnFFR5ULnt2LMDamjcC7h5DPdm_tW-Nz0E&usqp=CAU",
  },
];

const menuProveedores = new MenuProveedores(proveedores);
console.log("Lista de Proveedores originales", menuProveedores.proveedores);

//Trae los proveedores storage y los pushea
document.addEventListener("DOMContentLoaded", function (event) {
  let newsProvArray = JSON.parse(localStorage.getItem("nuevoProv"));
  newsProvArray.forEach(function (arrayProv) {
    proveedores.push(arrayProv);
  });

  console.log("Prov cargados antes", newsProvArray);
});

//este swuitch se esta reemplazando con botones
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
    }*/


function agregarProveedor() {
  screen = document.getElementById("screen");
  screen.innerHTML = ``;
  let agreProvHTML = `            
    <section id="forProv" class="forAgreProv">
            <h2>Complete todos los campos</h2>  
            <label for="nombre">Nombre:</label>
            <input type="text" name="nombre" id="nombre" placeholder="Ingrese nombre o razon social">
            <label for="direccion">Direccion:</label>
            <input type="text" name="ireccion" id="direccion" placeholder="Ingrese direccion">
            <label for="locacion">Locacion:</label>
            <input type="text" name="locacion" id="locacion" placeholder="Ingrese locacion GM">
            <label for="img">Imagen:</label>
            <input type="text" name="img" id="img" placeholder="adjunte imagen">
        
            <button class="btn btn-primary btnAgreNuevProv" type="button" value="Agregar" id="btnAgregarProv"><span> AGREGAR </span></button>
     </section>         
            `;
  screen.innerHTML += agreProvHTML;
  const nombre = document.getElementById("nombre");
  const direccion = document.getElementById("direccion");
  const locacion = document.getElementById("locacion");
  const img = document.getElementById("img");
  const button = document.getElementById("btnAgregarProv");

  button.addEventListener("click", (e) => {
    e.preventDefault();
    let data = {
      nombre: nombre.value,
      direccion: direccion.value,
      locacion: locacion.value,
      img: img.value,
    };
    console.log("Nuevo Proveedor", data);

    let proveedor = new Proveedor(
      menuProveedores.darCantidad() + 1,
      data.nombre,
      data.direccion,
      data.locacion,
      data.img
    );

    menuProveedores.agregarProveedor(proveedor);
    menuProveedores.listarNuevoProv(proveedor);
    swal("Bien hecho!", "El proveedor " + data.nombre + " se agrego exitosamente ", "success");
    menuProveedores.guardarNuevoProveedor(proveedor);
  });
}

function listarProveedores() {
  menuProveedores.listarProveedores();
}

function buscarProveedor() {
  screen = document.getElementById("screen");
  screen.innerHTML = `
        <div>
        <input  type="text" id="formulario">
        <button class="btn btn-info" id="botonBuscar"> <i class="fa-solid fa-magnifying-glass"></i> </button>
    </div>
      `;
  const buscarPov = document.querySelector(`#formulario`);
  const botonBuscar = document.querySelector(`#botonBuscar`);

  const filtrar = () => {
    let nombreBuscado = buscarPov.value.toLowerCase();
    console.log(nombreBuscado);
    menuProveedores.buscar(nombreBuscado);
  };

  botonBuscar.addEventListener(`click`, filtrar);
}

function actualizarProveedor() {
  /*   screen = document.getElementById("screen");
      screen.innerHTML = ``;
      let loginHTML = `            
        <section>
        <input type="email" name="email" id="email" placeholder="Ingrese su mail">
        <input type="text" name="pass" id="pass" placeholder="Ingrese su contaseña">
        <input type="button" value="Ingresar" id="login">
        </section>
            `;
        screen.innerHTML += loginHTML;
      ; */

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

//Menu de Usuario

//VER DONDE DESCARGA CADA PROVEEDOR
function zonaDescarga() {
  let nombreABuscar = prompt("Ingrese el nombre del Proveedor");
  menuProveedores.zona(nombreABuscar.toLowerCase());
}
