import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const ulEl = document.querySelector('.gallery');




function createGalleryMurkup (items ){
    return items
    .map((item) =>`
    <li>
        <a class="gallery__item" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" 
            alt="${item.description}" />
        </a>
    </li>`
  )
  .join("");
};

const imgEl = document.querySelector('.gallery__image');


const addGalleryMurkup = createGalleryMurkup(galleryItems);

ulEl.innerHTML = addGalleryMurkup;


new SimpleLightbox(".gallery a", {
    captionSelector: 'img',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    scrollZoom: false,
   });