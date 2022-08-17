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
    let esta = this.proveedores.filter(
      (proveedor) =>
        proveedor.nombre.indexOf(nombreBuscado.toLowerCase()) !== -1
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
      /* screenFormPreview.innerHTML = ``; */
      filtrado.forEach((proveedor) => {
        let proveedoresHTML = `            
            <div class="card">
            <img src=${proveedor.img}  alt="...">
            <div class="card-body">
            <p class="card-text">
            <b>Nombre:</b> ${proveedor.nombre} <br>
            <b>Direccion:</b> ${proveedor.direccion} <br>
            <b>Ubicacion GM:</b> ${proveedor.locacion}</p>
            <button class="btn btn-primary btnBorrarProv" type="button" value="Agregar" id="btnBorrarProv"><span> Eliminar </span></button>
            </div>
            `;
        screen.innerHTML += proveedoresHTML;

        const btnBorrar = document.getElementById("btnBorrarProv");

        function eliminar() {
          proveedores.splice(filtrado, 1);
          let timerInterval;
          Swal.fire({
            title: `Eliminando proveedor ${proveedor.nombre}`.trim(),
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
              listarProveedores();
            }
          });
        }

        btnBorrar.addEventListener(`click`, eliminar);
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
    let filtrado = this.proveedores.filter(
      (proveedor) =>
        proveedor.nombre.toLowerCase().indexOf(nombreTipiado.toLowerCase()) !==
        -1
    );
    console.table("letra en menuProv", nombreTipiado);
    console.table("VER ESTO", filtrado);

    if (nombreTipiado.length !== 0) {
      screen = document.getElementById("screen");
      screenForm.innerHTML = ``;
      formPreview.innerHTML = ``;
      screen.innerHTML = ``;
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
      });
    } else {
      let vaciar = ``;
      screen.innerHTML = vaciar;
    }
  }

  buscarTexAct(nombreTipiado) {
    let filtrado = this.proveedores.filter(
      (proveedor) =>
        proveedor.nombre.toLowerCase().indexOf(nombreTipiado.toLowerCase()) !==
        -1
    );
    console.table("letra en menuProv", nombreTipiado);
    console.table("VER ESTO", filtrado);

    if (nombreTipiado.length !== 0) {
      formPreview = document.getElementById("formPreview");

      formPreview.innerHTML = ``;
      filtrado.map((proveedor) => {
        let proveedoresHTML = `            
       <div class="card">
       <img src=${proveedor.img}  alt="...">
       <div class="card-body">
       <p class="card-text">
       <b>Nombre:</b> ${proveedor.nombre} <br>
       <b>Direccion:</b> ${proveedor.direccion} <br>
       <b>Ubicacion GM:</b> ${proveedor.locacion}</p>
       <button class="btn btn-primary btnBorrarProv" type="button" value="modificar" id="btnModfProv"><span> Modificar </span></button>
       </div>
       `;
        formPreview.innerHTML = proveedoresHTML;

        const btnModfProv = document.getElementById("btnModfProv");

        const provElegido = () => {
          const nombImput = (document.querySelector(`#nomAbusc`).value =
            proveedor.nombre);
          document.querySelector(`#nomAbusc`);
          document.getElementById("nomAbusc").style.backgroundColor = "green";

          btnModfProv.style.backgroundColor = "#6ab150";

          console.log(
            "Este es el tipo de valor del imput: ",
            typeof proveedor.nombre
          );

          document.getElementById("nombre").focus();
        };

        btnModfProv.addEventListener(`click`, provElegido);
      });
    } else {
      let vaciar = ``;
      formPreview.innerHTML = vaciar;
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
      screen.innerHTML = ``;
      screen.innerHTML = `<h5>Proveedor Modificado: <b> ${proveedorModificado}</b> </h5>`;
      screenForm.innerHTML = ``;
      formPreview.innerHTML = ``;
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
      });

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
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3342.67561628346!2d-60.628520584809856!3d-33.09131768087832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7a7d2945a608f%3A0x4b4c30f52e4aed41!2sGeneral%20Motors%20Company!5e0!3m2!1ses!2sar!4v1660520805997!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
  Swal.fire({
    imageUrl:
      "https://pbs.twimg.com/media/DxdDvpuX0AEMZyn?format=jpg&name=4096x4096",
    imageWidth: 800,
    imageHeight: 800,
    imageAlt: "Custom image",
  });
  /* let seguridadPersonal =
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
  } */
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
