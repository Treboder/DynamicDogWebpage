// js health check
document.getElementById("demo").innerHTML = "Health check says: JavaScript is working!";

// Dog API endpoint (for random dog images)
const apiUrl = 'https://dog.ceo/api/breeds/image/random';

//////////////////////////////////////////////////////////////////////////
// Simple API call returning json response
//////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////
// Show PREDEFINED image from Dog API
//////////////////////////////////////////////////////////////////////////

function displayPredefinedImage() {
    //clearPredefinedImageElement()
    var img = new Image();
    img.src = "https://images.dog.ceo/breeds/setter-irish/n02100877_602.jpg"
    img_home.appendChild(img);
}

function clearPredefinedImageElement() {
    while (img_home.firstChild) {
        img_home.removeChild(img_home.firstChild);
    }
}

//////////////////////////////////////////////////////////////////////////
// Show RANDOM image from Dog API
//////////////////////////////////////////////////////////////////////////

async function displayRandomImage() {
    clearRandomImageElement()
    const imageUrl = await fetchImageUrl();
    if (imageUrl) {
        var img = new Image();
        img.src = imageUrl;
        api_image.appendChild(img);
    } else {
        document.getElementById('api-image').alt = 'Failed to load image from Dog API';
    }
}

function clearRandomImageElement() {
    while (api_image.firstChild) {
        api_image.removeChild(api_image.firstChild);
    }
}

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



