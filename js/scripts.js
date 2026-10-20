document.getElementById("loadButton").addEventListener("click", function() {
	//create the request then sets what happens when it changes state
	const xhr = new XMLHttpRequest();
	xhr.open("GET", "https://ozarktechwebdev.com/api/consoles.json");
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			//turn the text into object and gets the array
			const data = JSON.parse(xhr.responseText);

			//goes through the consoles and builds one card for each
			for (let i = 0; i < data.consoles.length; i++) {
				const card = document.createElement("div");
				const img = document.createElement("img");
				const name = document.createElement("h2");
				const info = document.createElement("p");

				img.src = data.consoles[i].image;
				img.alt = data.consoles[i].name;

				name.textContent = data.consoles[i].name;
				info.textContent = data.consoles[i].manufacturer + " " + data.consoles[i].year;

				card.appendChild(img);
				card.appendChild(name);
				card.appendChild(info);
				cards.appendChild(card);

			}

			//start with the first console as both oldest and newest
			let oldest = data.consoles[0];
			let newest = data.consoles[0];

			//replace oldest or newest when a console is older or newer
			for (let i = 1; i < data.consoles.length; i++) {
				if (data.consoles[i].year < oldest.year) {
					oldest = data.consoles[i];
				}
				
				if (data.consoles[i].year > newest.year) {
					newest = data.consoles[i];
				}
			}

			summary.textContent = " amount: " + data.consoles.length + " oldest: " + oldest.name + " (" + oldest.year + ") newest: " + newest.name + " (" + newest.year + ")";




		}
	};
	
	xhr.send();
});