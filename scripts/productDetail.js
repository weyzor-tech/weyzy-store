var cart_products = JSON.parse(localStorage.getItem('cartproducts')) || [];
var like_products = JSON.parse(localStorage.getItem('likeproducts')) || [];
var currentProduct = JSON.parse(localStorage.getItem("currentProduct"));
var img = currentProduct.img;
var category = currentProduct.category;
var name = currentProduct.name;
var price = currentProduct.price;
var description = currentProduct.description;
var id = currentProduct.id
var productMainPage = document.getElementById("productMainPage");
productMainPage.innerHTML = `<div class="gallery_mainimg">
                <ul id="productGallery">
                </ul>
                <img src="${img}" alt="" id="mainImg">
            </div>
           <div class="product_info">
                <h2 id="productName">${name}</h2>
                <h4 id="productCategory">${category}</h4>

                <div>
                    <span id="productPrice">$${price}</span>
                </div>
                <p id="productDescription">${description}</p>
                <div>
                    <button id="addToCartBtn">Add to Cart</button>
                    <button id="addToLikesBtn"><i class="fa-solid fa-heart"></i></button>
                </div>
            </div>`

currentProduct.gallery.forEach((e) => {
    const galleryImg = document.createElement('li');
    galleryImg.innerHTML = `<img src="${e}" alt="">`;
    galleryImg.onclick = () => {
        document.getElementById("mainImg").src = e;
    };
    document.getElementById("productGallery").appendChild(galleryImg);
});
currentProduct.comments.map((e) => {
    const commentelem = document.createElement('div');
    commentelem.innerHTML = ` <img src = "${e.img}"/>
    <div>
    <h4>${e.comm}</h4><p>${e.date}</p>
    </div>`;
    document.getElementById("comment_ul").appendChild(commentelem);

});
// var productGallery = document.getElementById("productGallery")
// var mainImg = document.getElementById("mainImg")
// var productName = document.getElementById("productName")
// var productPrice = document.getElementById("productPrice")
// var productDescription = document.getElementById("productDescription")
// var productCategory = document.getElementById("productCategory")
var addToCartBtn = document.getElementById("addToCartBtn");
addToCartBtn.onclick = () => {
    const productData = {
        id: currentProduct.id,
        name: currentProduct.name,
        price: currentProduct.price,
        img: currentProduct.img
    };
    cart_products.push(productData);
    localStorage.setItem('cartproducts', JSON.stringify(cart_products));
    alert(`${currentProduct.name} added to cart!`);
};
var addToLikesBtn = document.getElementById("addToLikesBtn");
addToLikesBtn.onclick = () => {
    const likeProductData = {
        id: currentProduct.id,
        name: currentProduct.name,
        price: currentProduct.price,
        img: currentProduct.img
    };
    var index = like_products.findIndex(like => like.id === currentProduct.id);
    if (index === -1) {
        like_products.push(likeProductData);
        document.querySelector('#addToLikesBtn>i').style.color = "red";
        alert(`${currentProduct.name} added to likes!`);
    } else {
        like_products.splice(index, 1);
        document.querySelector('#addToLikesBtn>i').style.color = "white";
        alert(`${currentProduct.name} removed from likes!`);
    }

    localStorage.setItem('likeproducts', JSON.stringify(like_products));
};