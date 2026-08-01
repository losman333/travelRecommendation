let searchButton = document.getElementById("searchButton");
    

function searchPlaces() {

    let resultDiv = document.getElementById('result');
    const input = document.getElementById("searchInput").value.toLowerCase();
    fetch ('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => { 
        const country = data.countries.find(c => c.name.toLowerCase() === input);
        const temple = data.temples.find(c => c.name.toLowerCase() === input);

    if(country || temple) {
      
            country.cities.forEach(cities => {
                resultDiv.innerHTML += `
                <img src="${cities.imageUrl}" alt="${cities.name}" height=400px>
                <h2>${cities.name}</h2>
                <p>${cities.description}</p>
            
                `
                ;
              
            });
   
    }; 

    });
    
     
}

   searchButton.addEventListener('click', searchPlaces);