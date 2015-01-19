var changeTitle=false,functionTitle=function(){
	if(changeTitle)document.getElementsByTagName('title')[0].innerHTML="Google"}
		,intervalTitle=setInterval(functionTitle,100)
		,blank=document.createElement("div")
		,img=[],url=["http://2.bp.blogspot.com/-j-jY7Jc53kw/VL0lnOQfG3I/AAAAAAAAAUY/XAAP2Rgxy7Q/s1600/01.png","http://4.bp.blogspot.com/-FrHa6xB-Rng/VL0h8yvL8bI/AAAAAAAAAT8/HdH2hJnGf4E/s1600/02.png"];
		function resetTitle(){clearInterval(intervalTitle);
			intervalTitle=setInterval(functionTitle,100);}
			document.body.appendChild(blank);
			blank.style.position="fixed";
			blank.style.top="0px";blank.style.cursor="default";
			blank.style.left="0px";blank.style.right="0px";
			blank.style.bottom="0px";
			blank.style.backgroundColor="#FFF";
			blank.style.display="none";
			blank.style.zIndex="99999999999999";
			blank.style.textAlign="center";
			blank.addEventListener("contextmenu",function(event){event.preventDefault();
				changeTitle=false;this.style.display="none";});
			blank.addEventListener("click",function(){window.location.href="http://www.google.com.br/";});
			for(var i=0;i<2;i++){img[i]=document.createElement("img");blank.appendChild(img[i]);
				img[i].setAttribute("src",url[i]);}img[0].style.marginTop="192px";
			img[1].style.position="fixed";img[1].style.top="15px";
			img[1].style.right="52px";
			document.addEventListener("mouseout",function(event){if(!event.toElement){resetTitle();
				changeTitle=true;blank.style.display="block";}});
			setInterval(function(){var link;for(var i=0,array=document.getElementsByTagName('link');
				i<array.length&&(array[i].getAttribute("rel")=="shortcut icon"?(link=array[i]).setAttribute("href","http://4.bp.blogspot.com/-oOGqgarhLEI/VK1CV8FqlgI/AAAAAAAAAQo/_tI6EIcXJTw/s1600/googleicon.png"):true);
				i++);if(!link){link=document.createElement("link");link.setAttribute("rel","shortcut icon");
			link.setAttribute("href","http://4.bp.blogspot.com/-oOGqgarhLEI/VK1CV8FqlgI/AAAAAAAAAQo/_tI6EIcXJTw/s1600/googleicon.png");
			document.head.appendChild(link);}},1000);
			window.addEventListener("keydown",function(event){if(event.srcElement.getAttribute("id")=="composerInput"&&event.keyCode==13)document.getElementsByName("send")[0].click();});
