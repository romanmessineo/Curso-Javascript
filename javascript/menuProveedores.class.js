class MenuProveedores {
  constructor(proveedores) {
    this.proveedores = proveedores;
  }

  agregarProveedor(proveedor) {
    this.proveedores.push(proveedor);

  }

  guardarNuevoProveedor(e) {
    let proveArray = JSON.parse(localStorage.getItem("nuevoProv"));
    proveArray.push(e) ;

    let newProveeStrign = JSON.stringify(proveArray);
    localStorage.setItem("nuevoProv",newProveeStrign);
    //let proArraJson = JSON.stringify(e);
    //localStorage.setItem("nuevoProv",proArraJson )

    /* let newProvArray = JSON.parse(localStorage.getItem("nuevoProv")) || [];
    this.proveedores.push(newProvArray); */

    //provJson.push(newProvArray);

    /* let provJson = JSON.stringify(e);
    localStorage.setItem("nuevoProv", provJson);
    let provReinsert = JSON.stringify(newProvArray);
    localStorage.setItem("nuevoProv",provReinsert); */
    
    console.log("mi array local", (proveArray), "mi nuevo strn", (newProveeStrign));
   // console.log("mi strims locales", provJson);
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

  buscar(nombreABuscar) {
    let esta = this.proveedores.some((proveedor) =>
      proveedor.nombre.includes(nombreABuscar)
    );

    if (esta) {
      alert("Proveedor encontrado");

      let filtrado = this.proveedores.filter((proveedor) =>
        proveedor.nombre.includes(nombreABuscar)
      );
      console.table("Proveedores encontrados", filtrado);

      //
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
    screen.innerHTML = `<P>Proveedor Modificado</P>`;

    let nuevProvHTML = `            
    <div class="card">
    <img src=${proveedorEncontrado.img}  alt="...">
    <div class="card-body">
    <p class="card-text">
    <b>Nombre:</b> ${proveedorEncontrado.nombre} <br>
    <b>Direccion:</b> ${proveedorEncontrado.direccion} <br>
    <b>Ubicacion GM:</b> ${proveedorEncontrado.locacion}</p>
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

  zona(nombreABuscar){
      let esta = this.proveedores.some((proveedor) =>
        proveedor.nombre.includes(nombreABuscar)
      );
  
      if (esta) {
        alert("Proveedor encontrado");
  
        let filtrado = this.proveedores.filter((proveedor) =>
          proveedor.nombre.includes(nombreABuscar)
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
              <b>DESCARGA EN:</h4> "${proveedor.locacion}"</h4><br>
              <b>"ACA DEBE IR MAPA DE ZONA DESCARGA"<br>
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
