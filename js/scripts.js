document.getElementById("loadButton").addEventListener("click", function() {
	//create the request then sets what happens when it changes state
	const xhr = new XMLHttpRequest();
	xhr.open("GET", "https://ozarktechwebdev.com/api/consoles.json");
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			//turn the text into object and gets the array
			const data = JSON.parse(xhr.responseText);
			console.log(data);
			console.log(data.consoles);
			console.log(data.consoles.length);

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
		}
	};
	
	xhr.send();
});