const proveedores = [];

const menuProveedores = new MenuProveedores(proveedores);

//Trae los proveedores storage y los pushea
if (localStorage.getItem("nuevoProv")) {
  document.addEventListener("DOMContentLoaded", function (event) {
    let newsProvArray = JSON.parse(localStorage.getItem("nuevoProv"));
    newsProvArray.forEach(function (arrayProv) {
      proveedores.push(arrayProv);
    });

    console.log("Prov cargados del local storange", newsProvArray);
  });
} else {
  console.log("No hay proveedores en local storange");
}

arrayFetch();

async function arrayFetch() {
  let res = await fetch("/javascript/data/array.proveedores.json");
  let json = await res.json();
  provArrayJson(json);
  console.log("Lista de Proveedores originales", json);
}

function provArrayJson(e) {
  e.forEach(function (arrayProv) {
    proveedores.push(arrayProv);
  });
}

function agregarProveedor() {
  buscador.innerHTML = ``;
  buscZonaDescarga.innerHTML = ``;

  screen = document.getElementById("screen");
  screenForm.innerHTML = ``;
  formPreview.innerHTML = ``;
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
  buscador.innerHTML = ``;
  buscZonaDescarga.innerHTML = ``;
  formPreview.innerHTML = ``;
  screenForm.innerHTML = ``;
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
  screenForm.innerHTML = ``;
  formPreview.innerHTML = ``;
  buscZonaDescarga.innerHTML = ``;
  screenBsc = document.getElementById("buscador");
  screenBsc.innerHTML = ``;
  screenBsc.innerHTML = `
      <div class="divBuscar">
            <h5><b>Nombre a buscar</b><h5>
            <input type="text" id="formulario" placeholder="Nombre o Razon social">
            <button class="btn btn-info" id="botonBuscar"> <i class="fa-solid fa-magnifying-glass"></i> </button>
        </div>
      `;

  const buscarPov = document.querySelector(`#formulario`);
  const botonBuscar = document.querySelector(`#botonBuscar`);

  const prefiltrar = () => {
    let nombreTipiado = document.getElementById("formulario").value;
    menuProveedores.buscarTex(nombreTipiado.toUpperCase());
    //console.table("LETRAS TIPIADAS en primer imput", nombreTipiado);
  };

  buscarPov.addEventListener(`keydown`, prefiltrar);

  const filtrar = () => {
    let nombreBuscado = buscarPov.value;
    console.log("este es nombreBuscado", nombreBuscado);
    menuProveedores.buscar(nombreBuscado);
  };

  botonBuscar.addEventListener(`click`, filtrar);
}

function actualizarProveedor() {
  //logIn();

  buscador.innerHTML = ``;
  buscZonaDescarga.innerHTML = ``;
  screen.innerHTML = ``;
  screenForm = document.getElementById("screenForm");
  screenForm.innerHTML = ``;
  let agreProvHTML = `            
  <div id="forProv" class="forAgreProv">
                    <h2>Complete todos los campos</h2> 
                    <p style="color:red">(Modificacion de Proveedor)</p> 
                    <label for="nomAbusc">Ingrese el nombre del proveedor que desea modificar:</label>
                    <input type="text" name="nomAbusc" id="nomAbusc" placeholder="Ingrese nombre o razon social">
                
                    <label for="nombre">Nuevo nombre:</label>
                    <input type="text" name="nombre" id="nombre" placeholder="Ingrese nombre o razon social">
                    <label for="direccion">Nueva direccion:</label>
                    <input type="text" name="ireccion" id="direccion" placeholder="Ingrese direccion">
                    <label for="locacion">Nueva Locacion:</label>
                    <input type="text" name="locacion" id="locacion" placeholder="Ingrese locacion GM">
                    <label for="img">Nueva Imagen:</label>
                    <input type="text" name="img" id="img" placeholder="adjunte imagen">
                
                    <button class="btn btn-primary btnAgreNuevProv" type="button" value="Agregar" id="btnAgregarProv"><span> MODIFICAR </span></button>
                   </div> `;
  screenForm.innerHTML += agreProvHTML;

  const nombreABuscado = document.getElementById("nomAbusc");
  const nombre = document.getElementById("nombre");
  const direccion = document.getElementById("direccion");
  const locacion = document.getElementById("locacion");
  const img = document.getElementById("img");
  const button = document.getElementById("btnAgregarProv");

  const prefiltrar = () => {
    let nombreTipiado = nombreABuscado.value;
    menuProveedores.buscarTexAct(nombreTipiado);
    console.table("LETRAS TIPIADAS en primer imput", nombreABuscado.value);
  };
  nombreABuscado.addEventListener(`keydown`, prefiltrar);

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
function zonaDescarga() {
  screen.innerHTML = ``;
  screenForm.innerHTML = ``;
  formPreview.innerHTML = ``;
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
    console.table("LETRAS TIPIADAS en primer imput", buscarPov.value);
  };

  const filtrar = () => {
    let nombreBuscado = buscarPov.value.toLowerCase();
    console.log(nombreBuscado);
    menuProveedores.zona(nombreBuscado);
  };

  buscarPov.addEventListener(`keydown`, prefiltrar);
  botonBuscar.addEventListener(`click`, filtrar);
}

//-----------------------------------feching
function cargarTiempo() {
  localizar();
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=-31.6572&lon=-60.7152&appid=6e723b89495afd4593121a7ce2430bca"
  )
    .then((response) => response.json())
    .then((response) => mostrarTiempo(response)) //console.log(response.name)
    .catch((err) => console.error(err))
    .finally(console.log("TAREA EJECUTADA"));
}

function mostrarTiempo(e) {
  const arrayClima = e;
  console.log("arrayClima", arrayClima);
  let fecha = new Date(arrayClima.dt * 1000);
  console.log("Fecha", fecha);
  let lugar = arrayClima.name;
  console.log("Lugar", lugar);
  let clima = arrayClima.weather[0].main;
  console.log("Clima", clima);
  let climaIcon = arrayClima.weather[0].icon;
  console.log("iconClima", climaIcon);

  screenForm.innerHTML = ``;
  formPreview.innerHTML = ``;
  buscador.innerHTML = ``;
  buscZonaDescarga.innerHTML = ``;
  screen = document.getElementById("screen");
  screen.innerHTML = ``;
  let cardClimaHTML = `
  <div class="card">
  
      <img src="http://openweathermap.org/img/wn/${climaIcon}@4x.png" alt="">
  
  <div class="card-body">
  <p class="card-text"> Ciudad: ${lugar}<br>
      Tiempo: ${clima}<br>
      Fecha: ${fecha.toDateString()}</p><br>
      <button class="btn btn-danger btnAgreNuevProv" type="button" value="Agregar" id="btnCloseClima"><span>Cerrar</span></button>
      </div>
  </div>
        `;
  screen.innerHTML += cardClimaHTML;

  const btnCloseClima = document.getElementById("btnCloseClima");

  btnCloseClima.addEventListener(`click`, () => (screen.innerHTML = ``));
}
//key: 6e723b89495afd4593121a7ce2430bca

function localizar() {
  if (navigator.geolocation) {
    var success = function (position) {
      var latitud = position.coords.latitude,
        longitud = position.coords.longitude;
      console.log("Latitud: ", latitud, "Longitud: ", longitud);
    };
    navigator.geolocation.getCurrentPosition(success, function (msg) {
      console.error(msg);
    });
  }
}
