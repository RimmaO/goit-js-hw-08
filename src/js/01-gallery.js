import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);

const addGalleryMarkup = createGalleryMarkup(galleryItems);
const galleryList = document.querySelector('.gallery');

galleryList.insertAdjacentHTML('beforeend', addGalleryMarkup);
// console.log(galleryList);

function createGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    )
    .join('');
}

//* використовуємо бібліотеку SimpleLightbox (підключена через термінал npm install simplelightbox (package.json -> dep -> "simplelightbox": "^2.13.0"))

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
