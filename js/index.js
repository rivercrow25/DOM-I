const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
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
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navArray = document.querySelectorAll('a')

const Contenth4Array = document.querySelectorAll('h4')

const textArray = document.querySelectorAll('.text-content p')

const headerh1 = document.querySelector('.cta-text h1')
const headerImg = document.querySelector('.cta img')
const headerButton = document.querySelector('.cta button')

const middleImg = document.querySelector('.middle-img')

const contacth4 = document.querySelector('.contact h4')
const contact = document.querySelectorAll('.contact p')

const footer = document.querySelector('footer p')
console.log(footer)

const nav1 = navArray[0]
const nav2 = navArray[1]
const nav3 = navArray[2]
const nav4 = navArray[3]
const nav5 = navArray[4]
const nav6 = navArray[5]

const features = Contenth4Array[0]
const about = Contenth4Array[1]
const services = Contenth4Array[2]
const product = Contenth4Array[3]
const vision = Contenth4Array[4]

const text1 = textArray[0]
const text2 = textArray[1]
const text3 = textArray[2]
const text4 = textArray[3]
const text5 = textArray[4]

const adress = contact[0]
const phone = contact[1]
const email = contact[2]

nav1.textContent = siteContent['nav']['nav-item-1']
nav2.textContent = siteContent['nav']['nav-item-2']
nav3.textContent = siteContent['nav']['nav-item-3']
nav4.textContent = siteContent['nav']['nav-item-4']
nav5.textContent = siteContent['nav']['nav-item-5']
nav6.textContent = siteContent['nav']['nav-item-6']

headerh1.textContent = siteContent['cta']['h1']
headerImg.setAttribute('src', siteContent['cta']['img-src'])
headerButton.textContent = siteContent['cta']['button']

features.textContent = siteContent['main-content']['features-h4']
about.textContent = siteContent['main-content']['about-h4']
services.textContent = siteContent['main-content']['services-h4']
product.textContent = siteContent['main-content']['product-h4']
vision.textContent = siteContent['main-content']['vision-h4']

text1.textContent = siteContent['main-content']['features-content']
text2.textContent = siteContent['main-content']['about-content']
text3.textContent = siteContent['main-content']['services-content']
text4.textContent = siteContent['main-content']['product-content']
text5.textContent = siteContent['main-content']['vision-content']

middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

contacth4.textContent = siteContent['contact']['contact-h4']

adress.textContent = siteContent['contact']['address']
phone.textContent = siteContent['contact']['phone']
email.textContent = siteContent['contact']['email']

footer.textContent = siteContent['footer']['copyright']


const parent = document.querySelector('nav')
console.log(parent)

navArray.forEach(item => [
  item.style.color = "green"
])

const nav7 = document.createElement('A')
const nav8 = document.createElement('A')
nav7.setAttribute('href', '#')
nav8.setAttribute('href', '#')
nav7.textContent = 'nav7'
nav8.textContent = 'nav8'

parent.append(nav7)
parent.prepend(nav8)

console.log(nav7)
console.log(nav8)