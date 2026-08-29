const searchButton = document.getElementById('searchButton');
function searchDestinations() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    const resultDiv = document.getElementById('results');
    resultDiv.innerHTML = '';

    if (input === "country") {
        input = "countries";
    } else if (input === "beach") {
        input = "beaches";
    } else if (input === "temple") {
        input = "temples";
    }
    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        if(data[input]) {
            data[input].forEach(p => {
                if(input === "countries") {
                    p.cities.forEach(city => {
                        resultDiv.innerHTML += `
                        <div class="card">
                            <img src="${city.imageUrl}" alt="${city.name} "width="400" >
                            <h3>${city.name}</h3>
                            <p>${city.description}</p>
                        </div>
                         
                         
                    
            
                    
                      
                        `;
                    })
                } else {
                    resultDiv.innerHTML += `
                    <div class="card">
                         <img src="${p.imageUrl}" alt="${p.description}" width="400px">
                        <h3>${p.name}</h3>
                        <p>${p.description}</P>
                    </div> 
                       
                        `;
                }
            })
        } 
       
    //    if(input === 'beaches' || input === 'BEACHES') {
    //        data.beaches.forEach(p => {
    //             resultDiv.innerHTML += `${p.name} ${p.description}`
    //        })
    //    } else if (input === 'temples' | 'TEMPLES') {
    //         data.temples.forEach(t => {
    //             resultDiv.innerHTML += `${t.name} ${t.description}`
    //         })
    //    }

    });
} 
searchButton.addEventListener('click', searchDestinations);
searchInput.addEventListener('keydown', event => {
    if(event.key ===  `Enter`) {
        searchDestinations();
    }
})

function clearSearch() {
    document.getElementById('searchInput').value = '';
    document.getElementById('result').innerHTML = '';
}

clearButton.addEventListener('click', clearSearch);