// Shared navigation for home, privacy and contact pages.
const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());
const menu = document.getElementById('menuButton');
const nav = document.getElementById('siteNav');
if (menu && nav) {
  menu.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  }));
}

// Screenshot gallery: filters and accessible large-image viewer.
const shotCards = [...document.querySelectorAll('.shot-card')];
const filterButtons = [...document.querySelectorAll('[data-filter]')];
const galleryButtons = [...document.querySelectorAll('[data-gallery-index]')];
let visibleGalleryButtons = galleryButtons;
filterButtons.forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  filterButtons.forEach(item => {
    const selected = item === button;
    item.classList.toggle('active', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
  shotCards.forEach(card => {card.hidden = filter !== 'all' && card.dataset.category !== filter;});
  visibleGalleryButtons = galleryButtons.filter(item => !item.closest('.shot-card').hidden);
}));

const lightbox = document.getElementById('imageLightbox');
if (lightbox && galleryButtons.length) {
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxCounter = document.getElementById('lightboxCounter');
  let selectedIndex = 0;
  let lastTrigger = null;
  function showSelected() {
    const shot = visibleGalleryButtons[selectedIndex];
    if (!shot) return;
    lightboxImage.src = shot.dataset.image;
    lightboxImage.alt = shot.querySelector('img')?.alt || shot.dataset.title;
    lightboxTitle.textContent = shot.dataset.title;
    lightboxCounter.textContent = `SCREEN ${selectedIndex + 1} / ${visibleGalleryButtons.length}`;
  }
  function advance(delta) {
    selectedIndex = (selectedIndex + delta + visibleGalleryButtons.length) % visibleGalleryButtons.length;
    showSelected();
  }
  galleryButtons.forEach(shot => shot.addEventListener('click', () => {
    lastTrigger = shot;
    selectedIndex = visibleGalleryButtons.indexOf(shot);
    if (selectedIndex < 0) return;
    showSelected();
    if (!lightbox.open) lightbox.showModal();
  }));
  document.getElementById('closeLightbox').addEventListener('click', () => lightbox.close());
  document.getElementById('previousImage').addEventListener('click', () => advance(-1));
  document.getElementById('nextImage').addEventListener('click', () => advance(1));
  lightbox.addEventListener('click', event => {if (event.target === lightbox) lightbox.close();});
  lightbox.addEventListener('close', () => lastTrigger?.focus());
  document.addEventListener('keydown', event => {
    if (!lightbox.open) return;
    if (event.key === 'ArrowLeft') advance(-1);
    if (event.key === 'ArrowRight') advance(1);
  });
  let touchX = null;
  lightboxImage.addEventListener('touchstart', event => {touchX = event.touches[0].clientX;}, {passive:true});
  lightboxImage.addEventListener('touchend', event => {
    if (touchX === null) return;
    const difference = event.changedTouches[0].clientX - touchX;
    if (Math.abs(difference) > 45) advance(difference > 0 ? -1 : 1);
    touchX = null;
  }, {passive:true});
}
