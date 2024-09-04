// js health check
document.getElementById("demo").innerHTML = "Health check says: JavaScript is working!";

// API call
function callAPI() {
    // Make an API request
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            // Display the result
            document.getElementById('result').innerHTML = JSON.stringify(data);
            //document.getElementById('result').innerHTML = JSON.stringify(data.message);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// show predefined image
function addImage() {
    var img = new Image();
    img.src = "https://images.dog.ceo/breeds/setter-irish/n02100877_602.jpg"
    img_home.appendChild(img);
}

// Beispiel-API-Endpunkt
const apiUrl = 'https://dog.ceo/api/breeds/image/random';

// Funktion zum Abrufen des Bild-URLs von der API
async function fetchImageUrl() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        // Nehmen wir an, das Bild-URL ist im Feld 'imageUrl'
        //return JSON.stringify(data.message);
        return data.message;
    } catch (error) {
        console.error('Fehler beim Abrufen des Bild-URLs:', error);
        return null;
    }
}

// Funktion zum Setzen des Bild-URLs in das img-Tag
async function displayImage() {
    const imageUrl = await fetchImageUrl();
    if (imageUrl) {
        var img = new Image();
        //img.src = "https://images.dog.ceo/breeds/setter-irish/n02100877_602.jpg"
        img.src = imageUrl;
        api_image.appendChild(img);
    } else {
        document.getElementById('api-image').alt = 'Bild konnte nicht geladen werden';
    }
}

// Bild anzeigen
displayImage();