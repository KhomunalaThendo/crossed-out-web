const products = [
    
    {
    id: 1,
    name: 'Crossed Hoodie',
    price: 350,
    image: 'assets/images/hood-blk.jpg',
    rating: 5
    },
    {
    id: 2,
    name: 'Crossed Hoodie',
    price: 350,
    image: 'assets/images/hood-blk.jpg',
    rating: 5
    },
    {
    id: 3,
    name: 'Crossed Hoodie',
    price: 350,
    image: 'assets/images/hood-blk.jpg',
    rating: 5
    },
    {
    id: 4,
    name: 'Crossed Hoodie',
    price: 350,
    image: 'assets/images/hood-blk.jpg',
    rating: 5
    },
    {
    id: 5,
    name: 'Crossed Hoodie',
    price: 350,
    image: 'assets/images/hood-blk.jpg',
    rating: 5
    },
    {
    id: 6,
    name: 'Crossed Hoodie',
    price: 350,
    image: 'assets/images/hood-blk.jpg',
    rating: 5
    },
    {
    id: 7,
    name: 'Crossed Hoodie',
    price: 350,
    image: 'assets/images/hood-blk.jpg',
    rating: 5
    },
    {
    id: 8,
    name: 'Crossed Hoodie',
    price: 350,
    image: 'assets/images/hood-blk.jpg',
    rating: 5
    },
    {
    id: 9,
    name: 'Crossed Hoodie',
    price: 350,
    image: 'assets/images/hood-blk.jpg',
    rating: 5
    },


];

//display products
const renderProducts = () => {
    const productSection = document.querySelector('.products');
    //productSection.innerHTML = '';

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
                        <img class="cartBtn" src="assets/icons/add-cart.png" alt="">
                    </div>
                </div>
        `;
        productSection.appendChild(productDIV);
    });
}