var xhr = new XMLHttpRequest();
xhr.open('GET', 'menu.json', true);
xhr.onload = function() {
	if (xhr.status === 200) {
		var responseObject = JSON.parse(xhr.responseText);
		var display = '';
		for (var i = 0; i < responseObject.menu.length; i++) {
			display += '<p>Entree: ' + responseObject.menu[i].Entree + '<br>';
			display += 'Price: ' + responseObject.menu[i].Price + '<br>';
			display += 'Description: ' + responseObject.menu[i].Description + '</p>';
			display += '<hr>';
		}
		document.getElementById('content').innerHTML = display;
	}
};
xhr.open('GET', 'menu.json', true);
xhr.send(null);