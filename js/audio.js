var audio = {},sound = {},songs={};

audio.list = ["bwob","letter","glitch1","glitch2","glitch3","glitch4","glitch5","glitch6","glitch7","wack.wav","blip.wav"];
audio.songs = ["calm","dark","fun","glitch","happy","sympa","sad","chaos"]
audio.init = function(callb)
{
	audio.load(audio.list,function()
	{
		audio.loadsongs(callb);
	});
}

audio.load = function(arr,callb)
{
	for(var i = 0,loads=0;i<arr.length;i++)
	{
		var sfx = new Audio();
		sfx.addEventListener("canplaythrough",loaded,false);
		sfx.preload = "auto";
		ext = (~arr[i].indexOf(".")) ? "": ".mp3";
		sfx.src = "sound/"+arr[i]+ext;
		sound[arr[i].split(".")[0]] = hid.appendChild(sfx);
	}
	
	function loaded()
	{
		loads++
		
		if(loads == arr.length)callb();
	}
}

audio.loadsongs = function(callb)
{
	arr = audio.songs;
	for(var i = 0,loads=0;i<arr.length;i++)
	{
		var sfx = new Audio();
		sfx.addEventListener("canplaythrough",loaded,false);
		sfx.preload = "auto";
		sfx.src = "sound/songs/"+arr[i]+".mp3"
		sfx.loop = true;
		songs[arr[i]] = hid.appendChild(sfx);
		
	}
	
	function loaded()
	{
		loads++
		if(loads == arr.length)callb();
	}
}

songs.last = "";

songs.play = function(name)
{
	if(songs.last != "")
	{
		songs.stop(songs.last)
	}
	songs[name].currentTime = 0;
	songs[name].volume = 1;
	songs[name].play();
	songs.last = name;
}

songs.stop = function()
{
	last = songs[songs.last]
	if(!last)
	{
		return false
	}
	last.pause();
}


songs.fade = function(callb)
{
	last = songs[songs.last]
	
	if(!last)
	{
		callb();
		return false
	}
	
	var steps = 500,i=1;
	function step()
	{
		
		last.volume -= 1/steps;
		i++
		
		
		if(i>=steps)
		{
			last.volume = 0;
			if(callb)
			{
				callb();
			}
		}
		else
		{
			setTimeout(step,1);
		}
	}
	step();
}

songs.fadein = function(name,callb)
{
	var steps = 500,i=1;
	songs.play(name);
	last = songs[songs.last];
	last.volume = 0;
	function step()
	{
		
		last.volume += 1/steps;
		i++
		
		
		if(i>=steps)
		{
			last.volume = 1;
			if(callb)
			{
				callb();
			}
		}
		else
		{
			setTimeout(step,1);
		}
	}
	step();
}
