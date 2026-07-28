
let result = document.getElementById('result');
fetch ('travel_recommendation_api.json')
.then(response => response.json())
.then(data => {
   const data = data.countries  

   /**
    * console.log(Country Name:`${countries.name}`)
 

})