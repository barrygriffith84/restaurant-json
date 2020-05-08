import apiManagerObject from "./apiManager.js"
import printAllRestaurants from "./domPrinter.js"
import searchEvent from "./eventListeners.js"



//Prints all of the restaurants to the DOM
apiManagerObject.restaurantFetch()
  .then(parsedResponse => {
    printAllRestaurants(parsedResponse)
  })


//Event listener for the search button
document.querySelector("#search-btn").addEventListener("click", searchEvent)




//Event listener for the enter key
document.querySelector('#rest-input').addEventListener('keypress', function (e) {

  //Checks to see if the key pressed is the enter key
  if (e.key === 'Enter') {
    searchEvent();
  }
});


document.querySelector(`#submit-btn`).addEventListener("click", function(){
  const restaurantName = document.querySelector("#restaurant-name").value
  const restaurantURL = document.querySelector("#restaurant-url").value
  const menu = document.querySelector("#restaurant-menu").value
  const userRating = document.querySelector("#restaurant-user-rating").value
  const costPerTwo = document.querySelector("#restaurant-cost-per-two").value
  const restaurantAddress = document.querySelector("#restaurant-address").value

  // console.log(restaurantName, restaurantURL, menu, userRating, costPerTwo, restaurantAddress)

  const restaurantObject = {
    url: restaurantURL,
    menuURL: menu,
    name: restaurantName,
    averageUserRating: userRating,
    averageCostPerTwo: costPerTwo,
    address: restaurantAddress
  }

  fetch("http://localhost:8088/restaurants", { 
  method: "POST",
  headers: {
      "Content-Type": "application/json"
  },
  body: JSON.stringify(restaurantObject)
}).then(() => {
  apiManagerObject.restaurantFetch()
  .then(parsedResponse => {
    printAllRestaurants(parsedResponse)
  })
})

  console.log(restaurantObject)
})

