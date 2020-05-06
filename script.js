// 4. In your JavaScript file, write a fetch call that fetches the data from your json-server.
// 5. Print the name of each restaurant to the DOM
// 9:13
// We're going to let y'all get started on that and then post instructions for the next part of the exercise in a bit! 
// UI/ UX enhancements before you go on to stretch goals:
// Display the restaurant's address, aggregate user rating, and average cost for in addition to its name
// Make each restaurant's name a hyperlink to their website
// Style each restaurant as a card, and add a card to each button that says "View Menu". This button should be a hyperlink to the restaurant's menu.
// Stretch Goal 1:
// Add a search bar and button to your app. When the user enters a series of letters into the search bar and presses the "search" button, print all of the restaurants whose name includes the string that the user entered. json-server has built in search functionality-- take some time to read the docs before you attempt this.
// Stretch Goal 2:
// Refactor your search bar so that the user can press the "Enter" key and see the same results as if they hit the search button.
// If you get done with all this, we have additional stretch goals for you-- feel free to slack us if you're interested in an extra challenge (edited) 


//Event listener for the search button
document.querySelector("#search-btn").addEventListener("click", function () {

  //Injects an empty string where I want to output my results to clear any search results that are currently on the page
  document.querySelector("#rest-output").innerHTML = ""

  //Function to print the search results as cards
  print()
})




//Event listener for the enter key
document.querySelector('#rest-input').addEventListener('keypress', function (e) {
  
  //Checks to see if the key pressed is the enter key
  if (e.key === 'Enter') {

    //Injects an empty string where I want to output my results to clear any search results that are currently on the page
    document.querySelector("#rest-output").innerHTML = ""

    //Function to print the search results as cards
    print()
  }
});




//Function that takes the input the user is wanting to search and stores it in the searchTerm variable, then uses a fetch statement and foreach loop to print the results as cards.
let print = function () {

  //Variable to store the string that the user wants to search for
  let searchTerm = document.querySelector("#search-input").value

  //Fetches the results based on the searchTerm and prints the results as cards
  fetch("http://localhost:8088/restaurants?q=" + searchTerm)
    .then(response => response.json())
    .then(parsedResponse => {
      parsedResponse.forEach(establishment => {
        document.querySelector("#rest-output").innerHTML += `      
      <div class="card" style="width: 18rem;">
      <div class="card-body">
      <h4><a href="${establishment.restaurant.url}" target="_blank">${establishment.restaurant.name}</a></h4>
      <p>Address: ${establishment.restaurant.location.address}</p>
      <p>User Rating: ${establishment.restaurant.user_rating.aggregate_rating}</p>
      <p>Average Cost for Two: ${establishment.restaurant.average_cost_for_two}</p>
        <a href="${establishment.restaurant.menu_url}" target="_blank" class="btn btn-primary">Menu</a>
      </div>
    </div>`
      })

    })
}