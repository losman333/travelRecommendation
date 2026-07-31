let searchButton = document.getElementById("searchButton");
    

function searchPlaces() {

    let resultDiv = document.getElementById('result');
    const input = document.getElementById("searchInput").value.toLowerCase();
    fetch ('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => { 
        const country = data.countries.find(c => c.name.toLowerCase() === input);

    if(country) {
      
            country.cities.forEach(cities => {
                resultDiv.innerHTML += `${cities.imageUrl}`;
                resultDiv.innerHTML += `${cities.name}`;
                resultDiv.innerHTML += `${cities.name}`;
            });
   
    };

    });
    
     
}

   searchButton.addEventListener('click', searchPlaces);