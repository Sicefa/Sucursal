var text = '{"empleado":[ ' +
  '{"codigo" : "15060000", "ingresoE" : "2014-06-13", "puestoE" : "Gerente", "salarioE" : "3000", "estatus" : "Activo", ' +
  ' "persona" : {"nomE" : "Karen", "apaternoE" : "Carmona", "amaternoE" : "Pérez",   "generoE": "Mujer","nacimientoE" : "1990-07-26", "curpE" : "CARJ900726MGTRDR","rfcE" : "CARJ900726F31","emailE" : "KarenCar@gmail.com","telefonoE" : "4771239868", "fotoE" : "M1.jpeg" }, ' +
  ' "direccion" : {"ciudadE" : "León", "estadoE" : "Guanajuato","cpE" : "37100", "domicilioE" : "Echeveste" }, ' +
  ' "usuario" : {"nombreUsuario" : "15060000", "rol" : "ADMS" }}, ' +

  '{"codigo" : "15060001", "ingresoE" : "2015-07-15", "puestoE" : "Coordinador", "salarioE" : "4000", "estatus" : "Activo", ' +
  ' "persona" : {"nomE" : "Alejandro", "apaternoE" : "Fernández", "amaternoE" : "Morales",   "generoE": "Hombre","nacimientoE" : "1987-06-25", "curpE" : "FEMA870625HGTRRL","rfcE" : "FEMA870625F30","emailE" : "Afernandez@gmail.com","telefonoE" : "4770988865", "fotoE" : "H1.jpeg" }, ' +
  ' "direccion" : {"ciudadE" : "León", "estadoE" : "Guanajuato","cpE" : "37545", "domicilioE" : "Hacienda del Campestre" }, ' +
  ' "usuario" : {"nombreUsuario" : "15060001", "rol" : "EMPS" }}, ' +

  '{"codigo"  : "15060002", "ingresoE" : "2015-06-15", "puestoE" : "Supervisor", "salarioE" : "3800", "estatus" : "Activo", ' +
  ' "persona" : {"nomE" : "Jose Luis", "apaternoE" : "Pérez", "amaternoE" : "Jiménez",   "generoE": "Hombre","nacimientoE" : "1980-11-03", "curpE" : "PEJJ801103HGTRMS","rfcE" : "PEJJ801103F45","emailE" : "JosePerez@gmail.com","telefonoE" : "4774547876", "fotoE" : "H2.jpeg" }, ' +
  ' "direccion" : {"ciudadE" : "León", "estadoE" : "Guanajuato","cpE" : "37549", "domicilioE" : "10 de Mayo" }, ' +
  ' "usuario" : {"nombreUsuario" : "15060002", "rol" : "ADMS" }}, ' +

  '{"codigo" : "15060003", "ingresoE" : "2018-10-12", "puestoE" : "Coordinador", "salarioE" : "4000", "estatus" : "Activo", ' +
  ' "persona" : {"nomE" : "Andrea", "apaternoE" : "Sánchez", "amaternoE" : "Torres",   "generoE": "Mujer","nacimientoE" : "1998-09-16", "curpE" : "SATA980916MGTNRN", "rfcE" : "SATA980916F56","emailE" : "AndreaSan@gmail.com","telefonoE" : "4779817734", "fotoE" : "M2.jpeg" }, ' +
  ' "direccion" : {"ciudadE" : "León", "estadoE" : "Guanajuato","cpE" : "37277", "domicilioE" : "La Condesa" }, ' +
  ' "usuario" : {"nombreUsuario" : "15060003", "rol" : "EMPS" }}, ' +

  '{"codigo" : "15060004", "ingresoE" : "2015-06-15", "puestoE" : "Gerente", "salarioE" : "9000", "estatus" : "Activo", ' +
  ' "persona" : {"nomE" : "Angel", "apaternoE" : "Cruz", "amaternoE" : "Díaz",   "generoE": "Hombre","nacimientoE" : "1997-12-27", "curpE" : "CRDA971227HGTRZN","rfcE" : "CRDA971227F14","emailE" : "Afernandez@gmail.com","telefonoE" : "4772349812", "fotoE" : "H3.jpeg" }, ' +
  ' "direccion" : {"ciudadE" : "León", "estadoE" : "Guanajuato","cpE" : "37207", "domicilioE" : "8 de Marzo" }, ' +
  ' "usuario" : {"nombreUsuario" : "15060004", "rol" : "ADMS" }}, ' +


  '{"codigo" :  "15060005","ingresoE": "2017-03-20","puestoE": "Coordinador","salarioE": "3500","estatus": "Activo",' +
  ' "persona": {"nomE": "Manuel","apaternoE": "García","amaternoE": "Hernández","generoE": "Hombre","nacimientoE": "1985-04-10","curpE": "GAHM850410HGTNRN","rfcE": "GAHM850410F29","emailE": "ManuelGarcia@gmail.com","telefonoE": "4777458962","fotoE": "H4.jpeg"},' +
  ' "direccion": {"ciudadE": "León","estadoE": "Guanajuato","cpE": "37180","domicilioE": "Villas de San Juan" },' +
  ' "usuario": {"nombreUsuario": "15060005","rol": "EMPS" }}, '+
 
  '{"codigo" :  "15060006","ingresoE": "2016-08-05","puestoE": "Supervisor","salarioE": "4200","estatus": "Activo",' +
   ' "persona": { "nomE": "Laura","apaternoE": "Martínez","amaternoE": "Gómez","generoE": "Mujer","nacimientoE": "1992-11-15","curpE": "MAGL921115MGTNRN","rfcE": "MAGL921115F41","emailE": "LauraMartinez@gmail.com","telefonoE": "4775678901","fotoE": "M3.jpeg"},' +
   ' "direccion": {"ciudadE": "León","estadoE": "Guanajuato","cpE": "37000","domicilioE": "Centro" },' +
   ' "usuario": {"nombreUsuario": "15060006","rol": "ADMS" }}, '+

   '{"codigo" :  "15060007","ingresoE": "2019-05-28","puestoE": "Gerente","salarioE": "3700","estatus": "Activo",' +
   ' "persona": {"nomE": "Sofía","apaternoE": "Ramírez","amaternoE": "Juárez","generoE": "Mujer","nacimientoE": "1995-09-20","curpE": "RAJS950920MGTNRN","rfcE": "RAJS950920F27","emailE": "SofiaRamirez@gmail.com","telefonoE": "4773345678","fotoE": "M4.jpeg" },' +
   ' "direccion": { "ciudadE": "León", "estadoE": "Guanajuato", "cpE": "37300", "domicilioE": "Industrial Delta"},' +
   ' "usuario": {"nombreUsuario": "15060007","rol": "EMPS"}}, '+
   
    
   '{"codigo" : "15060008","ingresoE": "2020-11-09","puestoE": "Supervisor","salarioE": "4500","estatus": "Activo",' +
   ' "persona": {"nomE": "Juan","apaternoE": "López","amaternoE": "Mendoza","generoE": "Hombre","nacimientoE": "1988-02-18","curpE": "LOMJ880218HGTNRN","rfcE": "LOMJ880218F13", "emailE": "JuanLopez@gmail.com", "telefonoE": "4772123456","fotoE": "H5.jpeg" },' +
   ' "direccion": {"ciudadE": "León","estadoE": "Guanajuato","cpE": "37070","domicilioE": "San Felipe"},' +
   ' "usuario": { "nombreUsuario": "15060008", "rol": "ADMS"}}, '+
    
   '{"codigo" : "15060009","ingresoE": "2015-12-03","puestoE": "Gerente","salarioE": "4800","estatus": "Activo",' +
   ' "persona": {"nomE": "María","apaternoE": "Torres","amaternoE": "Ortiz","generoE": "Mujer","nacimientoE": "1983-10-02","curpE": "TOOM831002MGTNRN","rfcE": "TOOM831002F26","emailE": "MariaTorres@gmail.com","telefonoE": "4774456789","fotoE": "M5.jpeg"},' +
   ' "direccion": {"ciudadE": "León","estadoE": "Guanajuato","cpE": "37240","domicilioE": "Colinas del Sur"},' +
   ' "usuario": {"nombreUsuario": "15060009","rol": "EMPS"}}'+
']}';
let indexEmpleado; // es el índice del arreglo
let obj = []; // arreglo que se llenará de objetos JSON
 
let ultimoCodigo ; 
obj = JSON.parse(text);
console.log(obj);
actualizaTabla();

function actualizaTabla() {
    let cuerpo = "";
    obj.empleado.forEach(function (elemento) {
        let registro =
                '<tr onclick="selectEmpleado(' + obj.empleado.indexOf(elemento) + ');">' +
                
                '<td>' + obj.empleado.indexOf(elemento) + '</td>' +
                '<td>' + elemento.codigo +  '</td>' +
                 
                '<td>' + elemento.persona.nomE + " " + elemento.persona.apaternoE +  " " + elemento.persona.amaternoE +'</td>' +             
                '<td>' + elemento.persona.generoE+'</td>' +                  
                '<td>' + elemento.persona.rfcE+'</td>' +            
                 '<td>' + elemento.persona.telefonoE+'</td>' +
                  '<td>' + elemento.direccion.domicilioE+ " "+ elemento.direccion.cpE+'</td>' +
                 '<td>' + elemento.ingresoE+'</td>' +
                  '<td>' + elemento.usuario.rol+'</td>' +
                  '<td>' + elemento.salarioE+'</td>' +
                    '<td>' + elemento.usuario.nombreUsuario+'</td>' +
                  
              
               
                '<td> <img src="img/' + elemento.persona.fotoE + ' " width="100" > </td>' +
                '<td>' + elemento.estatus + '</td></tr>';
                ultimoCodigo=elemento.codigo;
        cuerpo += registro;
    });
    document.getElementById("tblEmpleados").innerHTML = cuerpo;
}
function selectEmpleado(index) {
  document.getElementById("txtCodigo").value = obj.empleado[index].codigo;                               
  document.getElementById("txtnom").value = obj.empleado[index].persona.nomE;
  document.getElementById("txtpaternoE").value = obj.empleado[index].persona.apaternoE;
  document.getElementById("txtmaternoE").value = obj.empleado[index].persona.amaternoE;
  document.getElementById("txtgeneroE").value = obj.empleado[index].persona.generoE;
  document.getElementById("txtNacimientoE").value = obj.empleado[index].persona.nacimientoE;
  document.getElementById("txtrfcE").value = obj.empleado[index].persona.rfcE;
  document.getElementById("txtcurpE").value = obj.empleado[index].persona.curpE;
  document.getElementById("txtciudadE").value = obj.empleado[index].direccion.ciudadE;
  document.getElementById("txtestadoE").value = obj.empleado[index].direccion.estadoE;
  document.getElementById("txtcpE").value = obj.empleado[index].direccion.cpE;
  document.getElementById("txtDomicilioE").value = obj.empleado[index].direccion.domicilioE;
  document.getElementById("txtelefonoE").value = obj.empleado[index].persona.telefonoE;
  document.getElementById("txtIngresoE").value = obj.empleado[index].ingresoE;
  document.getElementById("txtPuestoE").value = obj.empleado[index].puestoE;
  document.getElementById("txtSalarioE").value = obj.empleado[index].salarioE;
  document.getElementById("txtemailE").value = obj.empleado[index].persona.emailE;
  
  
  document.getElementById("txtUsuarioE").value = obj.empleado[index].usuario.nombreUsuario ;
  document.getElementById("txtRolE").value = obj.empleado[index].usuario.rol;
   
  let ruta = 'img/';
  document.getElementById("txtFotoE").src = ruta + obj.empleado[index].persona.fotoE;
  document.getElementById("archivoE").value =  "";
  
  document.getElementById("btnModificar").classList.remove("disabled");
  document.getElementById("btnEliminar").classList.remove("disabled");
  document.getElementById("btnAgregar").classList.add("disabled");
  indexEmpleado = index;

}
function validarCampos() {
  const nombre = document.getElementById('txtnom').value;
  const apaterno = document.getElementById('txtpaternoE').value;
  const amaterno = document.getElementById('txtmaternoE').value;
  const genero = document.getElementById('txtgeneroE').value;
  const fnacimiento = document.getElementById('txtNacimientoE').value;
  const rfc = document.getElementById('txtrfcE').value;
  const curp = document.getElementById('txtcurpE').value;
  const ciudad = document.getElementById('txtciudadE').value;
  const estado = document.getElementById('txtestadoE').value;
  const cp = document.getElementById('txtcpE').value;
  const domicilio = document.getElementById('txtDomicilioE').value;
  const telefono = document.getElementById('txtelefonoE').value;
  const ingreso = document.getElementById('txtelefonoE').value;
  const puesto = document.getElementById('txtPuestoE').value;
  const salario = document.getElementById('txtSalarioE').value;
  const email = document.getElementById('txtemailE').value;
 const rol = document.getElementById('txtRolE').value;

  // Verificar si algún campo está vacío
  if (nombre == '' || apaterno == '' || amaterno == '' || genero == '' || fnacimiento == '' ||
      rfc == '' || curp == ''|| ciudad == '' || estado == '' ||cp == '' || domicilio == '' || 
      telefono == ''||ingreso == ''||puesto == ''||salario == ''||email == ''||rol == '') {
    //Alerta para llenar todos los campos
    alertCampos();
    return false; // Cancelar la acción de agregar el producto
  
  }else if (isNaN(parseFloat(telefono))||isNaN(parseFloat(salario))|| isNaN(parseFloat(cp))) {

   //Alerta para validar los campos
    alertNumber();
    return; // Cancel the action of adding the product
  }

  return true; // Permitir la acción de agregar el producto si todos los campos están llenos
}

function obtenerNombreFotoE(){
  let nombreFoto;
  nombreFoto= document.getElementById("archivoE").value;
  nombreFoto = nombreFoto.substring(nombreFoto.lastIndexOf("\\")+1);   
  return nombreFoto;
}     
function despliegaFotoE(){
let nombreFoto = obtenerNombreFotoE();
let ruta = 'img/';
document.getElementById("txtFotoE").src = ruta + nombreFoto;
}

function agregarEmpleado() {
  if (!validarCampos()) {
    return; 
  }
    if (!validarEmail2()) {
         swal({
      title: "¡Advertencia!",
      text: "Por favor, ingrese un correo valido.",
      icon: "warning",
      button: "¡Entendido!",
    });
        return;
    }

  let  codigo,nomE, apaternoE, amaternoE, generoE, nacimientoE, rfcE, curpE, ciudadE, estadoE, cpE, domicilioE, telefonoE, 
      puestoE, salarioE, emailE,  fotoE, rolE,ingresoE;
     
  
  nomE = document.getElementById("txtnom").value;
  apaternoE = document.getElementById("txtpaternoE").value;
  amaternoE = document.getElementById("txtmaternoE").value;
  generoE = document.getElementById("txtgeneroE").value;
  nacimientoE = document.getElementById("txtNacimientoE").value;
  rfcE = document.getElementById("txtrfcE").value;
  curpE = document.getElementById("txtcurpE").value;
  ciudadE = document.getElementById("txtciudadE").value;
  estadoE = document.getElementById("txtestadoE").value;
  cpE = document.getElementById("txtcpE").value;
  domicilioE = document.getElementById("txtDomicilioE").value;
  telefonoE = document.getElementById("txtelefonoE").value;
      ingresoE=document.getElementById("txtIngresoE").value;
  puestoE = document.getElementById("txtPuestoE").value;
  salarioE = document.getElementById("txtSalarioE").value;
  emailE = document.getElementById("txtemailE").value;
  fotoE = obtenerNombreFotoE();
  rolE = document.getElementById("txtRolE").value;
 codigo = document.getElementById("txtCodigo").value;
 
   
  let newEmp = {};
  newEmp.codigo = codigo;
  newEmp.ingresoE = ingresoE;
  newEmp.puestoE = puestoE;
  newEmp.salarioE = salarioE;
  newEmp.estatus = "Activo"; 
  newEmp.persona = {}; // creamos objeto anidado persona
  newEmp.persona.nomE = nomE;
  newEmp.persona.apaternoE = apaternoE;
  newEmp.persona.amaternoE = amaternoE;
  newEmp.persona.generoE = generoE;
  newEmp.persona.nacimientoE = nacimientoE;
  newEmp.persona.rfcE = rfcE;
  newEmp.persona.curpE = curpE;
  newEmp.persona.telefonoE = telefonoE;
  newEmp.persona.emailE = emailE;
  newEmp.persona.fotoE = fotoE;
  newEmp.direccion = {}; // creamos objeto anidado dirección
  newEmp.direccion.ciudadE = ciudadE;
  newEmp.direccion.estadoE = estadoE;
  newEmp.direccion.cpE = cpE;
  newEmp.direccion.domicilioE = domicilioE;
  newEmp.usuario = {}; // creamos objeto anidado usuario
  newEmp.usuario.rol = rolE;
  newEmp.usuario.nombreUsuario = codigo;
  
  obj.empleado.push(newEmp);
  let jsonData = JSON.stringify(obj.empleado);


  console.log(jsonData);
  console.log(typeof(jsonData));
  alertGoodJobs();
  limpiar();
  actualizaTabla();
}
function limpiar() {
  document.getElementById("txtnom").value = "";
  document.getElementById("txtpaternoE").value = "";
  document.getElementById("txtmaternoE").value = "";
  document.getElementById("txtgeneroE").value = "";
  document.getElementById("txtNacimientoE").value = "";
  document.getElementById("txtrfcE").value = "";
  document.getElementById("txtcurpE").value = "";
  document.getElementById("txtciudadE").value = "";
  document.getElementById("txtestadoE").value = "";
  document.getElementById("txtcpE").value = "";
  document.getElementById("txtDomicilioE").value = "";
  document.getElementById("txtelefonoE").value = "";
  document.getElementById("txtIngresoE").value = "";
  document.getElementById("txtPuestoE").value = "";
  document.getElementById("txtSalarioE").value = "";
  document.getElementById("txtemailE").value = "";
  document.getElementById("txtCodigo").value = "";
  document.getElementById("txtFotoE").src= "img/nada.jpg";
  document.getElementById("archivoE").value= "";
  document.getElementById("txtUsuarioE").value = "";
  document.getElementById("txtRolE").value = "";
  
  document.getElementById("btnModificar").classList.add("disabled");
  document.getElementById("btnEliminar").classList.add("disabled");
  document.getElementById("btnAgregar").classList.remove("disabled");
  indexEmpleado = 0;
}

function generaCodigo(fecha){  
    let codigo1=0;
    
    console.log("fecha",fecha);
    
    let anio = fecha.substring(2,4);
     console.log("año",anio);
    
    let mes = fecha.substring(5,7);
      console.log("mes",mes);
      
    ultimoCodigo=Number(ultimoCodigo.substring(4,8))+1;
     console.log("ultimoCodigo",ultimoCodigo);
    
    if (ultimoCodigo<10)
         codig1o=anio+mes+"000"+ ultimoCodigo;
    else if (ultimoCodigo<100)
         codigo1=anio+mes+"00"+ ultimoCodigo;
    else if (ultimoCodigo<1000)
         codigo1=anio+mes+"0"+ ultimoCodigo;
    else 
         codigo1=anio+mes+ultimoCodigo;
     
    console.log("codigo",codigo1);
    
    document.getElementById("txtCodigo").value= codigo1;
    
}
function modificarRegistro() {
   let nomE, apaternoE, amaternoE, generoE, nacimientoE, rfcE, curpE, ciudadE,estadoE,cpE,domicilioE, telefonoE, 
         ingresoE,puestoE,salarioE,emailE,codigo;
    nomE = document.getElementById("txtnom").value;
    apaternoE = document.getElementById("txtpaternoE").value;
    amaternoE = document.getElementById("txtmaternoE").value;
    generoE = document.getElementById("txtgeneroE").value;
    nacimientoE = document.getElementById("txtNacimientoE").value;
    rfcE = document.getElementById("txtrfcE").value;
    curpE = document.getElementById("txtcurpE").value;
    ciudadE = document.getElementById("txtciudadE").value;
    estadoE = document.getElementById("txtestadoE").value;
     ingresoE=document.getElementById("txtIngresoE").value;
    cpE = document.getElementById("txtcpE").value;
    domicilioE = document.getElementById("txtDomicilioE").value;
    telefonoE = document.getElementById("txtelefonoE").value;
    puestoE = document.getElementById("txtIngresoE").value;
    puestoE = document.getElementById("txtPuestoE").value;
    salarioE = document.getElementById("txtSalarioE").value;
    emailE = document.getElementById("txtemailE").value;
     codigo = document.getElementById("txtCodigo").value;
     rolE = document.getElementById("txtRolE").value;

    let newEmp = {};
     newEmp.codigo = codigo;
    newEmp.ingresoE = ingresoE;
    newEmp.puestoE= puestoE;
    newEmp.salarioE= salarioE;
    newEmp.estatus = "Activo"; 
    newEmp.persona = {}; // creamos objeto anidado persona
    newEmp.persona.nomE= nomE;
    newEmp.persona.apaternoE = apaternoE;
    newEmp.persona.amaternoE = amaternoE;
    newEmp.persona.generoE= generoE;
    newEmp.persona.nacimientoE = nacimientoE;
    newEmp.persona.rfcE = rfcE;
    newEmp.persona.curpE = curpE;
    newEmp.persona.telefonoE= telefonoE;
    newEmp.persona.emailE= emailE;
    newEmp.direccion = {}; // creamos objeto anidado usuaeio
    newEmp.direccion.ciudadE= ciudadE;
    newEmp.direccion.estadoE = estadoE;
    newEmp.direccion.cpE = cpE;
    newEmp.direccion.domicilioE = domicilioE;
    newEmp.usuario = {}; // creamos objeto anidado usuario
  newEmp.usuario.rol = rolE;
  newEmp.usuario.nombreUsuario = codigo;
    obj.empleado[indexEmpleado] = newEmp;

}

 function modificaEmpleado() {
     if (!validarCampos()) {
        return;
      }
    swal({
    title: "¿Quieres modificar el empleado seleccionado?",
    text: "",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
        modificarRegistro();
        actualizaTabla();
        limpiar();
      swal("¡Registro modificado con éxito!", {
        icon: "success",
      });
    } else {
      swal("¡Tu registro no fue modificado!");
    }
  });
}
//Eliminar un producto
function eliminarEmpleado() {
    swal({
    title: "¿Quieres eliminar el empleado seleccionado?", 
    icon: "warning", 
    buttons: true, 
    dangerMode: true, 
  })
  .then((willDelete) => {

    if (willDelete) {
      obj.empleado[indexEmpleado].estatus = "Inactivo";

      limpiar();
      actualizaTabla();

      swal("Eliminado con éxito!", {
        icon: "success", 
      });
    } else {

    }
  });
}

 function searchEmpleado() {
    // Obtener el valor del campo de búsqueda con id "txtBusquedaCliente"
    let valor= document.getElementById("txtBusquedaEmpleado").value;

    // Convertir el valor obtenido a minúsculas para hacer una búsqueda insensible a mayúsculas/minúsculas
    let filtroMinuscula = valor.toLowerCase();

    // Filtrar los elementos del arreglo "obj.medicinas" que coincidan con el filtro
    let result = obj.empleado.filter(element =>
        element.persona.nomE.toLowerCase().includes(filtroMinuscula) ||
        element.persona.apaternoE.toLowerCase().includes(filtroMinuscula) || 
        element.codigo.toLowerCase().includes(filtroMinuscula) ||     
       element.persona.amaternoE.toLowerCase().includes(filtroMinuscula) ||           
        element.persona.generoE.toLowerCase().includes(filtroMinuscula) ||                 
       element.persona.rfcE  .toLowerCase().includes(filtroMinuscula) ||          
       element.persona.telefonoE.toLowerCase().includes(filtroMinuscula) || 
        element.direccion.domicilioE.toLowerCase().includes(filtroMinuscula) || 
         element.direccion.cpE.toLowerCase().includes(filtroMinuscula) || 
        
        element.usuario.rol.toLowerCase().includes(filtroMinuscula) || 
        element.salarioE.toLowerCase().includes(filtroMinuscula) || 
       element.usuario.nombreUsuario.toLowerCase().includes(filtroMinuscula) || 
     element.estatus .toLowerCase().includes(filtroMinuscula)  
    );

    // Crear una cadena vacía para almacenar el contenido de la tabla resultante
    let cuerpo = "";

    // Iterar sobre los resultados del filtro y generar las filas de la tabla con los datos correspondientes
    result.forEach(function (newEmp) {
        // Crear una fila de la tabla con los datos del elemento
        let registro = 
        '<tr onclick="selectEmpleado(' + obj.empleado.indexOf(newEmp) + ');">' +
                
                '<td>' + obj.empleado.indexOf(newEmp) + '</td>' +
                '<td>' + newEmp.codigo +  '</td>' +
                 
                '<td>' + newEmp.persona.nomE + " " + newEmp.persona.apaternoE +  " " + newEmp.persona.amaternoE +'</td>' +             
                '<td>' + newEmp.persona.generoE+'</td>' +                  
                '<td>' + newEmp.persona.rfcE+'</td>' +            
                 '<td>' + newEmp.persona.telefonoE+'</td>' +
                  '<td>' + newEmp.direccion.domicilioE+ " "+ newEmp.direccion.cpE+'</td>' +
                 '<td>' + newEmp.ingresoE+'</td>' +
                  '<td>' + newEmp.usuario.rol+'</td>' +
                  '<td>' + newEmp.salarioE+'</td>' +
                    '<td>' + newEmp.usuario.nombreUsuario+'</td>' +
                  
              
               
                '<td> <img src="img/' + newEmp.persona.fotoE + ' " width="100" > </td>' +
                '<td>' + newEmp.estatus + '</td></tr>';
                ultimoCodigo=newEmp.codigo;
        cuerpo += registro;
    });

    // Mostrar la cadena "cuerpo" en el cuerpo de la tabla con id "tblProductos"
    document.getElementById("tblEmpleados").innerHTML = cuerpo;
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
      button:"¡Entendido!",
    });
  }
function alertGoodJobs() {
    swal({
      title: "¡Buen trabajo!",
      text: "Empleado agregado correctamente",
      icon: "success",
      button: "Aceptar"
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
function validarEmail2() {
    let email = document.getElementById("txtemailE").value;
    if (email.indexOf('@') < 0) {
        return false;
    }
    return true;
}
// Código para mostrar el nombre de usuario y centro en el navbar
document.addEventListener("DOMContentLoaded", function() {
  const nombreUsuario = localStorage.getItem("nombreUsuario");
 
   
  if (nombreUsuario) {
  document.getElementById('nombreUsuario').textContent = nombreUsuario;
   
  
}

  });