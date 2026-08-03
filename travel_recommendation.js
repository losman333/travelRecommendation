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
        const beach = data.beaches.find(item => 
            item.name
            .toLowerCase()
            .includes(input)
        );
        const temple = data.beaches.find(item => 
            item.name
            .toLowerCase()
            .includes(input)
        );
        
        // const temple = data.temples.find(c => c.name.toLowerCase() === input);
            if(["beach", "beaches"].includes(input)) {
                data.beaches.forEach(beach => {
                    resultDiv.innerHTML += `
                        <img src="${beach.imageUrl}" alt="${beach.name}" height="400">
                        <h2>${beach.name}</h2>
                        <p>${beach.description}</p>
                    `;                
                    }); 
            } else if (beach) {
                resultDiv.innerHTML = `
                <img src="${beach.imageUrl}" alt="${beach.name}" height="400">
                <h2>${beach.name}</h2>
                <p>${beach.description}</p>
    `;
            }
            if(["temple", "temples"].includes(input)) {
                data.temples.forEach(temple => {
                    resultDiv.innerHTML += `
                        <img src="${temple.imageUrl}" alt="${temple.name}" height="400">
                        <h2>${temple.name}</h2>
                        <p>${temple.description}</p>
                    `;                
                    }); 
            } else if (temple) {
                resultDiv.innerHTML = `
                <img src="${temple.imageUrl}" alt="${temple.name}" height="400">
                <h2>${temple.name}</h2>
                <p>${temple.description}</p>
    `;
            }



    });
    
     
}

   searchButton.addEventListener('click', searchPlaces);