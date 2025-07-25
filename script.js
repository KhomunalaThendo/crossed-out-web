const products = [
    
    {
    id: 1,
    name: 'Crossed Hoodie Black',
    price: 350,
    image: 'assets/images/hood-blk.jpg',
    rating: 5,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In velit, eius itaque adipisci deserunt magnam at corrupti magni quibusdam molestias accusantium repellendus distinctio libero dolor ut numquam vero ex maiores.",
    details: "Available in: Green, White, Red <br> Material: Wool-blend body, faux leather sleeves <br> Lining: Satin finish <br>Only 10 pieces made <br> Designed & made in South Africa",    
    colour: ['Green', 'White', 'Red'],
    size: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
    id: 2,
    name: 'Crossed Hoodie Gold',
    price: 350,
    image: 'assets/images/hoodie-gld.jpg',
    rating: 5,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In velit, eius itaque adipisci deserunt magnam at corrupti magni quibusdam molestias accusantium repellendus distinctio libero dolor ut numquam vero ex maiores.",
    details: "Available in: Green, White, Red <br> Material: Wool-blend body, faux leather sleeves <br> Lining: Satin finish <br>Only 10 pieces made <br> Designed & made in South Africa",    
    colour: ['Green', 'White', 'Red'],
    size: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
    id: 3,
    name: '2025 For Play Tee',
    price: 250,
    image: 'assets/images/cool-tee.jpg',
    rating: 5,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In velit, eius itaque adipisci deserunt magnam at corrupti magni quibusdam molestias accusantium repellendus distinctio libero dolor ut numquam vero ex maiores.",
    details: "Available in: Green, White, Red <br> Material: Wool-blend body, faux leather sleeves <br> Lining: Satin finish <br>Only 10 pieces made <br> Designed & made in South Africa",    
    colour: ['Green', 'White', 'Red'],
    size: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
    id: 4,
    name: 'For Play Tee',
    price: 250,
    image: 'assets/images/for-ply.jpg',
    rating: 5,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In velit, eius itaque adipisci deserunt magnam at corrupti magni quibusdam molestias accusantium repellendus distinctio libero dolor ut numquam vero ex maiores.",
    details: "Available in: Green, White, Red <br> Material: Wool-blend body, faux leather sleeves <br> Lining: Satin finish <br>Only 10 pieces made <br> Designed & made in South Africa",    
    colour: ['Green', 'White', 'Red'],
    size: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
    id: 5,
    name: 'For Play Tote Bag',
    price: 200,
    image: 'assets/images/cool-bag.jpg',
    rating: 5,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In velit, eius itaque adipisci deserunt magnam at corrupti magni quibusdam molestias accusantium repellendus distinctio libero dolor ut numquam vero ex maiores.",
    details: "Available in: Green, White, Red <br> Material: Wool-blend body, faux leather sleeves <br> Lining: Satin finish <br>Only 10 pieces made <br> Designed & made in South Africa",    
    colour: ['Green', 'White', 'Red'],
    size: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
    id: 6,
    name: 'Crossed Tee Black',
    price: 200,
    image: 'assets/images/tee-blk.jpg',
    rating: 5,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In velit, eius itaque adipisci deserunt magnam at corrupti magni quibusdam molestias accusantium repellendus distinctio libero dolor ut numquam vero ex maiores.",
    details: "Available in: Green, White, Red <br> Material: Wool-blend body, faux leather sleeves <br> Lining: Satin finish <br>Only 10 pieces made <br> Designed & made in South Africa",    
    colour: ['Green', 'White', 'Red'],
    size: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
    id: 7,
    name: 'Crossed Tee Gold',
    price: 350,
    image: 'assets/images/hood-blk.jpg',
    rating: 5,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In velit, eius itaque adipisci deserunt magnam at corrupti magni quibusdam molestias accusantium repellendus distinctio libero dolor ut numquam vero ex maiores.",
    details: "Available in: Green, White, Red <br> Material: Wool-blend body, faux leather sleeves <br> Lining: Satin finish <br>Only 10 pieces made <br> Designed & made in South Africa",    
    colour: ['Green', 'White', 'Red'],
    size: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
    id: 8,
    name: 'Crossed Out Crop Top',
    price: 150,
    image: 'assets/images/crop-top.jpg',
    rating: 5,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In velit, eius itaque adipisci deserunt magnam at corrupti magni quibusdam molestias accusantium repellendus distinctio libero dolor ut numquam vero ex maiores.",
    details: "Available in: Green, White, Red <br> Material: Wool-blend body, faux leather sleeves <br> Lining: Satin finish <br>Only 10 pieces made <br> Designed & made in South Africa",    
    colour: ['Green', 'White', 'Red'],
    size: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
    id: 9,
    name: 'Crossed Out Mini Skirt',
    price: 350,
    image: 'assets/images/skirt.jpg',
    rating: 5,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In velit, eius itaque adipisci deserunt magnam at corrupti magni quibusdam molestias accusantium repellendus distinctio libero dolor ut numquam vero ex maiores.",
    details: "Available in: Green, White, Red <br> Material: Wool-blend body, faux leather sleeves <br> Lining: Satin finish <br>Only 10 pieces made <br> Designed & made in South Africa",    
    colour: ['Green', 'White', 'Red'],
    size: ['XS', 'S', 'M', 'L', 'XL']
    },


];

//display products
const renderProducts = () => {
    const productSection = document.querySelector('.products');
    productSection.innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        productDiv.innerHTML = `
         <img src="${product.image}" id="productPic" alt="">
                <div class="productInfo">
                    <p id="prodName">${product.name}</p>
                    <p id="price">R ${product.price}</p>
                </div>
                <div class="ratingCart">
                    <div class="rating">
                        <img src="assets/icons/star.svg" alt="">
                        <p id="rating">${product.rating}</p>
                    </div>
                    <div class="addCart">
                    <button  class="cartBtn" data-id = "${product.id}" >
                    <img src="assets/icons/add-cart.png" alt="">
                    
                    </button>
                        </div>
                </div>
        `;
        productSection.appendChild(productDiv);
    });

    const cartBtns = document.querySelectorAll('.cartBtn');
    cartBtns.forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = e.currentTarget.getAttribute('data-id');
            localStorage.setItem('selectedProductId', productId);
            window.location.href = 'productpage.html'; 
        });
    });
}
//product page function/ display product details
const renderProductPage = () => {
    const quantity = document.getElementById('quantity').value;
    const productId = localStorage.getItem('selectedProductId');
    const product = products.find(p => p.id == productId);

    if (product) {
        document.getElementById("largeDisplay").src = product.image;
        document.getElementById("smallDisplay").src = product.image;
        document.getElementById("productName").textContent = product.name;
        document.getElementById("prodPrice").textContent = `R ${product.price}`;
        document.getElementById("description").innerHTML = product.description;
        document.getElementById("details").innerHTML = product.details;

        const colorsContainer = document.querySelector('.color-btns');
        colorsContainer.innerHTML = product.colour.map(c =>
            `<button class="color-btn" style="background-color:${c.toLowerCase()};" title="${c}"></button>`
        ).join(' ');

        const sizesContainer = document.querySelector('.sizes');
        sizesContainer.innerHTML = product.size.map(s => `<button class="size-btn">${s}</button>`).join(' ');

    } else {
        document.querySelector('.prodPageSec').innerHTML = "<h2>Product not found.</h2>";
    }

}

document.addEventListener("DOMContentLoaded", renderProductPage);
document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector('.products')) {
        renderProducts(); // if it's the index.html/products page
    }
    if (document.querySelector('.product-section')) {
        renderProductPage(); // if it's the productpage.html page
    }
});

//renderProducts(); 
//renderProductPage();