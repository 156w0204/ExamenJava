$(document).ready(function()
 {
   Tabla();

 });

// listar 

function Tabla(){

  $.ajax({ // es una metodologia de trabajo 
    method : 'get', // espeificar el metodo que estoy utilizando en mi back
    url : 'http://localhost:9000/ClienteWs/listar', // url a consumir 
    contentType : 'application/json; charset=UTF-8',
    dataType : 'json',

    success : function(respuesta){
      //console.log("respuesta del servidor --> "+JSON.stringify(respuesta)); // JSON.stringify --> convierte un objeto a un valorn de java script --> en cadeja JSON
       
       var cuerpo; //
       for (var i = 0; i <respuesta.length;i++) { // es recorrer la longiyuf de la respuesta que me nada el servidor 
        
        cuerpo += '<tr>'+  // concateno y agrego 
                       '<td>'+respuesta[i].id+'</td>'+
                       '<td>'+respuesta[i].nombre+'</td>'+
                       '<td>'+respuesta[i].fechanac+'</td>'+
                       '<td>'+respuesta[i].celular+'</td>'+
                       '<td>'+respuesta[i].correo+'</td>'+
                       
                      
                        '<td><a  data="'+respuesta[i].id+'" id="Editar"><i class="bi bi-pencil-square"></i></a></td>'+
                       '<td><a  data="'+respuesta[i].id+'" id="Eliminar"><i class="bi bi-trash"></i></a></td>'+
                   '</tr>';

       }// cierre del for
       $('#tbody').html(cuerpo);
       
    },
    error : function(resultado){
        console.log("Error al listar");
        }
  });

};


// Editar --> primero hay que buscar 
$('#tbody').on('click','#Editar', function() 
{
  var id =$(this).attr('data');
    console.log("id-->"+JSON.stringify(id));
  var json = {"id":id};

  $.ajax({
    type:'ajax',
    method:'post',
    url:'http://localhost:9000/ClienteWs/buscar',
    data: JSON.stringify(json),
    contentType: 'application/json; charset=UTF-8',

    success: function(respuesta){
      console.log("Se encontro el objeto a editar->"+JSON.stringify(respuesta));
      $('#idE').val(id);
      $('#nombreE').val(respuesta.nombre);
      $('#fechanacE').val(respuesta.fechanac);
      $('#celularE').val(respuesta.celular);
      $('#correoE').val(respuesta.correo);
      $('#modalEditar').modal('show');
    },
    error:function(resultado){
      console.log("Error al buscar");
    }

  });


});

// editar ..> boton

$('#btnEditar').click(function(){
  var id = $('#idE').val();
  var nombre = $('#nombreE').val();
  var fechanac = $('#fechanacE').val();
  var celular = $('#celularE').val();
  var correo = $('#correoE').val();

  var json = {"id":id,"nombre":nombre,"fechanac":fechanac,"celular":celular,"correo":correo};
    console.log("Cliente a editar"+JSON.stringify(json));

    $.ajax({
      type:'ajax',
      method: 'post',
      url: 'http://localhost:9000/ClienteWs/editar',
      data: JSON.stringify(json),
      contentType: 'application/json; charset=UTF-8',
      success:function(respuesta){
        $('#modalEditar').modal('hide');
        $('.alert-success').html("Se edito el Cliente ").fadeIn().delay(4000).fadeOut('snow');
        Tabla();

      },
      error:function(resultado){
        console.log("Error al editar");

      }
    });
});


// elimiar --> buscar

$('#tbody').on('click','#Eliminar', function()  
{
  var id =$(this).attr('data');
    console.log("ID-->"+JSON.stringify(id));

  var json = {"id":id};

  $.ajax({
    type:'ajax',
    method:'post',
    url:'http://localhost:9000/ClienteWs/eliminar',
    data: JSON.stringify(json),
    contentType: 'application/json; charset=UTF-8',

    success: function(respuesta){
      console.log("Se encontro el Cliente a eliminar->"+JSON.stringify(respuesta));

      $('#idD').val(id);
      $('#nombreD').val(respuesta.nombre);
      $('#fechanacD').val(respuesta.fechanac);
      $('#celularD').val(respuesta.celular);
      $('#correoD').val(respuesta.correo);
      $('#modal-Eliminar').modal('show');

    },
    error:function(resultado){
      console.log("Error al buscar");
    }

  });


});


//btn elimiinar
$('#btnEliminar').click(function(){

  var id = $('#idD').val();
  var nombre = $('#nombreD').val();
  var fechanac = $('#fechanacD').val();
  var celular = $('#celularD').val();
  var correo = $('#correoD').val();

  var json = {"id":id,"nombre":nombre,"fechanac":fechanac,"celular":celular,"correo":correo};
    console.log("cliente a eliminar"+JSON.stringify(json));

    $.ajax({
      type:'ajax',
      method: 'post',
      url: 'http://localhost:9000/ClienteWs/eliminar',
      data: JSON.stringify(json),
      contentType: 'application/json; charset=UTF-8',
      success:function(respuesta){
        $('#modal-Eliminar').modal('hide');
        $('.alert-danger').html("Se Elimino el cliente ").fadeIn().delay(3000).fadeOut('snow');
        Tabla();

      },
      error:function(resultado){
        console.log("Error al eliminar");

      }
    });
});



//abrir modal
$('#btnGuadarAbrir').click(function()
 {
  $('#modalGuardar').modal('show');
 });


//Guardar
$('#btnGuadar').click(function()
 {
  var id = $('#id').val();
  var nombre = $('#nombre').val();
  var fechanac = $('#fechanac').val();
  var celular = $('#celular').val();
  var correo = $('#correo').val();
  
  var limpiar = " ";

    if(id == ''){
      alert("Ingrese el id")
    }else if(nombre == ''){
      alert("Ingrese el nombre")
    }else if(fechanac == ''){
      alert("Ingrese la fecha de nacimiento")
    }else if(celular == ''){
      alert("Ingrese el numero de celular")
    }else if(correo == ''){
      alert("Ingrese su correo")
    }else{
      //cierre if
      var json = {"id":id,"nombre":nombre,"fechanac":fechanac,"celular":celular,"correo":correo};
        console.log("Cliente a Guardar---->"+JSON.stringify(json));

        $.ajax({
          type: 'ajax',
          method: 'post',
          url:'http://localhost:9000/ClienteWs/guardar',
          data:JSON.stringify(json),
          contentType :'application/json; charset=UTF-8',
          success: function(respuesta){
            $('#id').val(limpiar);
            $('#nombre').val(limpiar);
            $('#fechanac').val(limpiar);
            $('#celular').val(limpiar);
            $('#correo').val(limpiar);
            $('#modalGuardar').modal('hide');

            $('.alert-success').html("Se guardo el Cliente").fadeIn().delay(3000).fadeOut('snow');
            Tabla();
          }

        });

    }

 });