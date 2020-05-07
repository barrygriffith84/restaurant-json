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



