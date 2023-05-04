$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });

	let texto = "Desenvolvedor Full Stack";
	let elemento = document.getElementById("animate-text");
	let intervalo = 55;
	escreverTexto(texto, elemento, intervalo);
});
function escreverTexto(texto, elemento, intervalo) {
	let i = 0;
	function escrever() {
	  if (i < texto.length) {
		elemento.innerHTML += texto.charAt(i);
		i++;
		setTimeout(escrever, intervalo);
	  }
	}
	escrever();
  }