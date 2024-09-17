document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".bear");
    for (image of images);
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            image.src = data.message
            images.width = 100;
            images.height = 100;
        })
    
})
