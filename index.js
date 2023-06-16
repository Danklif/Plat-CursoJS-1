const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const burgerIcon = document.querySelector(".menu")
const cartIcon = document.querySelector(".navbar-shopping-cart")
const mobileMenu = document.querySelector(".mobile-menu")
const asideMenu = document.querySelector(".product-detail")
const cardsContainer = document.querySelector(".cards-container")

const productList = []

for (let i = 0; i < 12; i++) {
    productList.push({
        name: 'Bike',
        price: 120,
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    })
}

renderProducts(productList)

menuEmail.addEventListener('click', toggleDesktopMenu)
burgerIcon.addEventListener('click', toggleMobileMenu)
cartIcon.addEventListener('click', toggleCartAside)

function toggleDesktopMenu(event) {
    desktopMenu.classList.toggle('inactive')
    mobileMenu.classList.add('inactive')
    asideMenu.classList.add('inactive')
}

function toggleMobileMenu(event) {
    mobileMenu.classList.toggle('inactive')
    desktopMenu.classList.add('inactive')
    asideMenu.classList.add('inactive')
}

function toggleCartAside(event) {
    asideMenu.classList.toggle('inactive')
    desktopMenu.classList.add('inactive')
    mobileMenu.classList.add('inactive')
}

function renderProducts(productArr) {
    for (product of productArr) {
        const divProductCard = document.createElement('div')
        divProductCard.classList.add('product-card')
        const imgBase = document.createElement('img')
        imgBase.setAttribute('src', product.img)
        const divProductInfo = document.createElement('div')
        divProductInfo.classList.add('product-info')
        const div = document.createElement('div')
        const pPrice = document.createElement('p')
        pPrice.textContent = `$ ${product.price}`
        const pName = document.createElement('p')
        pName.textContent = product.name
        const figure = document.createElement('figure')
        const imgIcon = document.createElement('img')
    
        imgIcon.setAttribute('src', './icons/bt_add_to_cart.svg')
        figure.append(imgIcon)
        div.append(pPrice, pName)
        divProductInfo.append(div, figure)
        divProductCard.append(imgBase, divProductInfo)
        cardsContainer.append(divProductCard)
    }
}