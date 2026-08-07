
document.getElementById("searchInput");
document.getElementById("searchButton");
document.getElementById("search-results");
"result"
resultDiv.innerHTML = '';


fetch("trave_recommendation_api.json")
.then(response => response.json());
.then(data => {
    destinationInput
    result

    if(destinations) {
        // check to see if search matches the entered input 
         const destination = data.countries.find(item => item.name.toLowerCase.include() === input)

            resultDiv.innerHTML =+ `
            
            ${destination.name}
            ${destination.description}
            
            `
         
    } else {

    }


}) catch(error => {
    "no places found"
})

searchButton.addEventListener();