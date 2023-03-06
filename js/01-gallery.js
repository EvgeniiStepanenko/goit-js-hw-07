import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divEl = document.querySelector('.gallery');




function createGalleryMurkup (items ){
    return items
    .map((item) =>`<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>`
  )
  .join("");
};

const addGalleryMurkup = createGalleryMurkup(galleryItems);

divEl.innerHTML = addGalleryMurkup;

divEl.addEventListener('click', onPictureClick);

function onPictureClick(event) {
    event.preventDefault();


    if(event.target.nodeName !== "IMG"){
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)

instance.show()

divEl.addEventListener('keydown', (event) => {
    if (event.code === "Escape" ){
        instance.close();
    }
});


}