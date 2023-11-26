// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const list = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" title = '${description}'/>
    </a>
 </li>`
  )
  .join('');
list.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
