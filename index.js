// Get references to the dropdown and the image element
const imageSelector = document.getElementById("imageSelector");
const displayedImage = document.getElementById("displayedImage");
const heading = document.getElementById("heading");

// Add an event listener to the dropdown to change the image when an option is selected
imageSelector.addEventListener("change", function () {
    const selectedImage = imageSelector.value; // Get the selected option's value
    if(selectedImage === "image5.png"){
        displayedImage.src = selectedImage;
        heading.textContent = "💕💕Happy Rakshabandhan Kriti💕💕";
    }
    else{
        displayedImage.src = selectedImage;
        heading.textContent = "Heart Beat";
    }
    displayedImage.src = "./images/"+selectedImage; // Change the image source based on the selected option
});
