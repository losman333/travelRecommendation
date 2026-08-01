// 
function searchPlaces() {
    const input = document.getElementById("searchInput")
        .value
        .toLowerCase();

    let resultDiv = document.getElementById('result');
    const search = document.getElementById('searchButton');
    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(country => {
                country.cities.forEach(cities => {
                    resultDiv.innerHTML += `${cities.name}`;
                });
                country.temples.forEach(cities => {
                    resultDiv.innerHTML += `${temples.name}`;
                });
            });
        });


}
