  let indexProductoSeleccionado;
    let obj = [];

    var text = '{"productos":[' + // Corregir el nombre de la clave "productos"
        '{"sucursal": "Plaza Mayor","empleado": "Diego", "fecha": "2023-07-20","hora": "12:30:00", "productos": "Acetaminofén", "cantidad": "700","estatus": "Pendiente"},' +
        '{"sucursal": "Sicefa Galerias","empleado": "Jonathan", "fecha": "2023-06-20","hora": "04:12:00", "productos": "Amoxicilina", "cantidad": "500","estatus": "Pendiente"},' +
        '{"sucursal": "Sicefa Galerias","empleado": "Jimena", "fecha": "2023-06-20","hora": "05:30:00", "productos": "Cetirizina", "cantidad": "1000","estatus": "Pendiente"},' +
         '{"sucursal": "Plaza Mayor","empleado": "Diego", "fecha": "2023-07-20","hora": "12:30:00", "productos": "Loratadina", "cantidad": "800","estatus": "Pendiente"},' +
        '{"sucursal": "Sicefa Galerias","empleado": "Jonathan", "fecha": "2023-06-20","hora": "04:12:00", "productos": "Metformina", "cantidad": "400","estatus": "Pendiente"},' +
        '{"sucursal": "Sicefa Galerias","empleado": "Jimena", "fecha": "2023-06-20","hora": "05:30:00", "productos": "Omeprazol", "cantidad": "600","estatus": "Pendiente"},' +
         '{"sucursal": "Plaza Mayor","empleado": "Diego", "fecha": "2023-07-20","hora": "12:30:00", "productos": "Karet", "cantidad": "900","estatus": "Pendiente"},' +
        '{"sucursal": "Sicefa Galerias","empleado": "Jonathan", "fecha": "2023-06-20","hora": "04:12:00", "productos": "Ibuprofeno", "cantidad": "500","estatus": "Pendiente"},' +
        '{"sucursal": "Sicefa Galerias","empleado": "Jimena", "fecha": "2023-06-20","hora": "05:30:00", "productos": "Loratadina", "cantidad": "700","estatus": "Pendiente"},' +
        '{"sucursal": "Sicefa Galerias","empleado": "Ana Gómez", "fecha": "2023-05-21","hora": "14:45:00", "productos": "Ramipril", "cantidad": "800","estatus": "Pendiente"}]}';

    obj = JSON.parse(text);
    console.log(obj);
    actualizaTabla();

    function actualizaTabla() {
        let cuerpo = "";
        obj.productos.forEach(function (nuevoProd) {
            let registro =
                '<tr onclick="selectProducto(' + obj.productos.indexOf(nuevoProd) + ');">' +
                '<td>' + obj.productos.indexOf(nuevoProd) + '</td>' +
                '<td>' + nuevoProd.sucursal + '</td>' +
                '<td>' + nuevoProd.empleado + '</td>' +
                '<td>' + nuevoProd.fecha + '</td>' +
                '<td>' + nuevoProd.hora + '</td>' +
                '<td>' + nuevoProd.productos + '</td>' +
                '<td>' + nuevoProd.cantidad + '</td>' +
                '<td>' + nuevoProd.estatus + '</td>' +
                '<td><button class="btn btn-danger btn-sm   " onclick="eliminarPedido(' + obj.productos.indexOf(nuevoProd) + ');">Eliminar</button></td>';

            cuerpo += registro;
        });
        document.getElementById("tblProductos").innerHTML = cuerpo;
    }
    
    function validarCampos() {
           
       const nomPro = document.getElementById("txtnomProd").value;
        const cant = document.getElementById("txtcantidad").value;
       
        
           if (nomPro == '' || cant == '' ) {
              alertCampos();
              return false; 
        
            } else if (isNaN(parseFloat(cant))  ) {
                alertNumber();
               return ; 
             }
           
             return true; 
            
        }

      
    
    function searchInactivo() {
                    
                let result = obj.productos.filter(function (productos) {  return productos.estatus == "Eliminado";     });
                    // Crear una cadena vacía para almacenar el contenido de la tabla resultante
                    let cuerpo = "";
                
                    // Iterar sobre los resultados del filtro y generar las filas de la tabla con los datos correspondientes
                    result.forEach(function ( nuevoProd) {
                        // Crear una fila de la tabla con los datos del elemento
                        let registro = 
                        '<tr onclick="selectProducto(' + obj.productos.indexOf( nuevoProd) + ');">' +
                           '<td>' + obj.productos.indexOf(nuevoProd) + '</td>' +
                '<td>' + nuevoProd.sucursal + '</td>' +
                '<td>' + nuevoProd.empleado + '</td>' +
                '<td>' + nuevoProd.fecha + '</td>' +
                '<td>' + nuevoProd.hora + '</td>' +
                '<td>' + nuevoProd.productos + '</td>' +
                '<td>' + nuevoProd.cantidad + '</td>' +
                '<td>' + nuevoProd.estatus + '</td>'+
        '<td><button class="btn btn-danger btn-sm" onclick="cambiarEstatus(' + obj.productos.indexOf(nuevoProd) + ');">Elimiar</button></td>';
                        
                                // Agregar la fila a la cadena "cuerpo"
                                cuerpo += registro;
                            });
                
                    // Mostrar la cadena "cuerpo" en el cuerpo de la tabla con id "tblProductos"
                    document.getElementById("tblProductos").innerHTML = cuerpo;
}
function searchPendiente() {
                    
                let result = obj.productos.filter(function (productos) {         return productos.estatus == "Pendiente";     });
                    // Crear una cadena vacía para almacenar el contenido de la tabla resultante
                    let cuerpo = "";
                
                    // Iterar sobre los resultados del filtro y generar las filas de la tabla con los datos correspondientes
                    result.forEach(function ( nuevoProd) {
                        // Crear una fila de la tabla con los datos del elemento
                        let registro = 
                        '<tr onclick="selectProducto(' + obj.productos.indexOf( nuevoProd) + ');">' +
                           '<td>' + obj.productos.indexOf(nuevoProd) + '</td>' +
                '<td>' + nuevoProd.sucursal + '</td>' +
                '<td>' + nuevoProd.empleado + '</td>' +
                '<td>' + nuevoProd.fecha + '</td>' +
                '<td>' + nuevoProd.hora + '</td>' +
                '<td>' + nuevoProd.productos + '</td>' +
                '<td>' + nuevoProd.cantidad + '</td>' +
                '<td>' + nuevoProd.estatus + '</td>'+
        '<td><button class="btn btn-danger btn-sm" onclick="eliminarPedido(' + obj.productos.indexOf(nuevoProd) + ');">Elimiar</button></td>';
                        
                                // Agregar la fila a la cadena "cuerpo"
                                cuerpo += registro;
                            });
                
                    // Mostrar la cadena "cuerpo" en el cuerpo de la tabla con id "tblProductos"
                    document.getElementById("tblProductos").innerHTML = cuerpo;
}
                
                
                
function searchProducto() {
                    // Obtener el valor del campo de búsqueda con id "txtBusquedaCliente"
                    let valor= document.getElementById("txtBusquedaProducto").value;
                
                    // Convertir el valor obtenido a minúsculas para hacer una búsqueda insensible a mayúsculas/minúsculas
                    let filtroMinuscula = valor.toLowerCase();
                
                    // Filtrar los elementos del arreglo "obj.medicinas" que coincidan con el filtro
                    let result = obj.productos.filter(element =>

                       

                        element.sucursal.toLowerCase().includes(filtroMinuscula) ||
                        element.empleado.toLowerCase().includes(filtroMinuscula) ||
                        element.fecha.toString().includes(filtroMinuscula) ||
                        element.hora.toLowerCase().includes(filtroMinuscula) ||
                        element.productos.toLowerCase().includes(filtroMinuscula) ||
                        element.cantidad.toString().includes(filtroMinuscula) ||
                        
                        element.estatus.toLowerCase().includes(filtroMinuscula)


                    );
                
                    // Crear una cadena vacía para almacenar el contenido de la tabla resultante
                    let cuerpo = "";
                
                    // Iterar sobre los resultados del filtro y generar las filas de la tabla con los datos correspondientes
                    result.forEach(function ( nuevoProd) {
                        // Crear una fila de la tabla con los datos del elemento
                        let registro = 
                        '<tr onclick="selectProducto(' + obj.productos.indexOf( nuevoProd) + ');">' +
                           '<td>' + obj.productos.indexOf(nuevoProd) + '</td>' +
                '<td>' + nuevoProd.sucursal + '</td>' +
                '<td>' + nuevoProd.empleado + '</td>' +
                '<td>' + nuevoProd.fecha + '</td>' +
                '<td>' + nuevoProd.hora + '</td>' +
                '<td>' + nuevoProd.productos + '</td>' +
                '<td>' + nuevoProd.cantidad + '</td>' +
                '<td>' + nuevoProd.estatus + '</td>'+
        '<td><button class="btn btn-danger btn-sm" onclick="eliminarPedido(' + obj.productos.indexOf(nuevoProd) + ');">Elimiar</button></td>';
                        
                                // Agregar la fila a la cadena "cuerpo"
                                cuerpo += registro;
                            });
                
                    // Mostrar la cadena "cuerpo" en el cuerpo de la tabla con id "tblProductos"
                    document.getElementById("tblProductos").innerHTML = cuerpo;
}
                
                function agregarProducto3() {
            if (!validarCampos()) {
                return;
            }

            // Obtener los valores del formulario
            let nomProd, cant, sucursal, empleado, fecha, hora;

            sucursal = "Sicefa Galerias";
            empleado = "Juan Bananas";
            nomProd = document.getElementById("txtnomProd").value;
            cant = document.getElementById("txtcantidad").value;

            // Obtener la fecha y hora actual
            let currentDate = new Date();
            fecha = currentDate.toISOString().split("T")[0];
            hora = currentDate.toTimeString().split(" ")[0];

            let newProd = {
                sucursal: sucursal,
                empleado: empleado,
                productos: nomProd,
                cantidad: cant,
                fecha: fecha,
                hora: hora,
                estatus: "Pendiente"
            };

            obj.productos.push(newProd);
            alertGoodJobs();
           actualizaTabla();
           limpiar();
        }
        function limpiar() {
            document.getElementById("txtnomProd").value = "";
            document.getElementById("txtcantidad").value = "";
           
            
        }
        
    function alertGoodJobs() {
                swal({
                  title: "¡Buen trabajo!",
                  text: "Pedido agregado correctamente",
                  icon: "success",
                  button: "Aceptar",
                });
              }
               function alertCampos() {
                swal({
                  title: "¡Advertencia!",
                  text: "Por favor, complete todos los campos.",
                  icon: "warning",
                  button: "¡Entendido!",
                });
              }
              function alertNumber() {
                swal({
                  title: "¡Advertencia!",
                  text: "Por favor, ingrese solo números en los campos solicitados..",
                  icon: "warning",
                  button: "¡Entendido!",
                });
              }
                function eliminarPedido(index) {
        swal({
            title: "¿Quieres eliminar el Pedido seleccionado?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                obj.productos[index].estatus = "Eliminado";
                actualizaTabla();
                swal("Eliminado con éxito!", {
                    icon: "success",
                });
            }
        });
    }
    function mantenimiento() {
                swal({
                    icon: 'error',
                    icon: "warning",
                    text: 'Lo sentimos, este módulo está en mantenimiento!',
                    button: "Aceptar",
                });
            }
document.addEventListener("DOMContentLoaded", function() {
                const nombreUsuario = localStorage.getItem("nombreUsuario");
               
                 
                if (nombreUsuario) {
                document.getElementById('nombreUsuario').textContent = nombreUsuario;
                 
                
              }
              
                });