$(document).ready(function(){//Se ejecuta cuando se termina de cargar la web
  ajustesIniciales();
});

$(window).resize(function(){//Se ejecuta cada vez que existe un cambio en la resolución de la pantalla.
	ajustesIniciales();
});

function ajustesIniciales(){
  var height = $(window).height();
  var height_menu = $("nav.menu").height();
  $("div.bloque_opacity").css({"height":+(height-height_menu)+"px"});
  $("div.bloque_opacity").css({"top":+height_menu+"px"});
}

var menudesplegado = true;
function selectButtonMenu(){//Se Ejecuta al accionar sobre el botón de aparecer/desaparecer menu de navegación
	var height = $(window).height();

		if (menudesplegado == true){
        $("div.bloque_opacity").css({"display":"block"});
				$("nav.menu>ul").css({"left":"0%"});
        $("div.line_button_open_nav").css({"position":"absolute"});
        $("div#line_1").css({"transform":"rotate(45deg)"});
        $("div#line_3").css({"transform":"rotate(-45deg)"});
        $("div#line_2").css({"opacity":"0"});
        $("div.bloque_opacity").css({"background":"#000"});

				menudesplegado = false;
		}else{
      $("div.bloque_opacity").css({"display":"none"});
				$("nav.menu>ul").css({"left":"-100%"});
        $("div.line_button_open_nav").css({"position":"relative"});
        $("div#line_1").css({"transform":"rotate(0deg)"});
        $("div#line_3").css({"transform":"rotate(-0deg)"});
        $("div#line_2").css({"opacity":"1"});
        $("div.bloque_opacity").css({"background":"transparent"});

				menudesplegado = true;
		}
}
