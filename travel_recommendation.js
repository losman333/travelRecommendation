
document.getElementById("searchInput");
document.getElementById("searchButton");
document.getElementById("search-results");
"result"
resultDiv.innerHTML = 


fetch("trave_recommendation_api.json")
.then(response => response.json());
.then(data => {
    destinationInput
    result

    if(destinations) {
        // check to see if search matches the entered input 
         const destination = data( destinations => {
                data.destinations.find(include(input === "destinationInput"))
            })

            resultDiv =+ `
            
            ${destination.name}
            ${destination.description}
            
            `
         
    } else {

    }


}) catch(error => {
    "no places found"
})

searchButton.addEventListener();