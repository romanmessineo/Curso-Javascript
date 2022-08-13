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

function agregarProveedor() {
  buscador.innerHTML = ``;
  buscZonaDescarga.innerHTML = ``;
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
    menuProveedores.guardarNuevoProveedor(proveedor);
  });
}

function listarProveedores() {
  /* document.innerHTML = `` */
  /* buscador = document.getElementById("buscador"); */
  buscador.innerHTML = ``
  buscZonaDescarga.innerHTML = ``;
  menuProveedores.listarProveedores();
  Toastify({
    text: "Listados OK",
    duration: 3000,
    close: true,
    /* className: "info", */
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    style: {
      background: "linear-gradient(to right, #0093b0, #3db4c9)",
    },
  }).showToast();
}

function buscarProveedor() {
  screen.innerHTML = ``;
  buscZonaDescarga.innerHTML = ``; 
  screenBsc = document.getElementById("buscador");
  screenBsc.innerHTML = ``;
  screenBsc.innerHTML = `
      <div class="divBuscar">
            <h5><b>Nombre a buscar</b><h5>
            <input  type="text" id="formulario" placeholder="Nombre o Razon social">
            <button class="btn btn-info" id="botonBuscar"> <i class="fa-solid fa-magnifying-glass"></i> </button>
        </div>
      `;
      
  const buscarPov = document.querySelector(`#formulario`);
  const botonBuscar = document.querySelector(`#botonBuscar`);

 const prefiltrar = () => {
    let nombreTipiado = buscarPov.value;
    menuProveedores.buscarTex(nombreTipiado);
    console.table("LETRAS TIPIADAS en primer imput",buscarPov.value);
  
  }; 
  
  buscarPov.addEventListener(`keydown`, prefiltrar); 
  
  const filtrar = () => {
    let nombreBuscado = buscarPov.value;
    console.log("este es nombreBuscado",nombreBuscado);
    menuProveedores.buscar(nombreBuscado);
    /* document.getElementById("buscador").style.display = `none`; */
    

  };

 

  botonBuscar.addEventListener(`click`, filtrar); 
}

function actualizarProveedor() {
  logIn();
  buscador.innerHTML = ``
  buscZonaDescarga.innerHTML = ``;
  screen = document.getElementById("screen");
  screen.innerHTML = ``;
  let agreProvHTML = `            
    <section id="forProv" class="forAgreProv">
    <h2>Complete todos los campos</h2> 
    <p>(Modificacion de Proveedor)</p> 
    <label for="nomAbusc">Ingrese el nombre del proveedores que desea modificar:</label>
    <input type="text" name="nomAbusc" id="nomAbusc" placeholder="Ingrese nombre o razon social">

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
  const nombreABuscado = document.getElementById("nomAbusc");
  const nombre = document.getElementById("nombre");
  const direccion = document.getElementById("direccion");
  const locacion = document.getElementById("locacion");
  const img = document.getElementById("img");
  const button = document.getElementById("btnAgregarProv");

  button.addEventListener("click", (e) => {
    e.preventDefault();
    let data = {
      nombreABuscar: nombreABuscado.value,
      nombre: nombre.value,
      direccion: direccion.value,
      locacion: locacion.value,
      img: img.value,
    };

    console.log(data.nombreABuscar);

    menuProveedores.modificarProveedor(
      data.nombreABuscar.toLowerCase(),
      data.nombre,
      data.direccion,
      data.locacion,
      data.img
    );
  });
}

function ordenarProveedores() {
  menuProveedores.ordenarProveedores();
  Toastify({
    text: "Ordenados OK",
    duration: 3000,
    close: true,
    /* className: "info", */
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    style: {
      background: "linear-gradient(to right, #0093b0, #3db4c9)",
    },
  }).showToast();
}

//Menu de Usuario

//VER DONDE DESCARGA CADA PROVEEDOR
function zonaDescarga() 
{  
  screen.innerHTML = ``;
  buscador.innerHTML = ``;  
  buscZonaDescarga = document.getElementById("buscZonaDescarga");
  buscZonaDescarga.innerHTML = `
      <div class="divBuscar">
            <h5><b>Que Proveedor debe descargar?</b><h5>
            <input  type="text" id="formulario" placeholder="Nombre o Razon social">
            <button class="btn btn-info" id="botonBuscar"> <i class="fa-solid fa-magnifying-glass"></i> </button>
        </div>
      `;
  const buscarPov = document.querySelector(`#formulario`);
  const botonBuscar = document.querySelector(`#botonBuscar`);

  const prefiltrar = () => {
    let nombreTipiado = buscarPov.value;
    menuProveedores.buscarTex(nombreTipiado);
    console.table("LETRAS TIPIADAS en primer imput",buscarPov.value);
  
  }; 

  const filtrar = () => {
    let nombreBuscado = buscarPov.value.toLowerCase();
    console.log(nombreBuscado);
    menuProveedores.zona(nombreBuscado);
    /* document.getElementById("buscZonaDescarga").style.display = `none`; */
  };

  buscarPov.addEventListener(`keydown`, prefiltrar);
  botonBuscar.addEventListener(`click`, filtrar);
}













