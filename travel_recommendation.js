
const searchButton = document.getElementById('searchButton');

function searchDestinations() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
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
                        <img src="${city.imageUrl}" alt="${city.name} "width="400" >
                        <h3>${city.name}</h3>
                        <p>${city.description}</p>
                        `;
                    })
                } else {
                    resultDiv.innerHTML += `
                        <img src="${p.imageUrl}" alt="${p.description}" width="400px">
                        <h3>${p.name}</h3>
                        <p>${p.description}</P>
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