var draw = {},sprite={};

draw.imgs = ["head","suit","class","home","street","corridor","school","roof","title","black","end"];
draw.button = [];
draw.init = function(callb)
{
	cvs.width = 400;
	cvs.height = 240;
	draw.setname("LOL");
	draw.setname("");
	draw.load(draw.imgs,callb);
}

draw.load = function(arr,callb)
{
	for(var i=0;i<4;i++)
	{
		draw.button[i] = qs("choice"+i);
		draw.button[i].data = i;
		draw.button[i].addEventListener("click",function()
		{
			scenar.press(this.data);
		});
	}
	
	for(var i = 0,loads=0;i<arr.length;i++)
	{
		var img = dc("img");
		img.addEventListener("load",loaded,false);
		img.src = "img/"+arr[i]+".png"
		sprite[arr[i]] = hid.appendChild(img);
	}
	
	function loaded()
	{
		loads++
		
		if(loads == arr.length)callb();
	}
}

draw.she = function(x,y)
{
	var w = sprite.head.width/4, h = sprite.head.height/3, w2=sprite.suit.width ,h2=sprite.suit.height,c1 = 5, c2 = 3;
	ctx.drawImage(sprite.head,x*w,y*h,w,h,(cvs.width-w)/2,cvs.height-h2-5*c2-23*c2+1,w,h);
	ctx.drawImage(sprite.suit,0,0,w2,h2,Math.floor((cvs.width-w2)/2),cvs.height-h2-5*c2,w2,h2);
	
}

draw.back = function(id)
{
	ctx.drawImage(sprite[id],0,0);
}

draw.talk = function(txt,callb,add)
{
	var i = 0,delta = 50;
	if(!add)talk.innerHTML = "";
	function letter()
	{
		talk.innerHTML += txt[i]||"";
		if(~"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(txt[i]))
		{
			sound.letter.play();
		}
		i++
		if(i>=txt.length)
		{
			if(callb)callb();
		}
		else
		{
			setTimeout(letter,delta);
		}
	}
	letter();
}

draw.setname = function(txt)
{
	if(txt == "")
	{
		setname.style.visibility = "hidden";
	}
	else
	{
		setname.style.visibility = "visible";
		setname.innerHTML = txt;
	}
}

draw.glitchanim = function(callb)
{
	var i=0,limit=25,delta = 10;
	function step()
	{
		draw.glitch(rand(1,4));
		i++
		if(i>=limit)
		{
			if(callb)callb();
		}
		else
		{
			if(i==Math.round(limit/2))
			{
				sound["glitch"+rand(1,7)].play();
			}
			setTimeout(step,delta);
		}
	}
	step();
}

draw.blackanim = function(callb)
{
	var i=0,limit=50,delta = 10;
	ctx.globalAlpha = 0.2;
	ctx.fillStyle = "black";
	function step()
	{
		ctx.fillRect(0,0,cvs.width,cvs.height);
		i++
		if(i>=limit)
		{
			if(callb)
			{
				ctx.globalAlpha = 1;
				callb();
			}
		}
		else
		{
			setTimeout(step,delta);
		}
	}
	step();
}

draw.glitch = function(id,callb)
{
	var image = ctx.getImageData(0,0,cvs.width,cvs.height),
	ref=image.data.slice(0),
	data = image.data;
	switch(id)
	{
		case 1: // Color alteration
		var r1 = rand(1,3), r2 = rand(0,255), yw = rand(cvs.height/8,cvs.height), xw = rand(cvs.width/2,cvs.width), z = rand(0,data.length-xw*yw);
		for(var y = 0;y<yw;y++)
		{
			for(var x = 0; x < xw;x++)
			{
				data[y*cvs.width+x*4+z] = r2;
				// for(var i=0;i<data.length;i+=4+r1)
				// {
					// data[i] = r2;
				// }
			}
		}
		break;
		
		case 2: // Lines
		var r1 = rand(1,3), r2 = rand(0,255),w = rand(0,data.length/8);
		for(var i=rand(0,data.length-w);i<data.length-w;i+=4+r1)
		{
			data[i] = r2;
		}
		break;
		
		case 3 : // NOISE BAND
		// for(var j = 0; j < 10; j++)
		// {
			var s = rand(0,data.length), m = (data.length-s)/16,mot = [];
			for(var k = 0; k< rand(2,255);k++)
			{
				mot[k] = rand(0,255);
			}
			
			for(var i=s;i<s+m;i++)
			{
				data[i] = mot[i%mot.length];
			}
		// }
		break;
		
		case 4: //SCRATCH
		// for(var i=0;i<5;i++)
		// {
			var r1 = rand(0,data.length);
			data.copyWithin(rand(0,data.length),r1,r1+rand(0,data.length/3))
		// }
		break;
		

	}
	ctx.putImageData(image,0,0);
	if(callb)callb();
}

draw.unglitchanim = function(callb)// j'aurais préféré "glitch unanime"
{
	var ref = dc("canvas");
	ref.width = cvs.width,ref.height=cvs.height;
	ref.getContext("2d").drawImage(cvs,0,0);
	
	var i=0,limit=20,delta = 10;
	function step()
	{
		ctx.drawImage(ref,0,0);
		for(var j = 0; j<limit-i;j++)
		{
			draw.glitch(rand(1,4));
		}
		i++
		if(i>=limit)
		{
			ctx.drawImage(ref,0,0);
			if(callb)callb();
		}
		else
		{
			if(i==Math.round(limit/2))
			{
				sound["glitch"+rand(1,7)].play();
			}
			setTimeout(step,delta);
		}
	}
	step();
}


draw.unblackanim = function(callb)
{
	var ref = dc("canvas");
	ref.width = cvs.width,ref.height=cvs.height;
	ref.getContext("2d").drawImage(cvs,0,0);
	
	
	ctx.fillStyle = "black";
	var i=0,limit=50,delta = 10;
	function step()
	{
		ctx.globalAlpha = 1;
		ctx.drawImage(ref,0,0);
		ctx.globalAlpha = 1-i/limit;
		ctx.fillRect(0,0,cvs.width,cvs.height);
		i++
		if(i>=limit)
		{
			ctx.globalAlpha = 1;
			ctx.drawImage(ref,0,0);
			if(callb)callb();
		}
		else
		{
			setTimeout(step,delta);
		}
	}
	step();
}

draw.hideButton = function()
{
	for(var i in draw.button)
	{
		draw.button[i].style.display = "none";
	}
}

draw.showButton = function(i,txt)
{
	draw.button[i].style.display = "block";
	draw.button[i].innerHTML = txt;
}


draw.intro = function()
{
	step = function()
	{
		if(draw.intro.i<99 && rand(0,1))
		{
			draw.intro.i++;
			intro.innerHTML="LOADING...<br/> "+draw.intro.i+"%";
		}
		if(!draw.intro.done)setTimeout(step,40);
	}
	
	step();
}

draw.intro2 = function(callb)
{
	var str = "100";
	step = function()
	{
		if(str.length<=14*40)
		{
			str+=rand(0,1)+"";
			intro.innerHTML="LOADING...<br/> "+str+"%";
			setTimeout(step,10);
		}
		else
		{
			draw.fadeout(intro,function()
			{
				// alert("yo")
				intro.style.display = "none";
				fam.style.display = "block";
				draw.fadein(fam,callb);
			})
		}
	}
	
	step();
}

draw.intro.i = 0;
draw.intro.done = false;

draw.fadeout = function(el,callb)
{
	el.style.opacity = 1;
	del = 20;
	step = function()
	{
		if(el.style.opacity>0)
		{
			el.style.opacity = el.style.opacity*1-1/del;
			setTimeout(step,del);
		}
		else
		{
			if(callb)callb();
		}
	}
	step();
}

draw.fadein = function(el,callb)
{
	el.style.opacity = 0;
	del = 20;
	step = function()
	{
		if(el.style.opacity<1)
		{
			el.style.opacity = el.style.opacity*1+1/del;
			setTimeout(step,del);
		}
		else
		{
			if(callb)callb();
		}
	}
	step();
}












