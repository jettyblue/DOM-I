const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')


// NAV
const navLinks = document.querySelectorAll('nav a');
const linkTexts = Object.values(siteContent.nav)
console.log(linkTexts);
navLinks.forEach(function(link, idx) {
  link.textContent = linkTexts[idx];
  link.classList.add('italic');
});

const navItem1 = document.querySelector('.nav-item-1');
const navItem2 = document.querySelector('.nav-item-2');
const navItem3 = document.querySelector('.nav-item-3');
const navItem4 = document.querySelector('.nav-item-4');
const navItem5 = document.querySelector('.nav-item-5');
const navItem6 = document.querySelector('.nav-item-6');
const navImage = document.querySelector('.img-src');


// LOGO
const logoImg = document.querySelector('#logo-img');
logoImg.src = siteContent.images['logo-img'];


// CTA
const domIsAwesome = document.querySelector('.cta-text h1');
domIsAwesome.textContent = siteContent.cta.h1;

const getStartedBtn = document.querySelector('.cta-text button')
getStartedBtn.textContent = siteContent.cta.button;

const ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent.images['cta-img'];


// MAIN-CONTENT
const topContent = document.querySelector('.top-content');
const bottomContent = document.querySelector('.bottom-content');
const h4sBottom = document.querySelectorAll('h4');
const psBottom = document.querySelectorAll('p');

// MAIN-CONTENT FEATURES
topContent.children[0].children[0].textContent = siteContent['main-content']['features-h4'];
topContent.children[0].children[1].textContent = siteContent['main-content']['features-content'];

// MAIN-CONTENT ABOUT
topContent.children[1].children[0].textContent = siteContent['main-content']['about-h4'];
topContent.children[1].children[1].textContent = siteContent['main-content']['about-content']

// MAIN-CONTENT WIDE IMAGE
const accentImg = document.querySelector('.middle-img');
accentImg.src = siteContent.images['accent-img'];

// MAIN-CONTENT SERVICES
h4sBottom[0].textContent = siteContent['main-content']['services-h4'];
psBottom[0].textContent = siteContent['main-content']['service-content'];
// h4sBottom[0].textContent = siteContent['main-content']['services-h4'];
// psBottom[0].textContent = siteContent['main-content']['services-content'];

// MAIN-CONTENT PRODUCT
h4sBottom[1].textContent = siteContent['main-content']['product-h4']
psBottom[1].textContent = siteContent['main-content']['product-content'];

// MAIN-CONTENT VISION
h4sBottom[2].textContent = siteContent['main-content']['vision-h4'];
psBottom[2].textContent = siteContent['main-content']['vision-content'];


// CONTACT
const contact = document.querySelector('section.contact');
const address = document.querySelector('.address');
const phone = document.querySelector('.phone');
const email = document.querySelector('.email');

//contact.children[0].textContent = siteContent.contact['contact-h4'];
contact.querySelector('h4').textContent = siteContent.contact['contact-h4'];
//contact.children[1].textContent = siteContent.contact['address'];
contact.querySelector('p:nth-of-type(1)').textContent = siteContent.contact['address'];
contact.querySelector('p:nth-of-type(2)').textContent = siteContent.contact['phone'];
//contact.children[3].textContent = siteContent.contact['email']
contact.querySelector('p:nth-of-type(3)').textContent = siteContent.contact['email'];


// FOOTER
const footerLink = document.querySelector('footer a');
footerLink.textContent = siteContent.footer.copyright;
footerLink.classList.add('bold');
