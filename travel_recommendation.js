
let result = document.getElementById('result');
fetch ('travel_recommendation_api.json')
.then(response => response.json())
.then(data => {
   const data = data.countries.find(item => item.name.toLowerCase) === input);  

   /**
    * console.log(Country Name:`${countries.name}`)
 

})