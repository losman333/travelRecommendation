
const searchButton = document.getElementById('searchButton');

function searchDestinations() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
       if(input === 'beaches' || input === 'BEACHES') {
           data.beaches.forEach(p => {
                resultDiv.innerHTML += `${p.name} ${p.description}`
           })
       } else if (input === 'temples' | 'TEMPLES') {
            data.temples.forEach(t => {
                resultDiv.innerHTML += `${t.name} ${t.description}`
            })
       }

    });
}
searchButton.addEventListener('click', searchDestinations);