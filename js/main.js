'use strict';
//SECTION Carousel init
$('.carousel').slick({
  infinite: true,
  autoplay: true,
  pauseOnHover: true,
  autoplaySpeed: 2500,
  dots: true,
  speed: 600,
  variableWidth: true,
  lazyLoad: 'proggresive',
  slidesToShow: 1,
  slidesToScroll: 1,
});

//SECTION Navigation
/* Navigation */
const navMob = document.getElementById('navigation-mobile');
const navigation = document.getElementById('navigation');
const navItems = document.getElementsByClassName('navigation-list-item');
const main = document.getElementById('site-content');
const body = document.querySelector('body');

function disable() {
  navigation.style.transform = 'translateX(100%)';
  navigation.style.opacity = 0;
  main.style.filter = 'blur(0)';
  enableScroll();
}

function toggle() {
  if (navMob.classList.contains('navigation-mobile-open')) {
    navigation.style.transform = 'translateX(0)';
    navigation.style.opacity = 1;
    main.style.filter = 'blur(10px)';
    main.addEventListener('click', () => {
      navMob.classList.remove('navigation-mobile-open');
      disable();
    });

    disableScroll();
  } else {
    disable();
  }
}

navMob.addEventListener('click', () => {
  navMob.classList.toggle('navigation-mobile-open');
  toggle();
});

Object.keys(navItems).forEach(key => {
  navItems[key].addEventListener('click', () => {
    if (navMob.classList.contains('navigation-mobile-open')) {
      navMob.classList.remove('navigation-mobile-open');
      toggle();
    }
  });
});

//SECTION Disable Scrolling

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = { 37: 1, 38: 1, 39: 1, 40: 1, 32: 1, 33: 1, 34: 1, 35: 1, 36: 1 };

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener(
    'test',
    null,
    Object.defineProperty({}, 'passive', {
      get: function () {
        supportsPassive = true;
      },
    })
  );
} catch (e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent =
  'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

//SECTION Language
///SELECTIONS
const navHome = document.getElementById('navigation-home');
const navAbout = document.getElementById('navigation-about');
const navShop = document.getElementById('navigation-shop');
const navGallery = document.getElementById('navigation-gallery');
const navRecycling = document.getElementById('navigation-recycling');
const navContact = document.getElementById('navigation-contact');

const carouselAbout = document.getElementById('lang-carousel-about');
const carouselAboutP = document.getElementById('lang-carousel-about-p');
const carouselAboutBtn = document.getElementById('lang-carousel-about-btn');
const carouselShop = document.getElementById('lang-carousel-shop');
const carouselShopP = document.getElementById('lang-carousel-shop-p');
const carouselShopBtn = document.getElementById('lang-carousel-shop-btn');
const carouselGallery = document.getElementById('lang-carousel-gallery');
const carouselGalleryP = document.getElementById('lang-carousel-gallery-p');
const carouselGalleryBtn = document.getElementById('lang-carousel-gallery-btn');
const carouselContact = document.getElementById('lang-carousel-contact');
const carouselContactP = document.getElementById('lang-carousel-contact-p');
const carouselContactBtn = document.getElementById('lang-carousel-contact-btn');

const aboutHeading = document.getElementById('lang-about');
const aboutOne = document.getElementById('lang-about-1');
const aboutTwo = document.getElementById('lang-about-2');
const aboutThree = document.getElementById('lang-about-3');
const aboutFour = document.getElementById('lang-about-4');
const aboutFive = document.getElementById('lang-about-5');
const aboutSix = document.getElementById('lang-about-6');
const aboutSeven = document.getElementById('lang-about-7');
const aboutEight = document.getElementById('lang-about-8');
const aboutBtn = document.getElementById('lang-about-btn');

const shopHeading = document.getElementById('lang-shop');
const shopText = document.getElementById('lang-shop-text');
const shopPlastic = document.getElementById('lang-shop-plastic');
const shopPlasticOne = document.getElementById('lang-shop-plastic-1');
const shopPlasticTwo = document.getElementById('lang-shop-plastic-2');
const shopPlasticThree = document.getElementById('lang-shop-plastic-3');
const shopPlasticFour = document.getElementById('lang-shop-plastic-4');
const shopPlasticFive = document.getElementById('lang-shop-plastic-5');
const shopPlasticSix = document.getElementById('lang-shop-plastic-6');

const shopMetal = document.getElementById('lang-shop-metal');
const shopMetalOne = document.getElementById('lang-shop-metal-1');
const shopMetalTwo = document.getElementById('lang-shop-metal-2');
const shopMetalThree = document.getElementById('lang-shop-metal-3');
const shopMetalFour = document.getElementById('lang-shop-metal-4');
const shopMetalFive = document.getElementById('lang-shop-metal-5');
const shopMetalSix = document.getElementById('lang-shop-metal-6');
const shopMetalSeven = document.getElementById('lang-shop-metal-7');

const shopGlass = document.getElementById('lang-shop-glass');
const shopGlassOne = document.getElementById('lang-shop-glass-1');
const shopGlassTwo = document.getElementById('lang-shop-glass-2');
const shopGlassThree = document.getElementById('lang-shop-glass-3');
const shopGlassFour = document.getElementById('lang-shop-glass-4');
const shopGlassFive = document.getElementById('lang-shop-glass-5');

const shopPaper = document.getElementById('lang-shop-paper');
const shopPaperOne = document.getElementById('lang-shop-paper-1');
const shopPaperTwo = document.getElementById('lang-shop-paper-2');
const shopPaperThree = document.getElementById('lang-shop-paper-3');
const shopPaperFour = document.getElementById('lang-shop-paper-4');
const shopPaperFive = document.getElementById('lang-shop-paper-5');
const shopPaperSix = document.getElementById('lang-shop-paper-6');

const recyclingHeading = document.getElementById('lang-recycling');
const recyclingOne = document.getElementById('lang-recycling-1');
const recyclingOneText = document.getElementById('lang-recycling-1-text');
const recyclingTwo = document.getElementById('lang-recycling-2');
const recyclingTwoText = document.getElementById('lang-recycling-2-text');
const recyclingThree = document.getElementById('lang-recycling-3');
const recyclingThreeText = document.getElementById('lang-recycling-3-text');
const recyclingFour = document.getElementById('lang-recycling-4');
const recyclingFourText = document.getElementById('lang-recycling-4-text');
const recyclingFive = document.getElementById('lang-recycling-5');
const recyclingFiveText = document.getElementById('lang-recycling-5-text');
const recyclingSix = document.getElementById('lang-recycling-6');
const recyclingSixText = document.getElementById('lang-recycling-6-text');

const contactHeading = document.getElementById('lang-contact');
const contactHeadingTwo = document.getElementById('lang-contact-heading');
const contactHours = document.getElementById('lang-contact-hours');
const contactHoursOne = document.getElementById('lang-contact-hours-1');
const contactHoursTwo = document.getElementById('lang-contact-hours-2');
const contactHoursThree = document.getElementById('lang-contact-hours-3');

const footerHeading = document.getElementById('lang-footer');
const footerOne = document.getElementById('footer-1');
const footerTwo = document.getElementById('footer-2');
const footerThree = document.getElementById('footer-3');
const footerFour = document.getElementById('footer-4');
const footerFive = document.getElementById('footer-5');
const footerSix = document.getElementById('footer-6');

const localStorage = window.localStorage;
const serbian = document.getElementsByClassName('sr');
const hungarian = document.getElementsByClassName('hu');

hungarian[0].addEventListener('click', hungarianLang);
hungarian[1].addEventListener('click', hungarianLang);
serbian[0].addEventListener('click', serbianLang);
serbian[1].addEventListener('click', serbianLang);

if (!localStorage.getItem('lang') || localStorage.getItem('lang') === 'sr') {
  serbianLang();
} else {
  hungarianLang();
}
function serbianLang() {
  localStorage.setItem('lang', 'sr');
  if (serbian[0].classList.contains('lang-active')) return;
  hungarian[0].classList.remove('lang-active');
  hungarian[1].classList.remove('lang-active');
  serbian[0].classList.add('lang-active');
  serbian[1].classList.add('lang-active');
  //SRPSKI
  try {
    navHome.innerHTML = '<i class="fas fa-home"></i> Početna';
    navAbout.innerHTML = '<i class="fas fa-id-badge"></i> O Nama';
    navShop.innerHTML = '<i class="fas fa-hand-holding-usd"></i> Otkup';
    navGallery.innerHTML = '<i class="fas fa-images"></i> Galerija';
    navRecycling.innerHTML = '<i class="fas fa-recycle"></i> Značaj reciklaže';
    navContact.innerHTML = '<i class="fas fa-id-card"></i> Kontakt';

    carouselAbout.textContent = 'O Nama';
    carouselAboutP.textContent = 'Saznajte više o našem preduzeću.';
    carouselAboutBtn.textContent = 'Saznajte više';
    carouselShop.textContent = 'Otkup';
    carouselShopP.textContent =
      'Saznajte šta sve otkupljujemo od neopasnog otpada.';
    carouselShopBtn.textContent = 'Saznajte više';
    carouselGallery.textContent = 'Galerija';
    carouselGalleryP.textContent =
      'Pogledajte u galeriji kako izgleda naše preduzeće.';
    carouselGalleryBtn.textContent = 'Saznajte više';
    carouselContact.textContent = 'Kontakt';
    carouselContactP.textContent =
      'Kontaktirajte nas ukoliko imate nekih pitanja.';
    carouselContactBtn.textContent = 'Kontaktiraj';

    aboutHeading.textContent = 'O Nama';
    aboutOne.innerHTML = `<span>·</span> Kompanija <strong>"Jedina Nada DOO"</strong> uspešno posluje od samog osnivanja 2010. godine, sa sedištem na adresi Karađorđeva BB u Senti.`;
    aboutTwo.innerHTML = `<span>·</span> Bavimo se reciklažom neopasnog otpada. Naša firma vrši otkup, preradu i reciklažu sekundarnih sirovina na teritoriji cele Srbije.`;
    aboutThree.innerHTML = `<span>·</span> Neopasni otpad je svaki otpad koji nema karakteristike opasnog otpada. Ovde svrstavamo:`;
    aboutFour.innerHTML = '<span>·</span> Staklene i plastične boce';
    aboutFive.innerHTML = '<span>·</span> Papir';
    aboutSix.innerHTML = '<span>·</span> Plastika';
    aboutSeven.innerHTML = '<span>·</span> Gvožđe';
    aboutEight.innerHTML = '<span>·</span> Tekstil';
    aboutBtn.textContent = 'Gde se nalazimo?';

    shopHeading.textContent = 'Otkup';
    shopText.textContent = 'Vršimo otkup sledećih stvari:';
    shopPlastic.textContent = 'Plastika';
    shopPlasticOne.innerHTML = '<span></span>PET Ambalaža';
    shopPlasticTwo.innerHTML = '<span></span>Čepove';
    shopPlasticThree.innerHTML = '<span></span>Stolice';
    shopPlasticFour.innerHTML = '<span></span>Stolove';
    shopPlasticFive.innerHTML = '<span></span>Kofe';
    shopPlasticSix.innerHTML = '<span></span>Gajbe';
    shopMetal.textContent = 'Metal';
    shopMetalOne.innerHTML = '<span></span>Gvožđe';
    shopMetalTwo.innerHTML = '<span></span>Čelik';
    shopMetalThree.innerHTML = '<span></span>Bakar';
    shopMetalFour.innerHTML = '<span></span>Mesing';
    shopMetalFive.innerHTML = '<span></span>Aluminijum';
    shopMetalSix.innerHTML = '<span></span>Prohrom';
    shopMetalSeven.innerHTML = '<span></span>Olovo';
    shopGlass.textContent = 'Staklo';
    shopGlassOne.innerHTML = '<span></span>Staklene flaše';
    shopGlassTwo.innerHTML = '<span></span>Staklene tegle';
    shopGlassThree.innerHTML = '<span></span>Prozori';
    shopGlassFour.innerHTML = '<span></span>Slomljeno staklo';
    shopGlassFive.innerHTML = '<span></span>Ostale vrste stakala';
    shopPaper.textContent = 'Papir';
    shopPaperOne.innerHTML = '<span></span>Papir';
    shopPaperTwo.innerHTML = '<span></span>Arhivski papir';
    shopPaperThree.innerHTML = '<span></span>Karton';
    shopPaperFour.innerHTML = '<span></span>Knjige';
    shopPaperFive.innerHTML = '<span></span>Sveske';
    shopPaperSix.innerHTML = '<span></span>Novine';

    recyclingHeading.textContent = 'Značaj reciklaže';
    recyclingOne.textContent = 'Šta je reciklaža?';
    recyclingOneText.textContent =
      'Reciklaža je proces koji obuhvata sakupljanje, izdvajanje, preradu i izradu novih materijala i proizvoda iz iskorišćenih stvari ili materijala. U suprotnom, ti materijali bi završili na deponiji i zagađivali bi životnu sredinu.';
    recyclingTwo.textContent =
      'Reciklažom se smanjuje potrošnja prirodnih resursa';
    recyclingTwoText.innerHTML = `S obzirom na to da se neobnovljivi resursi troše velikom brzinom i očekivanja su da ćemo u narednih 40 godina ostati bez zaliha nafte, neophodno je učiniti sve što je moguće kako bismo to izbegli. Potrebno je da svaka država razvije strategiju koja će se baviti ovim pitanjem. Neophodno je da se narod edukuje o značaju reciklaže i o negativnim posledicama koje zagađenje životne sredine ima na nas. <br />
Recikliranjem se čuvaju prirodni resursi poput vode, minerala, nafte i šuma.`;
    recyclingThree.textContent =
      'Reciklažom čuvamo prirodna staništa životinja i biljaka';
    recyclingThreeText.textContent =
      'Poslednjih decenija mnogo životinja je izgubilo svoje domove zbog seča šuma radi proizvodnje proizvoda od papira. Zbog toga veliki broj životinjskih i biljnih vrsta je postao ugrožen. Taj problem bismo mogli rešiti reciklažom, jer reciklažom papira, kartona i ostalih materijala koji se proizvode od drveta smanjujemo potrebu za sečom šuma.';
    recyclingFour.textContent =
      'Reciklažom smanjujemo zagađenost voda i štitimo vodeni svet';
    recyclingFourText.textContent =
      'Velika količina otpada završava u rekama, morima i okeanima, time ugrožavajući prirodna staništa za mnoge životinjske vrste. Najveći deo otpada koji završava u tim staništima je upravo plastika koja može i mora da se reciklira. Samim tim što životinje unose zagađene materijale u svoj organizam, unosimo ih i mi pošto ih konzumiramo.';
    recyclingFive.textContent = 'Reciklažom štedimo energiju';
    recyclingFiveText.innerHTML = ` Kada ambalaža ne završi na reciklaži, uglavnom se spaljuje čime se troši velika količina energije i proizvodi se velika kolicina CO<sub>2</sub>.<br />
  Pravljenje proizvoda od recikliranog materijala zahteva mnogo manje energije nego kada se pravi od novog, sirovog materijala. Primer je aluminijum, reciklažom se koristi čak 95% manje energije nego pravljenjem iz početka. Ušteda kod papira od recikliranog materijala je oko 40% manje potrošene energije.`;
    recyclingSix.textContent =
      'Reciklažom na deponijama završava manje otpada i manje otpada se spaljuje';
    recyclingSixText.innerHTML = `Na deponijama završavaju razne stvari koje bi mogle da se recikliraju. Time se zagađuje zemljište, voda i vazduh. Takođe, velika količina otpada se spaljuje što zagađuje životnu sredinu.<br />
   Zagađenost u našoj zemlji je u konstantnom porastu i potrebno je napraviti korenite promene kako bismo sačuvali našu planetu!`;

    contactHeading.textContent = 'Kontakt';
    contactHeadingTwo.textContent = 'Kontakt podaci';
    contactHours.innerHTML =
      '<i class="fas fa-clock mrg-right color-icon"></i> Radno vreme:';
    contactHoursOne.textContent = 'Ponedeljak - Petak 07:00h - 15:00h';
    contactHoursTwo.textContent = 'Subota 07:00h - 12:00h';
    contactHoursThree.textContent = 'Nedelja neradna';

    footerHeading.textContent = 'Navigacija';
    footerOne.textContent = 'Početna';
    footerTwo.textContent = 'O Nama';
    footerThree.textContent = 'Otkup';
    footerFour.textContent = 'Galerija';
    footerFive.textContent = 'Značaj reciklaže';
    footerSix.textContent = 'Kontakt';
  } catch (e) {}
}
function hungarianLang() {
  localStorage.setItem('lang', 'hu');
  if (hungarian[0].classList.contains('lang-active')) return;
  hungarian[0].classList.add('lang-active');
  hungarian[1].classList.add('lang-active');
  serbian[0].classList.remove('lang-active');
  serbian[1].classList.remove('lang-active');
  //SECTION PREVOD
  try {
    navHome.innerHTML = '<i class="fas fa-home"></i> Kezdőlap';
    navAbout.innerHTML = '<i class="fas fa-id-badge"></i> Rólunk';
    navShop.innerHTML = '<i class="fas fa-hand-holding-usd"></i> Megváltás';
    navGallery.innerHTML = '<i class="fas fa-images"></i> Képgaléria';
    navRecycling.innerHTML = '<i class="fas fa-recycle"></i> Újrahasznosítás';
    navContact.innerHTML = '<i class="fas fa-id-card"></i> Kapcsolat';

    carouselAbout.textContent = 'Rólunk';
    carouselAboutP.textContent = 'Tudjon meg többet cégünkről.';
    carouselAboutBtn.textContent = 'Tudjon meg többet';
    carouselShop.textContent = 'Megváltás';
    carouselShopP.textContent =
      'Tudja meg mit vásárolunk nem veszélyes hulladékból.';
    carouselShopBtn.textContent = 'Tudjon meg többet';
    carouselGallery.textContent = 'Képgaléria';
    carouselGalleryP.textContent =
      'Nézze meg a képgalériában, hogyan néz ki cégünk.';
    carouselGalleryBtn.textContent = 'Tudjon meg többet';
    carouselContact.textContent = 'Kapcsolatba';
    carouselContactP.textContent =
      'Ha kérdése van vegye fel velünk a kapcsolatot.';
    carouselContactBtn.textContent = 'Kapcsolatba lépni';

    aboutHeading.textContent = 'Rólunk';
    aboutOne.innerHTML = `<span>·</span> A <strong>"Jedina Nada DOO"</strong> társaság 2010-es megalapítása óta sikeresen működik, székhelye a zentai Karađorđeva BB-ben található.`;
    aboutTwo.innerHTML = `<span>·</span> Újrahasznosítást a nem veszélyes hulladékot. Cégünk Szerbia területén másodlagos nyersanyagokat vásárol, dolgoz fel és újrahasznosít.`;
    aboutThree.innerHTML = `<span>·</span> A nem veszélyes hulladék minden olyan hulladék, amely nem rendelkezik a veszélyes hulladék jellemzőivel. Itt osztályozzuk: `;
    aboutFour.innerHTML = '<span>·</span> Üveg és műanyag palackok';
    aboutFive.innerHTML = '<span>·</span> Papír';
    aboutSix.innerHTML = '<span>·</span> Műanyag';
    aboutSeven.innerHTML = '<span>·</span> Vas';
    aboutEight.innerHTML = '<span>·</span> Textil';
    aboutBtn.textContent = 'Hol vagyunk?';

    shopHeading.textContent = 'Megváltás';
    shopText.textContent = 'A következő termékeket vásároljuk:';
    shopPlastic.textContent = 'Műanyag';
    shopPlasticOne.innerHTML = '<span></span>PET-csomagolás';
    shopPlasticTwo.innerHTML = '<span></span>Dugók';
    shopPlasticThree.innerHTML = '<span></span>Székek';
    shopPlasticFour.innerHTML = '<span></span>Táblázatok';
    shopPlasticFive.innerHTML = '<span></span>Vödör';
    shopPlasticSix.innerHTML = '<span></span>Ládák';
    shopMetal.textContent = 'Fém';
    shopMetalOne.innerHTML = '<span></span>Vas';
    shopMetalTwo.innerHTML = '<span></span>Acél';
    shopMetalThree.innerHTML = '<span></span>Réz';
    shopMetalFour.innerHTML = '<span></span>Sárgaréz';
    shopMetalFive.innerHTML = '<span></span>Alumínium';
    shopMetalSix.innerHTML = '<span></span>Rozsdamentes acél';
    shopMetalSeven.innerHTML = '<span></span>Vezet';
    shopGlass.textContent = 'Üveg';
    shopGlassOne.innerHTML = '<span></span>Üveg palackok';
    shopGlassTwo.innerHTML = '<span></span>Befőttes üveg';
    shopGlassThree.innerHTML = '<span></span>Ablakok';
    shopGlassFour.innerHTML = '<span></span>Törött üveg';
    shopGlassFive.innerHTML = '<span></span>Egyéb üvegtípusok';
    shopPaper.textContent = 'Papír';
    shopPaperOne.innerHTML = '<span></span>Papír';
    shopPaperTwo.innerHTML = '<span></span>Levéltári papír';
    shopPaperThree.innerHTML = '<span></span>Karton';
    shopPaperFour.innerHTML = '<span></span>Könyvek';
    shopPaperFive.innerHTML = '<span></span>Jegyzetfüzet';
    shopPaperSix.innerHTML = '<span></span>Újság';

    recyclingHeading.textContent = 'Az újrahasznosítás fontossága';
    recyclingOne.textContent = 'Mi az újrahasznosítás?';
    recyclingOneText.textContent =
      'Az újrahasznosítás olyan folyamat, amely magában foglalja új anyagok és termékek összegyűjtését, szétválasztását, feldolgozását és előállítását használt cikkekből vagy anyagokból. Ellenkező esetben ezek az anyagok a hulladéklerakóba kerülnének, és szennyeznék a környezetet.';
    recyclingTwo.textContent =
      'Az újrahasznosítás csökkenti a természeti erőforrások felhasználását';
    recyclingTwoText.innerHTML = `Tekintettel arra, hogy a megújuló erőforrásokat nagy arányban fogyasztják, és az elvárások szerint az elkövetkező 40 évben kifogy az olaj, ennek elkerülése érdekében mindent meg kell tenni. Minden országnak ki kell dolgoznia egy stratégiát, amely foglalkozik ezzel a kérdéssel. Az embereket oktatni kell az újrahasznosítás fontosságáról és a környezeti szennyezés ránk gyakorolt ​​negatív következményeiről. <br/>
    Az újrahasznosítás megőrzi a természeti erőforrásokat, például a vizet, az ásványi anyagokat, az olajat és az erdőket.`;
    recyclingThree.textContent =
      'Újrahasznosítással megőrizzük az állatok és növények természetes élőhelyeit';
    recyclingThreeText.textContent =
      'Az elmúlt évtizedekben sok állat veszítette el otthonát a papírtermékek előállítása céljából végzett erdőirtás miatt. Emiatt számos állat- és növényfaj veszélyeztetetté vált. Újrafeldolgozással megoldhatnánk ezt a problémát, mert a papírból, kartonból és más fából előállított anyagok újrafeldolgozásával csökkentjük az erdőirtás szükségességét.';
    recyclingFour.textContent =
      'Újrahasznosítással csökkentjük a vízszennyezést és megvédjük a vízi világot';
    recyclingFourText.textContent =
      'Nagy mennyiségű hulladék folyókba, tengerekbe és óceánokba kerül, ezáltal számos állatfaj természetes élőhelyeit veszélyezteti. Az ilyen élőhelyekbe kerülő hulladék nagy része műanyag, amelyet újrahasznosítani lehet és kell is. Azáltal, hogy az állatok szennyezett anyagokat visznek be a testükbe, mi is bevisszük őket, mert fogyasztjuk őket.';
    recyclingFive.textContent = 'Az újrahasznosítás energiát takarít meg';
    recyclingFiveText.innerHTML = ` If the packaging is not recycled, it is usually incinerated, which consumes a large amount of energy and a large amount of CO<sub>2</sub>. <br/>
    Producing products from recycled materials requires much less energy than new products made from raw materials. One example is aluminum: recycling uses up to 95% less energy than making from scratch. Saving recycled paper consumes about 40% less energy.`;
    recyclingSix.textContent =
      'Újrahasznosítással kevesebb hulladék kerül hulladéklerakókba, és kevesebb hulladék éget el';
    recyclingSixText.innerHTML = `Különféle újrahasznosítható dolgok kerülnek hulladéklerakókba. Ez szennyezi a talajt, a vizet és a levegőt. Emellett nagy mennyiségű hulladék éget el, ami szennyezi a környezetet. <br/>
  Hazánkban a szennyezés folyamatosan növekszik, és bolygónk megmentése érdekében gyökeres változtatásokra van szükség!`;

    contactHeading.textContent = 'Kapcsolat';
    contactHeadingTwo.textContent = 'Elérhetőségeit';
    contactHours.innerHTML =
      '<i class="fas fa-clock mrg-right color-icon"></i> Munkaidő:';
    contactHoursOne.textContent = 'Hétfő - Péntek 07:00h - 15:00h';
    contactHoursTwo.textContent = 'Szombat 07:00h - 12:00h';
    contactHoursThree.textContent = 'Vasárnap nem működik';

    footerHeading.textContent = 'Navigáció';
    footerOne.textContent = 'Kezdőlap';
    footerTwo.textContent = 'Rólunk';
    footerThree.textContent = 'Megváltás';
    footerFour.textContent = 'Képgaléria';
    footerFive.textContent = 'Újrahasznosítás';
    footerSix.textContent = 'Kapcsolat';

    //
  } catch (e) {}
}
