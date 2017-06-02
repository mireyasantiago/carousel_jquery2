
 /*IIFE :Una expresión invocado inmediatamente.función anónima autoejecutable: mantiene la privacidad de las variables*/
(function (){

  var target = 0;

  var cargarPagina = function () {
      /* Elementos*/
      var $botones = $(".control");
      var $anterior = $(".previous");
      var $siguiente = $(".next");

      /* Eventos*/
      $botones.click(cambiarImagen);
      $anterior.click(anteriorImagen);
      $siguiente.click(siguienteImagen);
  };

  var cambiarImagen = function () {
      target = parseInt($(this).data("target"));
      mostrarImagen(target);
  };

  var mostrarImagen = function (target) {
      var $lastSlide = $("div.active");
      var $slide = $("div[data-slide='" + target + "']");
      $lastSlide.removeClass("active");
      $slide.addClass("active");
  };

  var anteriorImagen = function (e) {
      e.preventDefault();
      target = target - 1;
      target = (target < 0) ? 4 : target;
      mostrarImagen(target);
  };

  var siguienteImagen = function (e) {
      e.preventDefault();
      target = target + 1;
      target = (target > 4) ? 0 : target;
      mostrarImagen(target);mostrarImagen(target);
  };

  /* se ejecuta cuando carga la pagina*/
  $(document).ready(cargarPagina);

})();
