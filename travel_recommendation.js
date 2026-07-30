
let result = document.getElementById('result');
fetch ('travel_recommendation_api.json')
.then(response => response.json())
.then(data => {
   data.countries.forEach(country => {
        country.cities.forEach(city => {
        result.innerHTML += `
        <div class = "container"> 
            <div class="card">
                <h3>${city.imageURL}</h3>
                <h2>${city.name}</h2>
                <img src="${city.description}" alt="${city.name}" width="300">
            </div>
        </div>    
        `
        ;
        });

   });
        
    
// {country.name}

    // console.log(Country Name:`${countries.name}`)
 
})
// 