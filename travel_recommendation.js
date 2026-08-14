
const searchButton = document.getElementById('searchButton');

function searchDestinations() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        if(data[input]) {
            data[input].forEach(p => {
                if(input === "countries") {
                    p.cities.forEach(city => {
                        resultDiv.innerHTML += `
                        <h3>${city.name}</h3>
                        <img src="${city.imageUrl}" alt="${city.name} "width="400" >
                        <p>${city.description}</p>
                        `;
                    })
                } else {
                    resultDiv.innerHTML += `
                        <h3>${p.name}</h3>
                        <img src="${p.imageUrl}" alt="${p.description}" width="400px">
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