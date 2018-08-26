//window.onload表示加载完后html页面后再执行其中的代码
window.onload=function(){
	var music=document.getElementById("music");
	var audio=document.getElementsByTagName("audio")[0];

	var page1=document.getElementById("page1");
	var page2=document.getElementById("page2");
	var page3=document.getElementById("page3");

	//控制音乐播放和暂停
	music.onclick=function(){
		if(audio.paused){
			audio.play();
			this.setAttribute("class","play");		//音乐停止，碟片位置回到初始

			//以下的方法能够保持音乐停止时碟片停留在停止瞬间的位置，但是兼容性较差
			//this.style.webkitAnimationPlayState="running";
			//this.style.animationPlayState="running";
		}else{
			audio.pause();
			this.setAttribute("class","");
			
			//this.style.webkitAnimationPlayState="paused";
			//this.style.animationPlayState="paused";
		}
	};

	//页面的切换
	page1.addEventListener("touchstart",function(event){
		page1.style.display="none";
		page2.style.display="block";
		page3.style.display="block";
		page3.style.top="100%";

		setTimeout(function(){
			page2.setAttribute("class","page fadeout");
			page3.setAttribute("class","page fadein");
		},6000);
	},false);
};
