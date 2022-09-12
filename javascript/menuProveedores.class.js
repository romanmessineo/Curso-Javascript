//Funciones de Administrador

class MenuProveedores {
  constructor(proveedores) {
    this.proveedores = proveedores;
  }

  //agrega nuevo proveedor al array
  agregarProveedor(proveedor) {
    this.proveedores.push(proveedor);
  }

  //Tre y carga nuevo prov en local storange
  guardarNuevoProveedor(e) {
    let proveArray = JSON.parse(localStorage.getItem("nuevoProv")) || [];
    proveArray.push(e);

    let newProveeStrign = JSON.stringify(proveArray);
    localStorage.setItem("nuevoProv", newProveeStrign);

    console.log("mi array local Storage", proveArray);
  }

  //cantidad en array
  darCantidad() {
    return this.proveedores.length;
  }

  //imprime la lista de proveedores
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

  //Imprime en pantalla el nuevo proveedor agregado
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
    let refresh;
    refresh = setInterval(() => {
      window.location.reload();
    }, 5000);

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
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  }

  //Muesta en pantalla el prov seleccionado y le agrega la funcion eliminar
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
      screenForm.innerHTML = ``;
      console.log("Proveedores encontrados", filtrado[0].nombre);
      screenForm = document.getElementById("screenForm");
      screenBsc.innerHTML = ``;

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
            <button class="btn btn-primary btnBorrarProv" type="button" value="Agregar" id="btnBorrarProv"><span> Eliminar </span></button>
            <button class="btn btn-primary btnCancel" type="button" value="cancelar" id="btnCancel"><span>Cancelar</span></button>
            </div>
            `;
        screenForm.innerHTML += proveedoresHTML;

        const btnBorrar = document.getElementById("btnBorrarProv");
        const btnCancel = document.getElementById("btnCancel");

        btnBorrar.addEventListener(`click`, eliminar);
        btnCancel.addEventListener(`click`, () => window.location.reload());

        function eliminar() {
          const filtradoEliminar = filtrado[0].id;
          const index = proveedores.findIndex((x) => x.id === filtradoEliminar);
          proveedores.splice(index, 1);
          console.log("nuevo array Prov", proveedores);

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
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log(
                "Proveedor eliminado con exito: ",
                filtrado[0].nombre
              );
              listarProveedores();
              Swal.fire("Se elimino", filtrado[0].nombre);
            }
          });
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se encuentra el Proveedor!",
      });
    }
  }

  //Imprime vizualicion de la Card para Boton `eliminar` y `donde descargo`
  buscarTex(nombreTipiado) {
    let filtrado = this.proveedores.filter(
      (proveedor) =>
        proveedor.nombre.toLowerCase().indexOf(nombreTipiado.toLowerCase()) !==
        -1
    );

    if (nombreTipiado.length !== 0) {
      screenForm.innerHTML = ``;
      formPreview.innerHTML = ``;
      screen.innerHTML = ``;
      screen = document.getElementById("screen");
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

  //Imprime vizualicion de la Card que se va a actualizar mientras se tipea
  buscarTexAct(nombreTipiado) {
    let filtrado = this.proveedores.filter(
      (proveedor) =>
        proveedor.nombre.toLowerCase().indexOf(nombreTipiado.toLowerCase()) !==
        -1
    );

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
       <button class="btn btn-primary btnBorrarProv" type="button" value="modificar" id="btnModfProv"><span> Seleccionar </span></button>
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

          document.getElementById("nombre").focus();
        };

        document
          .getElementById("nomAbusc")
          .addEventListener("keyup", function (e) {
            if (e.code === "Enter") {
              document.getElementById("btnModfProv").click();
            }
          });

        btnModfProv.addEventListener(`click`, provElegido);
      });
    } else {
      let vaciar = ``;
      formPreview.innerHTML = vaciar;
    }
  }

  //Imprime Proveedor modificado
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
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });

      console.log("Proveedor Modificado con exito", proveedorEncontrado);
    } else {
      alert("No se pudo modificar");
    }
  }

  //Ordena proveedores alfabeticamente
  ordenarProveedores() {
    this.proveedores.sort((proveedorA, proveedorB) => {
      if (proveedorA.nombre < proveedorB.nombre) {
        return -1;
      }
      return 1;
    });

    listarProveedores();
  }

  //Boton "Donde descarga" devuelve mapa de zona descarga
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
        <div class="mostrarZona">
      <div class="card">
        <img src=${proveedor.img} alt="...">
        <div class="card-body">
          <p class="card-text">
            <b>Nombre:</b> ${proveedor.nombre} <br>
            <b>DESCARGA EN:</h4> "${proveedor.locacion}"</h4><br>
          </p>
        </div>
      </div>
      <div>
        <p><b>"ACA DEBE IR MAPA DE ZONA DESCARGA"</p>
        <img class="zonaMapa"src="./imagenes/mapa.png" />
      </div>
    </div>
              `;
        screen.innerHTML += proveedoresHTML;
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se encuentra el Proveedor!",
      });
    }
  }
}
