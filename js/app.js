const menu = [
			  ["HOT SALAD BAR","VEG Item"],
			  ["WHITE PASTA","VEG Item"],
			  ["PRAWN MALAI CURRY","NOn-VEG Item"],
			  ["GREEN PASTA","VEG Item"],
			  ["NAVARATNAKARI","VEG Item"]];
var i = 0;
function change(a){
	i = i + a;
	console.log(a,typeof(a),i);
	if(i==5){
		i--;
		return;
	}
	if(i==-1){
		i++;
		return;
	}
	if(i==1){
		$('.fa-arrow-circle-left').removeClass('active');
	}
	else if(i==0){
		$('.fa-arrow-circle-left').addClass('active');
	}
	else if(i==4){
		console.log("comes");
		$('.fa-arrow-circle-right').addClass('active');
	}
	else if(i==3){
		$('.fa-arrow-circle-right').removeClass('active');
	}
	$('header .box2 div.img-container img').css("left", -(i*300)+"px");
	$("header .box1 .box-head-menu").fadeOut(100,function(){
		$("header .box1 .box-head-menu h1").html(menu[i][0]);
		$("header .box1 .box-head-menu h2").html(menu[i][1]);
	});
	$("header .box1 .box-head-menu").fadeIn();
}



$(window).on('scroll', function () {
    if ($(window).scrollTop() && window.innerWidth >= 1360) {
        $('nav').addClass('a animated slideInDown');
        //console.log("COme");
    }
    else {
        $('nav').removeClass('a animated slideInDown');
    }
});









$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        850:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


/*Handburger*/
$('.handburger').click(function(){
	$(this).toggleClass("active");
	$("nav div ul").toggleClass("active-nav");
})


window.addEventListener('load', function () {
	$('.loader').fadeOut(2000);
});