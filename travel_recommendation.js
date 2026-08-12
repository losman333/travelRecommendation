const searchButton = document.getElementById('searchInput');
const results = document.getElementById('search-results');

function searchDestinations() {
    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        const result = data.filter("beaches");
        for(result in results) {
            '${result.name}'
        }
    })
}
searchButton.addEventListener('click', searchDestinations);