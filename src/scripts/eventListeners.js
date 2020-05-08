import apiManagerObject from "./apiManager.js"
import printAllRestaurants from "./domPrinter.js"

const searchEvent = () => {
    //Variable to store the string that the user wants to search for
    const searchTerm = document.querySelector("#search-input").value

    //Injects an empty string where I want to output my results to clear any search results that are currently on the page
    document.querySelector("#rest-output").innerHTML = ""

    //Function to print the search results as cards
    apiManagerObject.restaurantSearchFetch(searchTerm).then(parsedResponse => {
        printAllRestaurants(parsedResponse)
    })

}



export default searchEvent;