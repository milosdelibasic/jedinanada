baguetteBox.run('.gallery', {
  preload: 3,
  overlayBackgroundColor: 'rgba(0,0,0,0.9)',
  async: !0,
  buttons: !0,
});

const galleryNavOne = document.getElementById('gallery-nav-1');
const galleryNavTwo = document.getElementById('gallery-nav-2');
const galleryNavThree = document.getElementById('gallery-nav-3');
const galleryNavFour = document.getElementById('gallery-nav-4');
const galleryNavFive = document.getElementById('gallery-nav-5');
const galleryNavSix = document.getElementById('gallery-nav-6');

const galleryHeading = document.getElementById('gallery-heading');

const galleryFooterHeading = document.getElementById('gallery-footer-heading');
const galleryFooterOne = document.getElementById('gallery-footer-1');
const galleryFooterTwo = document.getElementById('gallery-footer-2');
const galleryFooterThree = document.getElementById('gallery-footer-3');
const galleryFooterFour = document.getElementById('gallery-footer-4');
const galleryFooterFive = document.getElementById('gallery-footer-5');
const galleryFooterSix = document.getElementById('gallery-footer-6');
// const localStorage = window.localStorage;
serbian = document.getElementsByClassName('sr');
hungarian = document.getElementsByClassName('hu');

hungarian[0].addEventListener('click', hungarianLangGallery);
hungarian[1].addEventListener('click', hungarianLangGallery);
serbian[0].addEventListener('click', serbianLangGallery);
serbian[1].addEventListener('click', serbianLangGallery);

if (!localStorage.getItem('lang') || localStorage.getItem('lang') === 'sr') {
  serbianLangGallery();
} else {
  hungarianLangGallery();
}

function serbianLangGallery() {
  localStorage.setItem('lang', 'sr');
  if (serbian[0].classList.contains('lang-active')) return;
  hungarian[0].classList.remove('lang-active');
  hungarian[1].classList.remove('lang-active');
  serbian[0].classList.add('lang-active');
  serbian[1].classList.add('lang-active');
  //SRPSKI
  try {
    galleryNavOne.innerHTML = '<i class="fas fa-home"></i> Početna';
    galleryNavTwo.innerHTML = '<i class="fas fa-id-badge"></i> O Nama';
    galleryNavThree.innerHTML = '<i class="fas fa-hand-holding-usd"></i> Otkup';
    galleryNavFour.innerHTML = '<i class="fas fa-images"></i> Galerija';
    galleryNavFive.innerHTML =
      '<i class="fas fa-recycle"></i> Značaj reciklaže';
    galleryNavSix.innerHTML = '<i class="fas fa-id-card"></i> Kontakt';

    galleryHeading.textContent = 'Galerija';

    galleryFooterHeading.textContent = 'Navigacija';
    galleryFooterOne.textContent = 'Početna';
    galleryFooterTwo.textContent = 'O Nama';
    galleryFooterThree.textContent = 'Otkup';
    galleryFooterFour.textContent = 'Galerija';
    galleryFooterFive.textContent = 'Značaj reciklaže';
    galleryFooterSix.textContent = 'Kontakt';
  } catch (e) {}
}
function hungarianLangGallery() {
  localStorage.setItem('lang', 'hu');
  if (hungarian[0].classList.contains('lang-active')) return;
  hungarian[0].classList.add('lang-active');
  hungarian[1].classList.add('lang-active');
  serbian[0].classList.remove('lang-active');
  serbian[1].classList.remove('lang-active');

  //SECTION PREVOD
  try {
    galleryNavOne.innerHTML = '<i class="fas fa-home"></i> Kezdőlap';
    galleryNavTwo.innerHTML = '<i class="fas fa-id-badge"></i> Rólunk';
    galleryNavThree.innerHTML =
      '<i class="fas fa-hand-holding-usd"></i> Megváltás';
    galleryNavFour.innerHTML = '<i class="fas fa-images"></i> Képgaléria';
    galleryNavFive.innerHTML = '<i class="fas fa-recycle"></i> Újrahasznosítás';
    galleryNavSix.innerHTML = '<i class="fas fa-id-card"></i> Kapcsolat';

    galleryHeading.textContent = 'Képgaléria';

    galleryFooterHeading.textContent = 'Navigáció';
    galleryFooterOne.textContent = 'Kezdőlap';
    galleryFooterTwo.textContent = 'Rólunk';
    galleryFooterThree.textContent = 'Megváltás';
    galleryFooterFour.textContent = 'Képgaléria';
    galleryFooterFive.textContent = 'Újrahasznosítás';
    galleryFooterSix.textContent = 'Kapcsolat';
  } catch (e) {}
}
