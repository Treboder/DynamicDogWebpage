document.getElementById("demo").innerHTML = "JavaScript is working!";

function callAPI() {
    // Make an API request
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            // Display the result
            document.getElementById('result').innerHTML = JSON.stringify(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
