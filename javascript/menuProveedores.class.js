class MenuProveedores {
    constructor(proveedores) {
        this.proveedores = proveedores;
    }

    agregarProveedor(proveedor) {
        this.proveedores.push(proveedor);
    }

    darCantidad() {
        return this.proveedores.length;
    }


    listarProveedores() {
        screen = document.getElementById("screen");
        proveedores.forEach((proveedor) =>{
            let proveedoresHTML =`
            <div>
            <div class="card" style="width: 18rem;">
            <img src="https://img.youtube.com/vi/vmTUZCzg4bk/0.jpg" alt="...">
           <div class="card-body">
           <p class="card-text">
           <b>Nombre:</b> ${proveedor.nombre} <br>
           <b>Direccion:</b> ${proveedor.direccion} <br>
           <b>Ubicacion GM:</b> ${proveedor.locacion}</p>
           
           
  </div>
`
         
        screen.innerHTML+= proveedoresHTML    
            
        });
    } 

   



    buscar(nombreABuscar) {
        let esta = this.proveedores.some((proveedor) =>
        proveedor.nombre.includes(nombreABuscar)
        )

        if (esta) {
            alert("Proveedor encontrado")

            let filtrado = this.proveedores.filter((proveedor) =>
                    proveedor.nombre.includes(nombreABuscar)
            )

            console.table("Proveedores encontrados", filtrado);
        }
        else {
            alert("No se encuentra el Proveedor")
        }


    }
    modificarProveedor(nombreABuscar, nombre, direccion, locacion)
    {
        let proveedorEncontrado = this.proveedores.find((proveedor) =>
            proveedor.nombre.includes(nombreABuscar)
        )
        if(proveedorEncontrado)
        {
            proveedorEncontrado.nombre=nombre;
            proveedorEncontrado.direccion=direccion;
            proveedorEncontrado.locacion=locacion;
            console.log("Proveedor Modificado con exito", this.proveedores);
        }
        else{
            alert("No se pudo modificar")
        }


    }
    ordenarProveedores()
    {
        this.proveedores.sort((proveedorA, proveedorB)=>
        {
            if(proveedorA.nombre<proveedorB.nombre)
            {
                return -1
            }
            return 1;
        
        })
        console.log("Ordenados", this.proveedores)
    }

}