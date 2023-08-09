let obj = [];

    var text = '{"stock":[' +
            '{"producto": "Acetaminofen","foto": "../GestionStockProductos/img/Acetaminofen.jpeg", "cantidad": "700"},' +
            '{"producto": "Amoxicilina","foto": "../GestionStockProductos/img/Amoxicilina.jpeg", "cantidad": "500"},' +
            '{"producto": "Cetirizina","foto": "../GestionStockProductos/img/Cetirizina.jpeg", "cantidad": "1000"},' +
            '{"producto": "Loratadina","foto": "../GestionStockProductos/img/Loratadina.jpeg", "cantidad": "800"},' +
            '{"producto": "Metformina","foto": "../GestionStockProductos/img/Metformina.jpeg", "cantidad": "400"},' +
            '{"producto": "Omeprazol","foto": "../GestionStockProductos/img/Omeprazol.jpeg", "cantidad": "600"},' +
            '{"producto": "Simvastatina","foto": "../GestionStockProductos/img/Simvastatina.jpeg", "cantidad": "900"},' +
            '{"producto": "Karet","foto": "../GestionStockProductos/img/descarga.jpeg", "cantidad": "500"},' +
            '{"producto": "Ibuprofeno","foto": "../GestionStockProductos/img/ibuprofeno.jpeg", "cantidad": "700"},' +
            '{"producto": "Ramipril","foto": "../GestionStockProductos/img/ramipril.jpeg", "cantidad": "800"}]}';

    obj = JSON.parse(text);
    console.log(obj);
    actualizaTabla();

function actualizaTabla() {
    let cuerpo = "";
    obj.stock.forEach(function (nuevoProd) {
        let registro =
                '<tr onclick="selectProducto(' + obj.stock.indexOf(nuevoProd) + ');">' +
                '<td>' + nuevoProd.producto + '</td>' +
                '<td> <img src="' + nuevoProd.foto + '" width="100" > </td>' +
                '<td>' + nuevoProd.cantidad + '</td>';
        cuerpo += registro;
    });
    document.getElementById("tblstockProd").innerHTML = cuerpo;
}

function searchProducto() {
    let valor = document.getElementById("txtBusquedaProducto").value;
    let filtroMinuscula = valor.toLowerCase();

    let result = obj.stock.filter(element =>
        element.producto.toLowerCase().includes(filtroMinuscula) ||
                element.cantidad.toLowerCase().includes(filtroMinuscula)
    );

    let cuerpo = "";

    result.forEach(function (nuevoProd) {

        let registro =
                '<tr onclick="selectProducto(' + obj.stock.indexOf(nuevoProd) + ');">' +
                '<td>' + nuevoProd.producto + '</td>' +
                '<td> <img src="' + nuevoProd.foto + '" width="100" > </td>' +
                '<td>' + nuevoProd.cantidad + '</td>';

        cuerpo += registro;
    });

    document.getElementById("tblstockProd").innerHTML = cuerpo;
}
function reporteExistencias() {
    let tbodyContent = document.getElementById("tblstockProd").outerHTML; //outerHTML hacer una copia
    tbodyContent="<table>"+tbodyContent+"</table>";
    Swal.fire({
        title: 'Reporte',
        html: tbodyContent,
        showCloseButton: true,
        showCancelButton: false,
        showConfirmButton: false
    }).then((result) => { // Acciones que deseas realizar después de que el usuario haya interactuado con la alerta. 
        actualizaTabla();
    })
            ;
}

document.addEventListener("DOMContentLoaded", function() {
    const nombreUsuario = localStorage.getItem("nombreUsuario");
   
     
    if (nombreUsuario) {
    document.getElementById('nombreUsuario').textContent = nombreUsuario;
     
    
  }
  
    });