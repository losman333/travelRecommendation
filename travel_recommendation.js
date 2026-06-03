function searchDestination() {
		const input = document.getElementById('destinationInput').value.toLowerCase();
		const resultDiv = document.getElementById('result');
		resultDiv.innerHTML = '';

		fetch('travel_recommendation_api.json')
		  .then(response => response.json())
		  .then(data => {
			const destination = data.countries.find(item => item.name.toLowerCase() === input);

			if (destination && keyword) {
			  const countries = destination.countries.join(', ');
			  const temples = destination.temples.join(', ');
			  const beaches = destination.beaches.join(', ');

			  resultDiv.innerHTML += `<h2>${countries.name}</h2>`;
			  resultDiv.innerHTML += `<img src="${countries.imagesrc}" alt="hjh">`;

              resultDiv.innerHTML += `<h2>${beaches.name}</h2>`;
			  resultDiv.innerHTML += `<img src="${beaches.imageUrl}" alt="hjh">`;

              resultDiv.innerHTML += `<h2>${temples.name}</h2>`;
			  resultDiv.innerHTML += `<img src="${temples.imagesrc}" alt="hjh">`;

			  resultDiv.innerHTML += `<p><strong>Symptoms:</strong> ${countries}</p>`;
			  resultDiv.innerHTML += `<p><strong>Prevention:</strong> ${beaches}</p>`;
			  resultDiv.innerHTML += `<p><strong>Treatment:</strong> ${temples}</p>`;
			} else {
			  resultDiv.innerHTML = 'Condition not found.';
			}
		  })
		  .catch(error => {
			console.error('Error:', error);
			resultDiv.innerHTML = 'An error occurred while fetching data.';
		  });
	  }
	    btnSearch.addEventListener('click', searchDestination);