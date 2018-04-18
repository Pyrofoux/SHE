function qs(s){return document.getElementById(s)};
function dc(s){return document.createElement(s)};
function rand(a,b){return Math.floor(Math.random()*(b-a+1))+a};
function shuffle(r){for(var a=r.length-1;a>0;a--){var f=Math.floor(Math.random()*(a+1)),n=r[a];r[a]=r[f],r[f]=n}return r};
var cvs = qs("cvs"),ctx = cvs.getContext("2d"),hid=qs("hid"),talk=qs("talk"),setname=qs("name"),fam=qs("fam"),intro=qs("intro");

function init()
{
	draw.intro();
	audio.init(function()
	{
		draw.init(function()
		{
			scenar.init(function()
			{
				draw.intro.done = true;
				draw.intro2(function()
				{
					scenar.start();
				});
			});
		});
	});
}