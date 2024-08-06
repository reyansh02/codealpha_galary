document.addEventListener('DOMContentLoaded', () => {
    const images = [
        { src: 'https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&w=600', title: 'Lion' },
        { src: 'https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&w=600', title: 'Scarlet Honeyeater' },
        { src: 'https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Crowned Crane' },
        { src: 'https://images.pexels.com/photos/53581/bald-eagles-bald-eagle-bird-of-prey-adler-53581.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Eagle' },
        { src: 'https://images.pexels.com/photos/302304/pexels-photo-302304.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Tiger' },
        { src: 'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Elephant' },
        { src: 'https://images.pexels.com/photos/535431/pexels-photo-535431.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Deer' },
        { src: 'https://images.pexels.com/photos/34098/south-africa-hluhluwe-giraffes-pattern.jpg?auto=compress&cs=tinysrgb&w=600', title: 'Giraffe' },
        { src: 'https://images.pexels.com/photos/33287/dog-viszla-close.jpg?auto=compress&cs=tinysrgb&w=600', title: 'Dog' },
        
        // Add more images as needed
    ];

    const galleryContainer = document.getElementById('galleryContainer');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const closeBtn = document.querySelector('.close');
    const searchBar = document.getElementById('searchBar');

    function displayImages(imageArray) {
        galleryContainer.innerHTML = '';
        imageArray.forEach((image, index) => {
            const imgElement = document.createElement('img');
            imgElement.src = image.src;
            imgElement.alt = image.title;
            imgElement.dataset.index = index;
            galleryContainer.appendChild(imgElement);
        });
    }

    function showLightbox(imageSrc) {
        lightbox.style.display = 'block';
        lightboxImage.src = imageSrc;
    }

    galleryContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            showLightbox(e.target.src);
        }
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    searchBar.addEventListener('input', () => {
        const query = searchBar.value.toLowerCase();
        const filteredImages = images.filter(image => {
            return image.title.toLowerCase().includes(query);
        });
        displayImages(filteredImages);
    });

    // Initial image display
    displayImages(images);
});
