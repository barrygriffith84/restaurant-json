const buildRestaurantCard = (singleRestaurant) => {
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h4><a href="${singleRestaurant.url}" target="_blank">${singleRestaurant.name}</a></h4>
    <p>Address: ${singleRestaurant.address}</p>
    <p>User Rating: ${singleRestaurant.averageUserRating}</p>
    <p>Average Cost for Two: ${singleRestaurant.averageCostPerTwo}</p>
      <a href="${singleRestaurant.menu_url}" target="_blank" class="btn btn-primary">Menu</a>
    </div>
  </div>`
  }
  
  
  const printAllRestaurants = (restaurantArray) => {
    restaurantArray.forEach((restaurantObjectInLoop) => {
      document.querySelector("#rest-output").innerHTML += buildRestaurantCard(restaurantObjectInLoop);
    })
  }


  export default printAllRestaurants;