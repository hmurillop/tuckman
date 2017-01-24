
/********** Funcion de "ir arriba" ********************/

$(document).ready(function(){
 
	$('#ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 2000);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('#ir-arriba').slideDown(300);
		} else {
			$('#ir-arriba').slideUp(300);
		}
	});
 
});

/******** Animaciones en Jquery para los elementos del nav *******/

$("#nav_1").click(function () {
    $('html,body').animate({
        scrollTop: $("#antecedentes").offset().top
    }, 2000);
});

$("#nav_2").click(function () {
    $('html,body').animate({
        scrollTop: $("#bio").offset().top
    }, 2000);
});

$("#nav_3").click(function () {
    $('html,body').animate({
        scrollTop: $("#formacion").offset().top
    }, 2000);
});

$("#nav_4").click(function () {
    $('html,body').animate({
        scrollTop: $("#conflicto").offset().top
    }, 2000);
});

$("#nav_5").click(function () {
    $('html,body').animate({
        scrollTop: $("#normalizacion").offset().top
    }, 2000);
});

$("#nav_6").click(function () {
    $('html,body').animate({
        scrollTop: $("#desempeno").offset().top
    }, 2000);
});

$("#nav_7").click(function () {
    $('html,body').animate({
        scrollTop: $("#terminacion").offset().top
    }, 2000);
});

$("#nav_8").click(function () {
    $('html,body').animate({
        scrollTop: $("#conclusiones").offset().top
    }, 2000);
});

$("#nav_9").click(function () {
    $('html,body').animate({
        scrollTop: $("#nosotros").offset().top
    }, 2000);
});