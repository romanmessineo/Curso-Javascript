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
    let timerInterval;
    Swal.fire({
      title: `Cargando Proveedor ${e.nombre}`.trim(),
      html: "Este cuadro se cerrara en <b></b> milisegundos.",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
    //Swal.fire("Se agrego", e.nombre, "", "success");
  }

  buscar(nombreBuscado) {
    
    let esta = this.proveedores.filter((proveedor) =>
      proveedor.nombre.indexOf(nombreBuscado.toLowerCase()) !==-1
    );

    if (esta) {
      Swal.fire("Proveedor encontrado", "", "success");
      let filtrado = this.proveedores.filter((proveedor) =>
        proveedor.nombre.toLowerCase().includes(nombreBuscado)
      );
      console.table("Proveedores encontrados", filtrado);
      screenBsc.innerHTML = ``;
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
        /* let vaciar =``
        screenFooter.innerHTML = vaciar; */
        
      });

      //
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se encuentra el Proveedor!",
      });
      //alert("No se encuentra el Proveedor");
    }
  }

  buscarTex(nombreTipiado) {
   /*  let esta = this.proveedores.some((proveedor) =>
      proveedor.nombre.includes(nombreTipiado.toLowerCase()) !==-1
    ); */

    
      //Swal.fire("Proveedor encontrado", "", "success");
      let filtrado = this.proveedores.filter((proveedor) =>
        proveedor.nombre.toLowerCase().indexOf(nombreTipiado.toLowerCase())!==-1
        
      );
      console.table("letra en menuProv", nombreTipiado);
      console.table("VER ESTO", filtrado);
      
      if (nombreTipiado.length  !== 0) { 
      /* newDiv = document.createElement("div"); */
      screen = document.getElementById("screen");/* .appendChild(newDiv); */
        
      //creen.innerHTML = ``;
      filtrado.map((proveedor) => {
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
            screen.innerHTML = proveedoresHTML;
            
            //console.log("xxxxxxxxx" ,proveedoresHTML );
       } );
      
   
   } 
    else {
      let vaciar =``
      screen.innerHTML = vaciar;
      
      }
      
     
  }

  modificarProveedor(nombreABuscar, nombre, direccion, locacion, img) {
    let proveedorEncontrado = this.proveedores.find((proveedor) =>
      proveedor.nombre.toLowerCase().includes(nombreABuscar)
    );
     const proveedorModificado = proveedorEncontrado.nombre;
    if (proveedorEncontrado.nombre) {
      proveedorEncontrado.nombre = nombre;
      proveedorEncontrado.direccion = direccion;
      proveedorEncontrado.locacion = locacion;
      proveedorEncontrado.img = img;

      screen = document.getElementById("screen");
      screen.innerHTML = `<h5>Proveedor Modificado: <b> ${proveedorModificado}</b> </h5>`;

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
      let timerInterval;
      Swal.fire({
        title: `Actualizando Proveedor ${proveedorModificado}`.trim(),
        html: "Este cuadro se cerrara en <b></b> milisegundos.",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector("b");
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft();
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      })

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
      Swal.fire("Proveedor encontrado", "", "success");

      let filtrado = this.proveedores.filter((proveedor) =>
        proveedor.nombre.toLowerCase().includes(nombreABuscar)
      );
      console.table("Proveedores encontrados", filtrado);
      buscZonaDescarga.innerHTML = ``;
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
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se encuentra el Proveedor!",
      });
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

//INICIAR SESION

function logIn() {
  Swal.fire({
    title: "Inicie sesión",
    html: `<input type="text" id="login" class="swal2-input" placeholder="Cualquier nombre">
  <input type="password" id="password" class="swal2-input" placeholder="Cualquier Password">`,
    confirmButtonText: "Login",
    focusConfirm: false,
    preConfirm: () => {
      const login = Swal.getPopup().querySelector("#login").value;
      const password = Swal.getPopup().querySelector("#password").value;

      if (!login || !password) {
        Swal.showValidationMessage(`Ingrese usuario contraseña por favor`);
      }
      return { login: login, password: password };
    },
  }).then((result) => {
    Swal.fire(
      `
    Bienvenido ${result.value.login}!
    `.trim()
    );
  });
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
