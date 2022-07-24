// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const listEl = document.querySelector('.gallery');

function createGalleryMarkup(array) {
  return array
    .map(
      arr => `<a class="gallery__item" href="${arr.original}"><img class="gallery__image" 
            src="${arr.preview}" alt="${arr.description}" /></a>`
    )
    .join('');
}

listEl.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
console.log(galleryItems);
