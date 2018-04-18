var scenar = {};

scenar.init = function(callb)
{
	scenar.parse();
	callb();
}

scenar.io = {};
scenar.choice = [];
scenar.tempread = "";

scenar.parse = function()
{
	var script = story.split("\n");
	for(var i = 0; i < script.length;i++)
	{
		if(script[i].length && script[i][0] != "#" && script[i][0] != "/")
		{
			scenar.line(script[i]);
		}
	}
}

scenar.line = function(line)
{
	var l = line.split(":");
	if(l[0].trim().toUpperCase() == "SCENE")
	{
		scenar.tempread = l[1].trim().toUpperCase();
		scenar.io[scenar.tempread] = [];
	}
	else
	{
		for(var i = 0;i<l.length;i++)
		{
			l[i] = l[i].trim().replace(new RegExp("_","g")," ");
		}
		scenar.io[scenar.tempread].push(l);
	}
}

scenar.start = function()
{
	scenar.scene("start");
};

scenar.scene = function(label)
{
	draw.hideButton();
	label = label.trim().toUpperCase();
	scenar.choice = [];
	var line = -1;
	function nextline()
	{
		line++
		if(scenar.io[label][line])
		{
			scenar.read(scenar.io[label][line],nextline);
		}
	}
	nextline();
}

scenar.butt = function(id,txt,cons)
	{
		draw.showButton(id,txt);
		scenar.choice[id] = cons;
	}

scenar.press = function(i)
{
	special.unclick = false;
	if(true)//condition au cas où animation
	{
		if(scenar.io[scenar.choice[i]])
		{
			sound["blip"].play();
			scenar.scene(scenar.choice[i]);
		}
	}
}

scenar.read = function(line,callb)
{
	switch(line[0])
	{
		case "SAY":
			// if(typeof line[1] == "undefined")line[1]="               ";
			draw.talk(line[1],callb);
		break;
		case "ADD":
			draw.talk(line[1],callb,true);
		break;
		case "FACE":
			var faces = ["sleep","happy","sad","silent","wink","tear","cry","shocked","furious","mad","tear+furious","sadic"];
			var id = faces.indexOf(line[1]);
			if(id==-1)id=0;
			draw.she(id%4,(id-id%4)/4);
			callb();
		break;
		case "BACK":
			draw.back(line[1]);
			callb();
		break;
		case "WAIT":
			setTimeout(callb,parseFloat(line[1])*1000);
		break;
		case "CHOICE":
			scenar.butt(line[1]-1,line[2],line[3])
			callb();
		break;
		case "CHOICE 1":
			scenar.butt(0,line[1],line[2])
			callb();
		break;
		case "CHOICE 2":
			scenar.butt(1,line[1],line[2])
			callb();
		break;
		case "CHOICE 3":
			scenar.butt(2,line[1],line[2])
			callb();
		break;
		case "CHOICE 4":
			scenar.butt(3,line[1],line[2])
			callb();
		break;
		case "PLAY":
			if(sound[line[1]])sound[line[1]].play();
			callb();
		break;
		case "STOP":
			if(sound[line[1]])sound[line[1]].pause();
			callb();
		break;
		case "GLITCH":
			draw.glitchanim(callb);
			// draw.glitch(line[1]*1,callb);
		break;
		case "UNGLITCH":
			draw.unglitchanim(callb);
		break;
		case "BLACK":
			draw.blackanim(callb);
			// draw.glitch(line[1]*1,callb);
		break;
		case "UNBLACK":
			draw.unblackanim(callb);
		break;
		case "NAME":
			draw.setname(line[1]);
			callb();
		break;
		case "GOTO":
			scenar.scene(line[1]);
		break;
		case "SONG":
			songs.play(line[1]);
			callb();
		break;
		case "SONGSTOP":
			songs.stop();
			callb();
		break;
		case "FADE":
			songs.fade(callb);
		break;
		case "FADEIN":
			songs.fadein(line[1],callb);
		break;
		case "SPECIAL":
			special[line[1]](line,callb);
	}
}

scenar.step = 0;

