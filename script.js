// 4. In your JavaScript file, write a fetch call that fetches the data from your json-server.
// 5. Print the name of each restaurant to the DOM
// 9:13
// We're going to let y'all get started on that and then post instructions for the next part of the exercise in a bit! 


fetch("http://localhost:8088/restaurants")
.then(response => response.json())
.then(parsedResponse => {
    // console.log(parsedResponse)
    parsedResponse.forEach(establishment => {
        console.log(establishment)
        document.querySelector("body").innerHTML += `<p>${establishment.restaurant.name}</p>` 
    });
})