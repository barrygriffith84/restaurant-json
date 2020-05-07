const apiManager = {
    //Fetches all of the restaurants from the API
    restaurantFetch: () => {
        return fetch("http://localhost:8088/restaurants")
            .then(response => response.json())
            
    },

    //Takes the input the user is wanting to search and stores it in the searchTerm variable, then uses a fetch statement and foreach loop to print the results as cards.
    restaurantSearchFetch: (searchTerm) => {
        

        //Fetches the results based on the searchTerm and prints the results as cards
        return fetch("http://localhost:8088/restaurants?q=" + searchTerm)
            .then(response => response.json())         
    }
}

export default apiManager;