document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img");

    for(const image of images ) {
        fetch("https://picsum.photos/200/300")
        .then(response => {
            image.src = response.url;
        });
    }

})