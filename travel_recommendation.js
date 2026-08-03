let searchButton = document.getElementById("searchButton");
    

function searchPlaces() {

    let resultDiv = document.getElementById('result');
    const input = document.getElementById("searchInput")
    .value
    .trim()
    .toLowerCase();

    resultDiv.innerHTML = "";

    fetch ('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => { 
        const beaches = data.beaches.find(item => 
            item.name.toLowerCase().includes(input)
        );
        // const temple = data.temples.find(c => c.name.toLowerCase() === input);

    if(beaches) {
      
            
                resultDiv.innerHTML += `
                <img src="${beaches.imageUrl}" alt="${beaches.name}" height=400px>
                <h2>${beaches.name}</h2>
                <p>${beaches.description}</p>
            
                `
                ;
              
           
   
    }; 

    });
    
     
}

   searchButton.addEventListener('click', searchPlaces);