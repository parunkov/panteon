/*Модальный контент для слайда 1-1*/

var slide11label = document.querySelector(".slide-1-1-label");
var slide11arrow = document.querySelector(".slide-1-1-arrow");
var slide11labelHeader = document.querySelector(".slide-1-1-label-header");
var slide11text = document.querySelector(".slide-1-1-text");

if(window.matchMedia('(max-width: 750px)').matches) {	
	slide11label.addEventListener("click", function(event) {
		event.preventDefault();		
		slide11arrow.classList.toggle("icon-arrow-2");
		slide11arrow.classList.toggle("icon-arrow-1-show");
		slide11labelHeader.classList.toggle("slide-1-label-header-show");
		slide11text.classList.toggle("slide-1-text-show")
	})
}

/*Модальный контент для слайда 1-2*/

var slide12label = document.querySelector(".slide-1-2-label");
var slide12arrow = document.querySelector(".slide-1-2-arrow");
var slide12labelHeader = document.querySelector(".slide-1-2-label-header");
var slide12text = document.querySelector(".slide-1-2-text");

if(window.matchMedia('(max-width: 750px)').matches) {	
	slide12label.addEventListener("click", function(event) {
		event.preventDefault();		
		slide12arrow.classList.toggle("icon-arrow-2");
		slide12arrow.classList.toggle("icon-arrow-1-show");
		slide12labelHeader.classList.toggle("slide-1-label-header-show");
		slide12text.classList.toggle("slide-1-text-show")
	})
}

/*Модальный контент для слайда 1-3*/

var slide13label = document.querySelector(".slide-1-3-label");
var slide13arrow = document.querySelector(".slide-1-3-arrow");
var slide13labelHeader = document.querySelector(".slide-1-3-label-header");
var slide13text = document.querySelector(".slide-1-3-text");

if(window.matchMedia('(max-width: 750px)').matches) {	
	slide13label.addEventListener("click", function(event) {
		event.preventDefault();		
		slide13arrow.classList.toggle("icon-arrow-2");
		slide13arrow.classList.toggle("icon-arrow-1-show");
		slide13labelHeader.classList.toggle("slide-1-label-header-show");
		slide13text.classList.toggle("slide-1-text-show")
	})
}

/*Модальный контент для слайда 1-4*/

var slide14label = document.querySelector(".slide-1-4-label");
var slide14arrow = document.querySelector(".slide-1-4-arrow");
var slide14labelHeader = document.querySelector(".slide-1-4-label-header");
var slide14text = document.querySelector(".slide-1-4-text");

if(window.matchMedia('(max-width: 750px)').matches) {	
	slide14label.addEventListener("click", function(event) {
		event.preventDefault();		
		slide14arrow.classList.toggle("icon-arrow-2");
		slide14arrow.classList.toggle("icon-arrow-1-show");
		slide14labelHeader.classList.toggle("slide-1-label-header-show");
		slide14text.classList.toggle("slide-1-text-show")
	})
}

/*Пререзагрузка страницы при изменении медиа брейкпойнта для изменения типа слайдера*/

var mql = window.matchMedia('(max-width: 750px)');

var flag = true;
if (mql.matches) {
	flag = false;
}

/*console.log("Перезагрузка прошла!");*/

window.onresize = message;
function message() { 
	if(flag) {
		if(mql.matches) {
			location.reload();
			/*console.log("перезагрузка!");	*/		
		} 
	} else {
		if(mql.matches) {
		} else {
			location.reload();
			/*console.log("перезагрузка!");*/		
		} 
	}  	   	
	/*console.log("Размер окна изменен!");
	console.log("flag = ", flag);
	console.log("mql.matches = ", mql.matches);*/
}

/*Кнопка вниз*/


var btnScrollDown = document.querySelector('.icon-down');
var facts = document.querySelector(".facts");
btnScrollDown.addEventListener("click", function(event) {
	event.preventDefault();
	facts.scrollIntoView(top);
})

/*Смещение вверх для слайдера 2 для медиа брейкпойнта sm*/

var slider2 = document.querySelector(".slider-2");
var btn21 = document.querySelector("#btn-2-1");
var btn22 = document.querySelector("#btn-2-2");
var btn23 = document.querySelector("#btn-2-3");
var btn24 = document.querySelector("#btn-2-4");
var btn25 = document.querySelector("#btn-2-5");
var slide2header11 = document.querySelector(".slide-2-header-1-1");
var slide2header21 = document.querySelector(".slide-2-header-2-1");
var slide2header31 = document.querySelector(".slide-2-header-3-1");
var slide2header41 = document.querySelector(".slide-2-header-4-1");
var slide2header51 = document.querySelector(".slide-2-header-5-1");
var labelFlag = 0;

if(window.matchMedia('(max-width: 750px)').matches) {
	slider2.addEventListener("click", function(event) {
		/*console.log("labelFlag = " + labelFlag);*/
		if(btn21.checked && (labelFlag != 1)) {
			/*console.log("выбор 1!");*/
			slide2header11.scrollIntoView(top);
			labelFlag = 1;
		};
		if(btn22.checked && (labelFlag != 2)) {
			/*console.log("выбор 2!");*/
			slide2header21.scrollIntoView(top);
			labelFlag = 2;
		};
		if(btn23.checked && (labelFlag != 3)) {
			/*console.log("выбор 3!");*/
			slide2header31.scrollIntoView(top);
			labelFlag = 3;
		};
		if(btn24.checked && (labelFlag != 4)) {
			/*console.log("выбор 4!");*/
			slide2header41.scrollIntoView(top);
			labelFlag = 4;
		};
		if(btn25.checked && (labelFlag != 5)) {
			/*console.log("выбор 5!");*/
			slide2header51.scrollIntoView(top);
			labelFlag = 5;
		};
	})
}


/*Адаптивный постер для видео*/

var headerVideo = document.querySelector(".header-video");

if(window.matchMedia('(max-width: 750px)').matches) {
	headerVideo.setAttribute('poster', 'img/header-video-320.jpg');
} else if(window.matchMedia('(max-width: 1170px)').matches) {
	headerVideo.setAttribute('poster', 'img/header-video-750.jpg');
} else {
	headerVideo.setAttribute('poster', 'img/header-video-1170.jpg');
}

headerVideo.addEventListener("click", function(event) {
	headerVideo.setAttribute('controls', true);
})
