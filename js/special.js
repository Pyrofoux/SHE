var special = {};


special.unclick = false;
special.shuffle = function(line,callb)
{
	special.unclick = true;
	var n = line[2]*1,d  = [],t=line[3]*1;
	for(var i=0;i<n;i++)
	{
		d[i] = [draw.button[i].innerHTML,scenar.choice[i]];
	}
	
	var t1 = (new Date).getTime(),t2 = 0;
	function doit()
	{
		if(!special.unclick)return false;
		shuffle(d);
		for(var i in d)
		{
			scenar.butt(i,d[i][0],d[i][1]);
		}
		setTimeout(doit,t);
	}
	doit();
}

special.corcount = 10;
special.corend = function(line,callb)
{
	scenar.choice[0] = special.corcount+"";
	special.corcount++;
	callb();
}