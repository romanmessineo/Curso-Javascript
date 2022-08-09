//Funciones de Administrador

class MenuProveedores {
  constructor(proveedores) {
    this.proveedores = proveedores;
  }

  agregarProveedor(proveedor) {
    this.proveedores.push(proveedor);
  }

  guardarNuevoProveedor(e) {
    let proveArray = JSON.parse(localStorage.getItem("nuevoProv")) || [];
    proveArray.push(e);

    let newProveeStrign = JSON.stringify(proveArray);
    localStorage.setItem("nuevoProv", newProveeStrign);

    console.log("mi array local Storage", proveArray);
  }

  darCantidad() {
    return this.proveedores.length;
  }

  listarProveedores() {
    screen = document.getElementById("screen");
    screen.innerHTML = ``;
    proveedores.forEach((proveedor) => {
      let proveedoresHTML = `            
      <div class="card"> 
      <img src=${proveedor.img}  alt="...">
      <div class="card-body">
      <p class="card-text">
      <b>Nombre:</b> ${proveedor.nombre} <br>
      <b>Direccion:</b> ${proveedor.direccion} <br>
      <b>Ubicacion GM:</b> ${proveedor.locacion}</p>
      </div>
      </div>  
            `;
      screen.innerHTML += proveedoresHTML;
    });
  }

  listarNuevoProv(e) {
    screen = document.getElementById("screen");
    screen.innerHTML = `<P>Nuevo Proveedor</P>`;

    let nuevProvHTML = `            
    <div class="card">
    <img src=${e.img}  alt="...">
    <div class="card-body">
    <p class="card-text">
    <b>Nombre:</b> ${e.nombre} <br>
    <b>Direccion:</b> ${e.direccion} <br>
    <b>Ubicacion GM:</b> ${e.locacion}</p>
    </div>
    `;

    screen.innerHTML += nuevProvHTML;
  }

  buscar(nombreBuscado) {
    let esta = this.proveedores.some((proveedor) =>
      proveedor.nombre.toLowerCase().includes(nombreBuscado)
    );

    if (esta) {
      alert("Proveedor encontrado");

      let filtrado = this.proveedores.filter((proveedor) =>
        proveedor.nombre.toLowerCase().includes(nombreBuscado)
      );
      console.table("Proveedores encontrados", filtrado);

      
      screen = document.getElementById("screen");
      screen.innerHTML = ``;
      filtrado.forEach((proveedor) => {
        let proveedoresHTML = `            
            <div class="card">
            <img src=${proveedor.img}  alt="...">
            <div class="card-body">
            <p class="card-text">
            <b>Nombre:</b> ${proveedor.nombre} <br>
            <b>Direccion:</b> ${proveedor.direccion} <br>
            <b>Ubicacion GM:</b> ${proveedor.locacion}</p>
            </div>
            `;
        screen.innerHTML += proveedoresHTML;
      });

      //
    } else {
      alert("No se encuentra el Proveedor");
    }
  }

  modificarProveedor(nombreABuscar, nombre, direccion, locacion, img) {
    let proveedorEncontrado = this.proveedores.find((proveedor) =>
      proveedor.nombre.includes(nombreABuscar)
    );
    if (proveedorEncontrado) {
      proveedorEncontrado.nombre = nombre;
      proveedorEncontrado.direccion = direccion;
      proveedorEncontrado.locacion = locacion;
      proveedorEncontrado.img = img;

      screen = document.getElementById("screen");
      screen.innerHTML = `<P>Proveedor Modificado: ${nombreABuscar} </P>`;

      let nuevProvHTML = `            
      <div class="card">
      <img src=${proveedorEncontrado.img}  alt="...">
      <div class="card-body">
      <p class="card-text">
      <b>Nombre:</b> ${proveedorEncontrado.nombre} <br>
      <b>Direccion:</b> ${proveedorEncontrado.direccion} <br>
      <b>Ubicacion GM:</b> ${proveedorEncontrado.locacion}</p>
      </div>
      </div>
    `;
      screen.innerHTML += nuevProvHTML;

      console.log("Proveedor Modificado con exito", proveedorEncontrado);
    } else {
      alert("No se pudo modificar");
    }
  }

  ordenarProveedores() {
    this.proveedores.sort((proveedorA, proveedorB) => {
      if (proveedorA.nombre < proveedorB.nombre) {
        return -1;
      }
      return 1;
    });

    listarProveedores();
  }

  //Menu de Usuario

  //Boton "Donde descargo" devuelve mapa de zona descarga
  zona(nombreABuscar) {
    let esta = this.proveedores.some((proveedor) =>
      proveedor.nombre.toLowerCase().includes(nombreABuscar)
    );

    if (esta) {
      alert("Proveedor encontrado");

      let filtrado = this.proveedores.filter((proveedor) =>
        proveedor.nombre.toLowerCase().includes(nombreABuscar)
      );
      console.table("Proveedores encontrados", filtrado);

      screen = document.getElementById("screen");
      screen.innerHTML = ``;
      filtrado.forEach((proveedor) => {
        let proveedoresHTML = `            
        <div class="card">
            <img src=${proveedor.img} alt="...">
            <div class="card-body">
                <p class="card-text">
                    <b>Nombre:</b> ${proveedor.nombre} <br>
                    <b>DESCARGA EN:</h4> "${proveedor.locacion}"</h4><br>
                </p>
            </div>
        </div>
        <div class="container-fluid">
        <p><b>"ACA DEBE IR MAPA DE ZONA DESCARGA"</p>
                <img src="https://www.on24.com.ar/wp-content/uploads/2019/09/GM-Alvear.png">
        </div>
              `;
        screen.innerHTML += proveedoresHTML;
      });

      //

      //
    } else {
      alert("No se encuentra el Proveedor");
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

//Usuario y contraseña
console.log("Usuario: usuario1", "Contraseña: password1");

//INICIAR SESION
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
