
let result = document.getElementById('result');
fetch ('travel_recommendation_api.json')
.then(response => response.json())
.then(data => {
   data.countries.forEach(country => {
        country.cities.forEach(city => {
        result.innerHTML += `
        <div class = "container"> 
        <div class="card">
            <img src="${city.imageUrl}" alt="${city.imageUrl}" width="300">
            <h2>${city.name}</h2>
            <h3>${city.description}</h3>
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