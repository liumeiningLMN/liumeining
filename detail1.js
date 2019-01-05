// 获取所需标签
var box5 = document.getElementsByClassName('box5')[0];
var box7 = document.getElementsByClassName('box7')[0];
var box6_Img = document.getElementsByClassName('box6_Img');
var move = document.getElementsByClassName('box5_1')[0];
var sp1 = document.getElementsByClassName('box6_sp1')[0];
var sp2 = document.getElementsByClassName('box6_sp2')[0];
var add = document.getElementsByClassName('box12_3')[0];
var dc = document.getElementsByClassName('box12_1')[0];
var input = document.getElementsByClassName('box12_2')[0];
var rl = document.getElementsByClassName('select_rl')[0];
var one = document.getElementsByClassName('one')[0];
var two = document.getElementsByClassName('two')[0];
var but2 = document.getElementsByClassName('but2')[0];
var box141 = document.getElementsByClassName('box14')[0];
var continuee = document.getElementsByClassName('continue')[0];
var jiesuan = document.getElementsByClassName('jiesuan')[0];
var box15 = document.getElementsByClassName('box15')[0];
var box14 = document.getElementsByClassName('box14')[0];
var close = document.getElementsByClassName('close')[0]
var index = 0;
box6_Img[index].parentNode.style.border = '2px solid #FFA500';
box5.style.background = 'url("任务所需小图/img/pp'+index+'.jpeg")no-repeat';
box5.style.backgroundSize = 'contain';
box5.style.background = 'url("任务所需小图/img/pp'+index+'.jpeg")no-repeat';
box5.style.backgroundSize = 'contain';

for(var i = 0;i<box6_Img.length;i++){
	(function (i){
		box6_Img[i].onmouseover = function (){
			box6_Img[index].parentNode.style.border = 'none';
			index = i;
			box6_Img[index].parentNode.style.border = '2px solid #FFA500';
			box5.style.background = 'url("任务所需小图/img/pp'+index+'.jpeg")no-repeat';
			box5.style.backgroundSize = 'contain';
		}
	}(i))
}
sp1.onclick = function (){
	box6_Img[index].parentNode.style.border = 'none';
	index--;
	if(index<0){
		index=1;
	}
	box6_Img[index].parentNode.style.border = '2px solid #FFA500';
	box5.style.background = 'url("任务所需小图/img/pp'+index+'.jpeg")no-repeat';
	box5.style.backgroundSize = 'contain';
}
sp2.onclick = function (){
	box6_Img[index].parentNode.style.border = 'none';
	index++;
	if(index>1){
		index=0;
	}
	box6_Img[index].parentNode.style.border = '2px solid #FFA500';
	box5.style.background = 'url("任务所需小图/img/pp'+index+'.jpeg")no-repeat';
	box5.style.backgroundSize = 'contain';
}

box5.onmouseover = function (){
	move.style.display = 'inline-block';
	box7.style.display = 'block';
	box7.children[0].src='任务所需小图/img/pp'+index+'.jpeg';
	box5.onmousemove = function (e){
		var e = e||window.event;
		moveLeft = e.clientX - move.offsetWidth*0.5 -box5.offsetParent.offsetLeft-move.offsetParent.offsetLeft;
		moveTop = e.clientY - move.offsetHeight*0.5 - box5.offsetParent.offsetTop-move.offsetParent.offsetTop;
		if(moveLeft<0){
			moveLeft = 0;
		}else if(moveLeft>=box5.offsetWidth-move.offsetWidth){
			moveLeft=box5.offsetWidth-move.offsetWidth;
		}
		if(moveTop<0){
			moveTop = 0;
		}else if(moveTop>=box5.offsetHeight-move.offsetHeight){
			moveTop=box5.offsetHeight-move.offsetHeight;
		}
		move.style.left = moveLeft+'px';
		move.style.top = moveTop+'px';

		box7.children[0].style.left = -moveLeft/(box5.offsetWidth/box7.children[0].offsetWidth)+move.offsetWidth*1.5+'px';
		box7.children[0].style.top = -moveTop/(box5.offsetHeight/box7.children[0].offsetHeight)+move.offsetWidth*1.5+'px';
	}
	
}
box5.onmouseout = function (){
	move.style.display = 'none';
	box7.style.display = 'none';
}
dc.onmouseover = function (){
	if(parseInt(input.value)==1){
		dc.style.cursor = 'not-allowed';
	}else{
		dc.style.cursor = 'pointer';
	}
}
add.onmouseover = function (){
	if(parseInt(input.value)==5){
		add.style.cursor = 'not-allowed';
	}else{
		add.style.cursor = 'pointer';
	}
}
// 商品数目增减部分
add.onclick = function (){
	if(input.value<5){
		input.value=parseInt(input.value)+1;
	}else{
		add.style.cursor = 'not-allowed';
	}
	
}
dc.onclick = function (){
	if(input.value>1){
		input.value=parseInt(input.value)-1;
	}else{
		dc.style.cursor = 'not-allowed';
	}
}
// 显示选中的型号
rl.innerText = '"'+one.innerText+'"';
one.onclick = function (){
	rl.innerText = '"'+one.innerText+'"';
	one.style.background="url('任务所需小图/img/duigou.png')no-repeat";
	one.style.backgroundPosition="57px 17px";
	one.style.border='1px solid #FF1493';
	two.style.background="none";
	two.style.border = 'none';
}
two.onclick = function (){
	rl.innerText = '"'+two.innerText+'"';
	two.style.background="url('任务所需小图/img/duigou.png')no-repeat";
	two.style.backgroundPosition="57px 17px";
	one.style.background="none";
	two.style.border='1px solid #FF1493';
	one.style.border = 'none';
}
// 购物车蒙板效果
but2.onclick = function (){
	box141.style.display = 'block';
	box15.style.display='block'; 
}
// 取消蒙板效果
continuee.onclick = function (){
	box14.style.display = 'none';
	box15.style.display='none';

}
jiesuan.onclick = function (){
	box14.style.display = 'none';
	box15.style.display='none';
}
close.onclick = function (){
	box14.style.display = 'none';
	box15.style.display='none';
}