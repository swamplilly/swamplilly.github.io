window.onload = function()
{
	function getRandomColor()
	{
		var letters = '0123456789ABCDEF'.split('');
		var color = '#';
		for (var i = 0; i < 6; i++)
		{
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	function randomizeBGColor()
	{
		document.getElementById("bg").style.backgroundColor=getRandomColor();
	}

	function randomizeFontColor()
	{
		document.getElementById("t1").style.color=getRandomColor();
	}

	function waitForIt()
	{
		var a = document.getElementById("geotest");
		a.innerHTML = "Wait for it...";
	}

	function toggleKitty()
	{
		var kitties = 'abdef'.split('');
		var pickone = "url(" + kitties[Math.floor(Math.random() * kitties.length)] + ".png)";
		document.getElementById("sideB").style.background=pickone;
	}

	function togglePuppy()
	{
		var puppies = '12456'.split('');
		var pickone = "url(" + puppies[Math.floor(Math.random() * puppies.length)] + ".png)";
		document.getElementById("sideA").style.background=pickone;
	}

	function niceThings()
	{
		var p = document.getElementById("#zipcode").value;
		var compliments = [
			"Of all the blessings bestowed upon this world, " + p + " is the most wonderful.",
			p + "...<br>What a beautiful name!",
			p + " has the biggest heart, and the brightest mind.",
			"I believe in you, " + p + "! Keep on doing your best!",
			"There isn't a star in the world that shine's brighter than " + p + "'s smile.",
			"You've come so far, " + p + "! Don't ever forget the progress you made.",
			p + " is an amazing friend, a hard worker, and a genuine person.",
			"You're doing great, " + p + "! I'm so proud of you.",
			"I'm so glad I met you, " + p + ". You're an amazing person.",
			p + "'s laugh can brighten up an entire room!",
			p + ", you are so kind and generous. I know you'll go far in life!",
			"It's not a party until " + p + " is here!",
			"You've been working so hard, " + p + "! Don't be so tough on yourself.",
			"I've never had any doubt in you, " + p + ". I always knew you could do it!",
			p + ", you deserve the best this world has to offer. Don't ever forget that.",
			p + " is my favorite person!",
			"You are doing so great today, " + p + ", keep up the good work!",
			"There is not a force in this world that can match " + p + "'s kindness.",
			p + ", your hard work never goes unnoticed. I appreciate you!",
			"I wish we spent more time together, " + p + ". You are such good company.",
			"There's no where in the world I'd rather be than by your side, " + p + ".",
			"Have you seen " + p + "'s smile lately? Beautiful!",
			p + ", all you need to do is believe in yourself! You'll never stop growing.",
			"I can't believe how strong you've been, " + p +". You inspire me!",
			"I never felt so lucky until I met you, " + p + ".",
			"It's always so great to see you, " + p + "! I'm glad you're here.",
			"I hope you find everything you're looking for, " + p + "! You deserve the best.",
			p + ", you are so capable! Keep pushing forward. I know you can do it.",
			"I know everything will work out in the end, " + p + ". Don't worry!",
			"I admire everything you've done so far, " + p + ". Don't ever stop!",
			"You make me smile, " + p + "!",
			"Remember to stay positive, " + p + "! Work hard, do your best, and make it happen!"
		];

		var x = document.getElementById("geotest");
		x.innerHTML = compliments[Math.floor(Math.random() * compliments.length)];
		x.style.textAlign = "center";
		x.style.verticalAlign = "middle";
	}

	document.getElementById("#zipcode").onkeypress = function(e)
	{
		if (!e) e = window.event;
		var keyCode = e.keyCode || e.which;
		if (keyCode == '13')
		{
			randomizeBGColor();
			randomizeFontColor();
			toggleKitty();
			togglePuppy();
			niceThings();
		}
	}
}

