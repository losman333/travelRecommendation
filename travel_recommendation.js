const searchButton = document.getElementById('searchInput');
const results = document.getElementById('search-results');

function searchDestinations() {
    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
}
searchButton.addEventListener('click', searchDestinations);