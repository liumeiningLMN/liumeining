var img = document.getElementsByClassName('i');
var box9 = document.getElementsByClassName('box9')[0];
var dot=document.getElementsByClassName('box8')[0];
var gg=document.getElementsByClassName('gonggao')[0];
var box1 = document.getElementsByClassName('box1')[0];
var top1 = document.getElementsByClassName('top')[0];
var notic2= document.getElementsByClassName('notic2')[0];
var div = document.getElementsByClassName('movingpicture')[0];
var sel = document.getElementsByTagName('select')[0];
var opt = document.getElementsByTagName('option');
var mon = document.getElementsByClassName('money')[0];
var cha = document.getElementsByClassName('box10')[0];
var ew = document.getElementsByClassName('serwei')[0];
var pic = document.getElementsByClassName('picture');
var boxx = document.getElementsByClassName('box')[0].children[0].children;
var Ilength = 0;


for(var d=0;d<img.length;d++){
	var dot_m = document.createElement('div');
	dot_m.className='dot_m';
	dot_m.innerText = d+1;
	dot.appendChild(dot_m);
}

// 右边悬浮窗

for(var xf = 0; xf<boxx.length; xf++){
	(function (xf){

		boxx[xf].onmouseover = function (){
			buffer(boxx[xf],{right:-20});
			if(xf==2){
				ew.src = '任务所需小图/img/erwei.png';
			}
		}
		boxx[xf].onmouseout = function (){
			buffer(boxx[xf],{right:-95});
			if(xf==2){
				ew.src = '任务所需小图/img/serwei.png';
			}
		}

	}(xf))
}

// 点击跳转
for(pc = 0;pc<pic.length;pc++){
	pic[pc].onclick = function (){
		location.href = 'detail1.html';
	}
}

// 吸顶
window.onscroll = function (){
	if(window.scrollY>=100){
		top1.style.position = 'fixed';
		top1.style.width = '100%';
		box1.style.display = 'block';
	}else if(window.scrollY<100){
		top1.style.position = 'relative';
		top1.style.width = '1180px';
		box1.style.display = 'none';
	}
}

// 监听select值改变

cha.onclick = function (){
	mon.innerText = '¥'+sel.value;
}


// 复制公告栏一份
newli = gg.cloneNode(true);
newli.style.top = '373px';
notic2.appendChild(newli);

var newliUl = document.getElementsByClassName("gonggao")[1];
// 设置公告栏滚动
var timergg;
timergg  = setInterval(function (){
	gg.style.top =parseInt(getCSS(gg,'top'))-5+'px'; 
	newliUl.style.top = parseInt(getCSS(newliUl,'top'))-5+'px';
	if(parseInt(getCSS(gg,'top'))<=-373){
		gg.style.top = '373px';
	}
	if(parseInt(getCSS(newliUl,'top'))<=-373){
		newliUl.style.top = '373px';
	}
},200)
notic2.onmouseover = function (){
	clearInterval(timergg);
}
notic2.onmouseout = function (){
	timergg  = setInterval(function (){
	gg.style.top =parseInt(getCSS(gg,'top'))-5+'px'; 
	newliUl.style.top = parseInt(getCSS(newliUl,'top'))-5+'px';
	if(parseInt(getCSS(gg,'top'))<=-373){
		gg.style.top = '373px';
	}
	if(parseInt(getCSS(newliUl,'top'))<=-373){
		newliUl.style.top = '373px';
	}
},200)
}

var dot_m = document.getElementsByClassName('dot_m');

for(var j = 1;j<img.length;j++){
	img[j].style.left = '730px';
}

clickDot()

// 自动轮播
var timeAuto = setInterval(function (){
	buffer(img[Ilength],{"left":-730})
	Ilength++;
	if(Ilength>=img.length){
		Ilength=0;
	}
	img[Ilength].style.left = '730px';
	buffer(img[Ilength],{"left":0});
	for(var t = 0;t<dot_m.length;t++){
		dot_m[t].id = '';
	}
	dot_m[Ilength].id = 'current';
},3000)

div.onmouseover=function (){
	clearInterval(timeAuto);
	box9.style.display = 'flex';
}

div.onmouseout=function (){
		box9.style.display = 'none';
		timeAuto = setInterval(function (){
		buffer(img[Ilength],{"left":-730})
		Ilength++;
		if(Ilength>=img.length){
			Ilength=0;
		}
		img[Ilength].style.left = '730px';
		buffer(img[Ilength],{"left":0});
		for(var t = 0;t<dot_m.length;t++){
			dot_m[t].id = '';
		}
		dot_m[Ilength].id = 'current';
},3000)
}

function clickDot(){
	for(var i = 0;i<dot_m.length;i++){
	dot_m[Ilength].id = 'current';
	(function (i){
		dot_m[i].onclick = function (){

			if(i>Ilength){
				buffer(img[Ilength],{left:-730});
				Ilength=i;
				if(Ilength>=img.length){
					Ilength = 0;
				}
				img[Ilength].style.left='730px';
			}else if(i<Ilength){
				buffer(img[Ilength],{left:730});
				Ilength=i;
				if(Ilength<0){
					Ilength = img.length-1;
				}
				img[Ilength].style.left='-730px';
			}
			buffer(img[Ilength],{left:0});
			for(var t = 0;t<dot_m.length;t++){
				dot_m[t].id = '';
			}
			dot_m[Ilength].id = 'current';
		}

	}(i))
}
}


// 轮播图左右按钮

box9.children[0].onclick = function (){
	buffer(img[Ilength],{left:730});
	Ilength--;
	if(Ilength<0){
		Ilength = img.length-1;
	}
	img[Ilength].style.left='-730px';
	buffer(img[Ilength],{left:0});
	for(var t = 0;t<dot_m.length;t++){
		dot_m[t].id = '';
	}
	dot_m[Ilength].id = 'current';
}
box9.children[1].onclick = function (){
	buffer(img[Ilength],{left:-730});
	Ilength++;
	if(Ilength>=img.length){
		Ilength = 0;
	}
	img[Ilength].style.left='730px';
	buffer(img[Ilength],{left:0});
	for(var t = 0;t<dot_m.length;t++){
		dot_m[t].id = '';
	}
	dot_m[Ilength].id = 'current';
}

function buffer(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		var flag = true;
		for(var i in json){
			// 透明度
			if(i === 'opacity'){
				var target = parseInt(parseFloat(json[i])*100);
				var loc = parseInt(parseFloat(getCSS(obj,i))*100)||100;
			}else if(i ==='scrollTop'){
				//滑动条
				loc = Math.ceil(obj.scrollTop);
				target = parseInt(json[i]);

			}else{
				var target = json[i];
				var loc = parseInt(getCSS(obj,i))||0;
			}
			var speed = (target-loc)*0.2;
			speed = (target>=loc)?Math.ceil(speed):Math.floor(speed);

			if(i === 'opacity'){
				obj.style.opacity = (loc+speed)/100;
				obj.style.filter="alpha(opacity:"+(loc+speed)+")";
			}else{
				obj.style[i] =loc+speed+'px';
			}
			if(loc!==target){
				flag = false;
			}
		}

		if(flag){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}
	},20);
}

// 获取样式不局限于行内
function getCSS(obj,attr){
	 if(obj.currentStyle){//IE Opera浏览器
		return obj.currentStyle[attr];
	}else{//W3C标准
		return window.getComputedStyle(obj,null)[attr];
	}
}