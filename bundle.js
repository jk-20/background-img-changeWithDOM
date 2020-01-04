(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){


	var img1 = "url('https://cdn.pixabay.com/photo/2019/12/10/06/39/night-4685147_960_720.jpg')";
	var img2 = "url('https://cdn.pixabay.com/photo/2019/11/27/12/37/autumn-4656877_960_720.jpg')";
	var img3 = "url('https://cdn.pixabay.com/photo/2015/05/31/11/25/desk-791178_960_720.jpg')";
	var img4 = "url('https://cdn.pixabay.com/photo/2019/12/11/17/34/camera-4688838_960_720.jpg')";



	btn1.addEventListener("click",function(){
		document.getElementById("back").style.backgroundImage = img1;
	})
	btn2.addEventListener("click",function(){
		document.getElementById("back").style.backgroundImage =img2;
	})
	btn3.addEventListener("click",function(){
		document.getElementById("back").style.backgroundImage = img3;
	})
	btn4.addEventListener("click",function(){
		document.getElementById("back").style.backgroundImage =img4;
	})
	

},{}]},{},[1]);
