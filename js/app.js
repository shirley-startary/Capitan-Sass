var api = {
  url: "https://laboratoria.cuadra.co/api/v1/students/"
}
var cargarPagina = function(){

  peticionApi()
}
var peticionApi = function(){
  $.getJSON(api.url, function(response){
    // console.log(response);
    cargarLista(response)
  });
}

var cargarLista = function(lista){
  var $listaEstudiantes = $("#listaEstudiantes");

  lista.forEach(function(nombre){
      // console.log(nombre.name);
      var $li = $("<li />");
      var $check = $("<input/>", {type:"checkbox"});
      console.log($check);
      $li.text(nombre.name);
      $li.append($check);
      $listaEstudiantes.append($li);
      console.log($li);
    });
}
$(document).ready(cargarPagina);
