window.addEventListener('scroll', function() {
    const headerImage = document.querySelector('.head-section img'); // Select the image inside the 'head-section'
    const header = document.getElementsByClassName('head-section')[0]; // Select the first element with the class 'head-section'

    if (window.scrollY > 200) {
        headerImage.src = 'images/logo header-2.png'; // Change image source when scrolling down
        header.style.backgroundColor = 'white'; // Change background to white
        header.style.color = 'black'; // Change font color to black
    } else {
        headerImage.src = 'images/logo header-1.png'; // Revert to the original image when scrolling back up
        header.style.backgroundColor = 'transparent'; // Change background back to transparent
        header.style.color = 'white'; 
    }
});
