$(document).on("ready", main);

function main(){
	/*
	  Añadimos estas capas al body:

	    <div id='previewSlideshow'>
	    	<div id='imagen'>
	    		<img width=400 height=350>
	    		<div id='descripcion'></div>
	    		<div id='cerrar'>Cerrar</div>
	    	</div>
	    </div>
	*/

	$("body").append("<div id='previewSlideshow'><div id='imagen'><img width=400 height=400><div id='descripcion'></div><div id='cerrar'>Cerrar</div></div></div>");	

	$("#slideshow img").on("click", abrirImagen);
	$("#previewSlideshow #cerrar").on("click", cerrarImagen);
}

function abrirImagen(){
	//alert($(this).attr("title"));
	$("#previewSlideshow").fadeIn();
	$("#previewSlideshow img").attr("src", "pablo"+($(this).index()+1)+".jpg"); // index nos dá la posición
	$("#previewSlideshow #descripcion").text($(this).attr("title"));
}

function cerrarImagen(){
	$("#previewSlideshow").fadeOut();
}



