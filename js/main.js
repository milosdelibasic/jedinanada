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
hungarian[2].addEventListener('click', hungarianLang);
serbian[0].addEventListener('click', serbianLang);
serbian[1].addEventListener('click', serbianLang);
serbian[2].addEventListener('click', serbianLang);
console.log(hungarian, serbian);

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
  hungarian[2].classList.remove('lang-active');
  serbian[0].classList.add('lang-active');
  serbian[1].classList.add('lang-active');
  serbian[2].classList.add('lang-active');
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
  hungarian[2].classList.add('lang-active');
  serbian[0].classList.remove('lang-active');
  serbian[1].classList.remove('lang-active');
  serbian[2].classList.remove('lang-active');
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

//AOS
!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : (e.AOS = t());
})(this, function () {
  'use strict';
  var e =
      'undefined' != typeof window
        ? window
        : 'undefined' != typeof global
        ? global
        : 'undefined' != typeof self
        ? self
        : {},
    t = 'Expected a function',
    n = NaN,
    o = '[object Symbol]',
    i = /^\s+|\s+$/g,
    a = /^[-+]0x[0-9a-f]+$/i,
    r = /^0b[01]+$/i,
    c = /^0o[0-7]+$/i,
    s = parseInt,
    u = 'object' == typeof e && e && e.Object === Object && e,
    d = 'object' == typeof self && self && self.Object === Object && self,
    l = u || d || Function('return this')(),
    f = Object.prototype.toString,
    m = Math.max,
    p = Math.min,
    b = function () {
      return l.Date.now();
    };
  function v(e, n, o) {
    var i,
      a,
      r,
      c,
      s,
      u,
      d = 0,
      l = !1,
      f = !1,
      v = !0;
    if ('function' != typeof e) throw new TypeError(t);
    function y(t) {
      var n = i,
        o = a;
      return (i = a = void 0), (d = t), (c = e.apply(o, n));
    }
    function h(e) {
      var t = e - u;
      return void 0 === u || t >= n || t < 0 || (f && e - d >= r);
    }
    function k() {
      var e = b();
      if (h(e)) return x(e);
      s = setTimeout(
        k,
        (function (e) {
          var t = n - (e - u);
          return f ? p(t, r - (e - d)) : t;
        })(e)
      );
    }
    function x(e) {
      return (s = void 0), v && i ? y(e) : ((i = a = void 0), c);
    }
    function O() {
      var e = b(),
        t = h(e);
      if (((i = arguments), (a = this), (u = e), t)) {
        if (void 0 === s)
          return (function (e) {
            return (d = e), (s = setTimeout(k, n)), l ? y(e) : c;
          })(u);
        if (f) return (s = setTimeout(k, n)), y(u);
      }
      return void 0 === s && (s = setTimeout(k, n)), c;
    }
    return (
      (n = w(n) || 0),
      g(o) &&
        ((l = !!o.leading),
        (r = (f = 'maxWait' in o) ? m(w(o.maxWait) || 0, n) : r),
        (v = 'trailing' in o ? !!o.trailing : v)),
      (O.cancel = function () {
        void 0 !== s && clearTimeout(s), (d = 0), (i = u = a = s = void 0);
      }),
      (O.flush = function () {
        return void 0 === s ? c : x(b());
      }),
      O
    );
  }
  function g(e) {
    var t = typeof e;
    return !!e && ('object' == t || 'function' == t);
  }
  function w(e) {
    if ('number' == typeof e) return e;
    if (
      (function (e) {
        return (
          'symbol' == typeof e ||
          ((function (e) {
            return !!e && 'object' == typeof e;
          })(e) &&
            f.call(e) == o)
        );
      })(e)
    )
      return n;
    if (g(e)) {
      var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
      e = g(t) ? t + '' : t;
    }
    if ('string' != typeof e) return 0 === e ? e : +e;
    e = e.replace(i, '');
    var u = r.test(e);
    return u || c.test(e) ? s(e.slice(2), u ? 2 : 8) : a.test(e) ? n : +e;
  }
  var y = function (e, n, o) {
      var i = !0,
        a = !0;
      if ('function' != typeof e) throw new TypeError(t);
      return (
        g(o) &&
          ((i = 'leading' in o ? !!o.leading : i),
          (a = 'trailing' in o ? !!o.trailing : a)),
        v(e, n, { leading: i, maxWait: n, trailing: a })
      );
    },
    h = 'Expected a function',
    k = NaN,
    x = '[object Symbol]',
    O = /^\s+|\s+$/g,
    j = /^[-+]0x[0-9a-f]+$/i,
    E = /^0b[01]+$/i,
    N = /^0o[0-7]+$/i,
    z = parseInt,
    C = 'object' == typeof e && e && e.Object === Object && e,
    A = 'object' == typeof self && self && self.Object === Object && self,
    q = C || A || Function('return this')(),
    L = Object.prototype.toString,
    T = Math.max,
    M = Math.min,
    S = function () {
      return q.Date.now();
    };
  function D(e) {
    var t = typeof e;
    return !!e && ('object' == t || 'function' == t);
  }
  function H(e) {
    if ('number' == typeof e) return e;
    if (
      (function (e) {
        return (
          'symbol' == typeof e ||
          ((function (e) {
            return !!e && 'object' == typeof e;
          })(e) &&
            L.call(e) == x)
        );
      })(e)
    )
      return k;
    if (D(e)) {
      var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
      e = D(t) ? t + '' : t;
    }
    if ('string' != typeof e) return 0 === e ? e : +e;
    e = e.replace(O, '');
    var n = E.test(e);
    return n || N.test(e) ? z(e.slice(2), n ? 2 : 8) : j.test(e) ? k : +e;
  }
  var $ = function (e, t, n) {
      var o,
        i,
        a,
        r,
        c,
        s,
        u = 0,
        d = !1,
        l = !1,
        f = !0;
      if ('function' != typeof e) throw new TypeError(h);
      function m(t) {
        var n = o,
          a = i;
        return (o = i = void 0), (u = t), (r = e.apply(a, n));
      }
      function p(e) {
        var n = e - s;
        return void 0 === s || n >= t || n < 0 || (l && e - u >= a);
      }
      function b() {
        var e = S();
        if (p(e)) return v(e);
        c = setTimeout(
          b,
          (function (e) {
            var n = t - (e - s);
            return l ? M(n, a - (e - u)) : n;
          })(e)
        );
      }
      function v(e) {
        return (c = void 0), f && o ? m(e) : ((o = i = void 0), r);
      }
      function g() {
        var e = S(),
          n = p(e);
        if (((o = arguments), (i = this), (s = e), n)) {
          if (void 0 === c)
            return (function (e) {
              return (u = e), (c = setTimeout(b, t)), d ? m(e) : r;
            })(s);
          if (l) return (c = setTimeout(b, t)), m(s);
        }
        return void 0 === c && (c = setTimeout(b, t)), r;
      }
      return (
        (t = H(t) || 0),
        D(n) &&
          ((d = !!n.leading),
          (a = (l = 'maxWait' in n) ? T(H(n.maxWait) || 0, t) : a),
          (f = 'trailing' in n ? !!n.trailing : f)),
        (g.cancel = function () {
          void 0 !== c && clearTimeout(c), (u = 0), (o = s = i = c = void 0);
        }),
        (g.flush = function () {
          return void 0 === c ? r : v(S());
        }),
        g
      );
    },
    W = function () {};
  function P(e) {
    e &&
      e.forEach(function (e) {
        var t = Array.prototype.slice.call(e.addedNodes),
          n = Array.prototype.slice.call(e.removedNodes);
        if (
          (function e(t) {
            var n = void 0,
              o = void 0;
            for (n = 0; n < t.length; n += 1) {
              if ((o = t[n]).dataset && o.dataset.aos) return !0;
              if (o.children && e(o.children)) return !0;
            }
            return !1;
          })(t.concat(n))
        )
          return W();
      });
  }
  function Y() {
    return (
      window.MutationObserver ||
      window.WebKitMutationObserver ||
      window.MozMutationObserver
    );
  }
  var _ = {
      isSupported: function () {
        return !!Y();
      },
      ready: function (e, t) {
        var n = window.document,
          o = new (Y())(P);
        (W = t),
          o.observe(n.documentElement, {
            childList: !0,
            subtree: !0,
            removedNodes: !0,
          });
      },
    },
    B = function (e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    },
    F = (function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
      };
    })(),
    I =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var o in n)
            Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        }
        return e;
      },
    K = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
    G = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
    J = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
    Q = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
  function R() {
    return navigator.userAgent || navigator.vendor || window.opera || '';
  }
  var U = new ((function () {
      function e() {
        B(this, e);
      }
      return (
        F(e, [
          {
            key: 'phone',
            value: function () {
              var e = R();
              return !(!K.test(e) && !G.test(e.substr(0, 4)));
            },
          },
          {
            key: 'mobile',
            value: function () {
              var e = R();
              return !(!J.test(e) && !Q.test(e.substr(0, 4)));
            },
          },
          {
            key: 'tablet',
            value: function () {
              return this.mobile() && !this.phone();
            },
          },
          {
            key: 'ie11',
            value: function () {
              return (
                '-ms-scroll-limit' in document.documentElement.style &&
                '-ms-ime-align' in document.documentElement.style
              );
            },
          },
        ]),
        e
      );
    })())(),
    V = function (e, t) {
      var n = void 0;
      return (
        U.ie11()
          ? (n = document.createEvent('CustomEvent')).initCustomEvent(
              e,
              !0,
              !0,
              { detail: t }
            )
          : (n = new CustomEvent(e, { detail: t })),
        document.dispatchEvent(n)
      );
    },
    X = function (e) {
      return e.forEach(function (e, t) {
        return (function (e, t) {
          var n = e.options,
            o = e.position,
            i = e.node,
            a =
              (e.data,
              function () {
                e.animated &&
                  ((function (e, t) {
                    t &&
                      t.forEach(function (t) {
                        return e.classList.remove(t);
                      });
                  })(i, n.animatedClassNames),
                  V('aos:out', i),
                  e.options.id && V('aos:in:' + e.options.id, i),
                  (e.animated = !1));
              });
          n.mirror && t >= o.out && !n.once
            ? a()
            : t >= o.in
            ? e.animated ||
              ((function (e, t) {
                t &&
                  t.forEach(function (t) {
                    return e.classList.add(t);
                  });
              })(i, n.animatedClassNames),
              V('aos:in', i),
              e.options.id && V('aos:in:' + e.options.id, i),
              (e.animated = !0))
            : e.animated && !n.once && a();
        })(e, window.pageYOffset);
      });
    },
    Z = function (e) {
      for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop); )
        (t += e.offsetLeft - ('BODY' != e.tagName ? e.scrollLeft : 0)),
          (n += e.offsetTop - ('BODY' != e.tagName ? e.scrollTop : 0)),
          (e = e.offsetParent);
      return { top: n, left: t };
    },
    ee = function (e, t, n) {
      var o = e.getAttribute('data-aos-' + t);
      if (void 0 !== o) {
        if ('true' === o) return !0;
        if ('false' === o) return !1;
      }
      return o || n;
    },
    te = function (e, t) {
      return (
        e.forEach(function (e, n) {
          var o = ee(e.node, 'mirror', t.mirror),
            i = ee(e.node, 'once', t.once),
            a = ee(e.node, 'id'),
            r = t.useClassNames && e.node.getAttribute('data-aos'),
            c = [t.animatedClassName]
              .concat(r ? r.split(' ') : [])
              .filter(function (e) {
                return 'string' == typeof e;
              });
          t.initClassName && e.node.classList.add(t.initClassName),
            (e.position = {
              in: (function (e, t, n) {
                var o = window.innerHeight,
                  i = ee(e, 'anchor'),
                  a = ee(e, 'anchor-placement'),
                  r = Number(ee(e, 'offset', a ? 0 : t)),
                  c = a || n,
                  s = e;
                i &&
                  document.querySelectorAll(i) &&
                  (s = document.querySelectorAll(i)[0]);
                var u = Z(s).top - o;
                switch (c) {
                  case 'top-bottom':
                    break;
                  case 'center-bottom':
                    u += s.offsetHeight / 2;
                    break;
                  case 'bottom-bottom':
                    u += s.offsetHeight;
                    break;
                  case 'top-center':
                    u += o / 2;
                    break;
                  case 'center-center':
                    u += o / 2 + s.offsetHeight / 2;
                    break;
                  case 'bottom-center':
                    u += o / 2 + s.offsetHeight;
                    break;
                  case 'top-top':
                    u += o;
                    break;
                  case 'bottom-top':
                    u += o + s.offsetHeight;
                    break;
                  case 'center-top':
                    u += o + s.offsetHeight / 2;
                }
                return u + r;
              })(e.node, t.offset, t.anchorPlacement),
              out:
                o &&
                (function (e, t) {
                  window.innerHeight;
                  var n = ee(e, 'anchor'),
                    o = ee(e, 'offset', t),
                    i = e;
                  return (
                    n &&
                      document.querySelectorAll(n) &&
                      (i = document.querySelectorAll(n)[0]),
                    Z(i).top + i.offsetHeight - o
                  );
                })(e.node, t.offset),
            }),
            (e.options = { once: i, mirror: o, animatedClassNames: c, id: a });
        }),
        e
      );
    },
    ne = function () {
      var e = document.querySelectorAll('[data-aos]');
      return Array.prototype.map.call(e, function (e) {
        return { node: e };
      });
    },
    oe = [],
    ie = !1,
    ae = {
      offset: 120,
      delay: 0,
      easing: 'ease',
      duration: 400,
      disable: !1,
      once: !1,
      mirror: !1,
      anchorPlacement: 'top-bottom',
      startEvent: 'DOMContentLoaded',
      animatedClassName: 'aos-animate',
      initClassName: 'aos-init',
      useClassNames: !1,
      disableMutationObserver: !1,
      throttleDelay: 99,
      debounceDelay: 50,
    },
    re = function () {
      return document.all && !window.atob;
    },
    ce = function () {
      arguments.length > 0 &&
        void 0 !== arguments[0] &&
        arguments[0] &&
        (ie = !0),
        ie &&
          ((oe = te(oe, ae)),
          X(oe),
          window.addEventListener(
            'scroll',
            y(function () {
              X(oe, ae.once);
            }, ae.throttleDelay)
          ));
    },
    se = function () {
      if (((oe = ne()), de(ae.disable) || re())) return ue();
      ce();
    },
    ue = function () {
      oe.forEach(function (e, t) {
        e.node.removeAttribute('data-aos'),
          e.node.removeAttribute('data-aos-easing'),
          e.node.removeAttribute('data-aos-duration'),
          e.node.removeAttribute('data-aos-delay'),
          ae.initClassName && e.node.classList.remove(ae.initClassName),
          ae.animatedClassName && e.node.classList.remove(ae.animatedClassName);
      });
    },
    de = function (e) {
      return (
        !0 === e ||
        ('mobile' === e && U.mobile()) ||
        ('phone' === e && U.phone()) ||
        ('tablet' === e && U.tablet()) ||
        ('function' == typeof e && !0 === e())
      );
    };
  return {
    init: function (e) {
      return (
        (ae = I(ae, e)),
        (oe = ne()),
        ae.disableMutationObserver ||
          _.isSupported() ||
          (console.info(
            '\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '
          ),
          (ae.disableMutationObserver = !0)),
        ae.disableMutationObserver || _.ready('[data-aos]', se),
        de(ae.disable) || re()
          ? ue()
          : (document
              .querySelector('body')
              .setAttribute('data-aos-easing', ae.easing),
            document
              .querySelector('body')
              .setAttribute('data-aos-duration', ae.duration),
            document
              .querySelector('body')
              .setAttribute('data-aos-delay', ae.delay),
            -1 === ['DOMContentLoaded', 'load'].indexOf(ae.startEvent)
              ? document.addEventListener(ae.startEvent, function () {
                  ce(!0);
                })
              : window.addEventListener('load', function () {
                  ce(!0);
                }),
            'DOMContentLoaded' === ae.startEvent &&
              ['complete', 'interactive'].indexOf(document.readyState) > -1 &&
              ce(!0),
            window.addEventListener('resize', $(ce, ae.debounceDelay, !0)),
            window.addEventListener(
              'orientationchange',
              $(ce, ae.debounceDelay, !0)
            ),
            oe)
      );
    },
    refresh: ce,
    refreshHard: se,
  };
});
AOS.init();
