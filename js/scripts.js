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
		}
	};
	xhr.send();
});