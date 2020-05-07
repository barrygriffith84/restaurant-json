const buildRestaurantCard = (singleRestaurant) => {
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h4><a href="${singleRestaurant.restaurant.url}" target="_blank">${singleRestaurant.restaurant.name}</a></h4>
    <p>Address: ${singleRestaurant.restaurant.location.address}</p>
    <p>User Rating: ${singleRestaurant.restaurant.user_rating.aggregate_rating}</p>
    <p>Average Cost for Two: ${singleRestaurant.restaurant.average_cost_for_two}</p>
      <a href="${singleRestaurant.restaurant.menu_url}" target="_blank" class="btn btn-primary">Menu</a>
    </div>
  </div>`
  }
  
  
  const printAllRestaurants = (restaurantArray) => {
    restaurantArray.forEach((restaurantObjectInLoop) => {
      document.querySelector("#rest-output").innerHTML += buildRestaurantCard(restaurantObjectInLoop);
    })
  }


  export default printAllRestaurants;