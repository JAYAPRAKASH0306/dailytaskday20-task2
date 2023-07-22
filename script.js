const dogImage = document.getElementById('dogImage');
const getRandomDogBtn = document.getElementById('getRandomDog');

const getRandomDogImage = async () => {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        return data.message;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

const displayRandomDogImage = async () => {
    const imageUrl = await getRandomDogImage();
    if (imageUrl) {
        dogImage.src = imageUrl;
    } else {
        dogImage.src = 'placeholder.jpg'; // Display a placeholder image in case of an error
    }
};

getRandomDogBtn.addEventListener('click', displayRandomDogImage);

// Display a random dog image on page load
displayRandomDogImage();
