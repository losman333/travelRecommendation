
const searchButton = document.getElementById('searchButton');

function searchDestinations() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
       if( input === 'beaches' || input === 'beaches') {
           data.beaches.forEach(beach => {
                resultDiv.innerHTML += `${beach.name} ${beach.description}`
           })
       }

    });
}
searchButton.addEventListener('click', searchDestinations);