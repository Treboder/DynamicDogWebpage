// js health check
document.getElementById("demo").innerHTML = "Health check says: JavaScript is working!";

const apiUrl = 'https://dog.ceo/api/breeds/image/random';

// call API
function callAPI() {
    // Make an API request
    fetch(apiUrl)
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
function displayPredefinedImage() {
    var img = new Image();
    img.src = "https://images.dog.ceo/breeds/setter-irish/n02100877_602.jpg"
    img_home.appendChild(img);
}

// use url in image tag
async function displayRandomImage() {
    const imageUrl = await fetchImageUrl();
    if (imageUrl) {
        var img = new Image();
        img.src = imageUrl;
        api_image.appendChild(img);
    } else {
        document.getElementById('api-image').alt = 'Failed to load image from Dog API';
    }
}

// get url from API
async function fetchImageUrl() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.message;
    } catch (error) {
        console.error('Failed to call Dog API:', error);
        return null;
    }
}



