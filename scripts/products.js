var cart_products = JSON.parse(localStorage.getItem('cartproducts')) || [];
var like_products = JSON.parse(localStorage.getItem('likeproducts')) || [];
// PRODUCT CLASS
class Product {
    constructor(id, img, category, productname, mark, newprice, oldprice, gallery, comments, description) {
        this.id = id
        this.img = img
        this.category = category
        this.productname = productname
        this.mark = mark
        this.newprice = newprice
        this.oldprice = oldprice
        this.gallery = gallery
        this.comments = comments
        this.description = description
    }

    render() {
        const Productdiv = document.createElement('article')
        Productdiv.classList.add('product')

        Productdiv.innerHTML = `
        <img src="${this.img}"/>
        <article>
            <h3>${this.productname}</h3>
            <p>${this.description}</p>
            <span>$${this.newprice} <span>$${this.oldprice}</span></span>
            <button class="addtocart_btn">ADD TO CART</button>
        </article>
        `
        Productdiv.querySelector('.addtocart_btn').onclick = () => {
            const productData = {
                id: this.id,
                name: this.productname,
                price: this.newprice,
                img: this.img
            };
            cart_products.push(productData);
            localStorage.setItem('cartproducts', JSON.stringify(cart_products));
            alert(`${this.productname} added to cart!`);
        };

        document.querySelector('.product_box').appendChild(Productdiv);

        var Productdiv_img = Productdiv.querySelector('img')
        var Productdiv_name = Productdiv.querySelector('h3')
        Productdiv_img.onclick = () => {
            localStorage.setItem('currentProduct', JSON.stringify({
                id: this.id,
                name: this.productname,
                price: this.newprice,
                img: this.img,
                category: this.category,
                mark: this.mark,
                gallery: this.gallery,
                description: this.description,
                comments: this.comments

            }));
            location.href = './productDetail.html';
        };
    };


}

const product_data = [
    new Product(1,
        "https://gmedia.playstation.com/is/image/SIEPDC/dualsense-teal-screenshot-01-en-23sep24?$1600px$",
        "STUDIO DESIGN",
        "Emerald Green Dualsense",
        [
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>'
        ],
        80,
        50,
        [
            "https://gmedia.playstation.com/is/image/SIEPDC/dualsense-teal-screenshot-01-en-23sep24?$1600px$",
            "https://gmedia.playstation.com/is/image/SIEPDC/dualsense-teal-screenshot-04-en-23sep24?$1600px$",
            "https://gmedia.playstation.com/is/image/SIEPDC/dualsense-teal-screenshot-03-en-23sep24?$1600px$",
        ],
        [
            {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyY4Dk7MPITQqsIs0L_gu0sDrMEyzTQGs7Nw&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyY4Dk7MPITQqsIs0L_gu0sDrMEyzTQGs7Nw&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyY4Dk7MPITQqsIs0L_gu0sDrMEyzTQGs7Nw&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyY4Dk7MPITQqsIs0L_gu0sDrMEyzTQGs7Nw&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyY4Dk7MPITQqsIs0L_gu0sDrMEyzTQGs7Nw&s",
                date: "04.08.2024",
                comm: "Very good product"
            }
        ],
        "very good controler",
    ),
    new Product(
        2,
        "https://gmedia.playstation.com/is/image/SIEPDC/dualsense-midnight-black-screenshot-04-en-08dec21?$1600px$",
        "STUDIO DESIGN",
        "Black Dualsense",
        [
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>'
        ],
        80,
        50,
        [
            "https://gmedia.playstation.com/is/image/SIEPDC/dualsense-midnight-black-screenshot-01-en-08dec21?$1600px$",
            "https://gmedia.playstation.com/is/image/SIEPDC/dualsense-midnight-black-screenshot-04-en-08dec21?$1600px$",
            "https://gmedia.playstation.com/is/image/SIEPDC/dualsense-midnight-black-screenshot-02-en-08dec21?$1600px$",

        ],
        [
            {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyY4Dk7MPITQqsIs0L_gu0sDrMEyzTQGs7Nw&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyY4Dk7MPITQqsIs0L_gu0sDrMEyzTQGs7Nw&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyY4Dk7MPITQqsIs0L_gu0sDrMEyzTQGs7Nw&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyY4Dk7MPITQqsIs0L_gu0sDrMEyzTQGs7Nw&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyY4Dk7MPITQqsIs0L_gu0sDrMEyzTQGs7Nw&s",
                date: "04.08.2024",
                comm: "Very good product"
            }
        ], "very good controler",

    ),
    new Product(
        3,
        "https://gmedia.playstation.com/is/image/SIEPDC/dualsense-controller-image-block-01-ps5-26jun20?$1600px$",
        "STUDIO DESIGN",
        "Classic Dualsense",
        [
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>'
        ],
        80,
        50,
        [
            "https://gmedia.playstation.com/is/image/SIEPDC/dualsense-controller-image-block-01-ps5-26jun20?$1600px$",
            "https://gmedia.playstation.com/is/image/SIEPDC/dualsense-white-screenshot-04-en-08dec21?$1600px$",
            "https://gmedia.playstation.com/is/image/SIEPDC/dualsense-white-screenshot-05-en-08dec21?$1600px$",
        ],
        [
            {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyY4Dk7MPITQqsIs0L_gu0sDrMEyzTQGs7Nw&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyY4Dk7MPITQqsIs0L_gu0sDrMEyzTQGs7Nw&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyY4Dk7MPITQqsIs0L_gu0sDrMEyzTQGs7Nw&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyY4Dk7MPITQqsIs0L_gu0sDrMEyzTQGs7Nw&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyY4Dk7MPITQqsIs0L_gu0sDrMEyzTQGs7Nw&s",
                date: "04.08.2024",
                comm: "Very good product"
            }
        ], "very good controler",

    ),
    new Product(
        4,
        "https://gmedia.playstation.com/is/image/SIEPDC/dualsense-pearl-screenshot-01-en-23sep24?$1600px$",
        "STUDIO DESIGN",
        "Snowy-White Dualsense",
        [
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>'
        ],
        80,
        50, [
        "https://gmedia.playstation.com/is/image/SIEPDC/dualsense-pearl-screenshot-01-en-23sep24?$1600px$",
        "https://gmedia.playstation.com/is/image/SIEPDC/dualsense-pearl-screenshot-04-en-23sep24?$1600px$",
        "https://gmedia.playstation.com/is/image/SIEPDC/dualsense-pearl-screenshot-03-en-23sep24?$1600p$",
    ],
        [
            {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyY4Dk7MPITQqsIs0L_gu0sDrMEyzTQGs7Nw&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyY4Dk7MPITQqsIs0L_gu0sDrMEyzTQGs7Nw&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyY4Dk7MPITQqsIs0L_gu0sDrMEyzTQGs7Nw&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyY4Dk7MPITQqsIs0L_gu0sDrMEyzTQGs7Nw&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyY4Dk7MPITQqsIs0L_gu0sDrMEyzTQGs7Nw&s",
                date: "04.08.2024",
                comm: "Very good product"
            }
        ], "very good controler",

    ),
]

product_data.forEach((e) => {
    e.render()
})
// BIG PRODUCT CLASS

class Bigproduct {
    constructor(id, img, category, name, mark, newprice, oldprice, discount, availability, gallery, comments, description) {
        this.id = id
        this.img = img
        this.category = category
        this.name = name
        this.mark = mark
        this.newprice = newprice
        this.oldprice = oldprice
        this.discount = discount
        this.availability = availability
        this.gallery = gallery
        this.comments = comments
        this.description = description
    }
    renderBig() {
        const big_product_div = document.createElement('article')
        big_product_div.classList.add('big_product_div')

        big_product_div.innerHTML = `
        <div>
        
            <img src="${this.img}"/>
            <div class="img_options">
                <button class="addtocart_btn">ADD TO CART</button>
                <button class ="addtolikes_btn"><i class="fa-solid fa-heart"></i></button>
            </div>
        </div>

        <article class="big_products_info">
            <p>${this.category}</p>
            <h3>${this.name}</h3>
            <ul></ul>
            <div> 
                <span>$${this.newprice}</span>
                <span class="oldprice_big_product">$${this.oldprice}</span>
                <span class="discount">-${this.discount}%</span>
            </div>  
            <span>Availability: ${this.availability} in stock</span>
        </article>
        `
        var addtocart_btn = big_product_div.querySelector(".addtocart_btn")
        var addtolikes_btn = big_product_div.querySelector(".addtolikes_btn")
        this.mark.map((e) => {
            const markelem = document.createElement('li');
            markelem.innerHTML = e;
            big_product_div.querySelector('ul').append(markelem)
        })
        document.querySelector('.big_product_box').appendChild(big_product_div)
        addtocart_btn.onclick = () => {
            const productData = {
                id: this.id,
                name: this.name,
                price: this.newprice,
                img: this.img
            };
            cart_products.push(productData);
            localStorage.setItem('cartproducts', JSON.stringify(cart_products));
            alert(`${this.name} added to cart!`);

        };
        addtolikes_btn.onclick = () => {
            const likeProductData = {
                id: this.id,
                name: this.name,
                price: this.newprice,
                img: this.img
            };


            var index = like_products.findIndex(like => like.id === this.id);

            if (index === -1) {
                like_products.push(likeProductData);
                big_product_div.querySelector('.addtolikes_btn i ').style.color = "red";
                alert(`${this.name} added to likes!`);
            } else {
                like_products.splice(index, 1);
                big_product_div.querySelector('.addtolikes_btn i').style.color = "white";
                alert(`${this.name} removed from likes!`);
            }

            localStorage.setItem('likeproducts', JSON.stringify(like_products));
        };

        var big_product_img = big_product_div.querySelector('img')
        var big_product_name = big_product_div.querySelector('h3')
        big_product_img.onclick = () => {
            localStorage.setItem('currentProduct', JSON.stringify({
                id: this.id,
                name: this.name,
                price: this.newprice,
                img: this.img,
                category: this.category,
                mark: this.mark,
                gallery: this.gallery,
                description: this.description,
                comments: this.comments

            }));
            location.href = './productDetail.html';
        };

    };
}
const big_product_data = [
    new Bigproduct(
        1,
        "./images/product_img/17pro_orange.jpg",
        "STUDIO DESIGN",
        "iPhone 17 pro",
        [
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>'
        ],
        1800,
        2000,
        10,
        3000,
        [
            "https://www.mobilecentre.am/img/prodpic/4a8822417da1096297a9New_Project_-_2025-09-19T105153.521.png",
            "https://www.mobilecentre.am/img/prodpic/2c3ca4e3e45db4a35a48New_Project_-_2025-09-19T105149.635.png",
            "https://www.mobilecentre.am/img/prodpic/c54ecf10d76f4784bcfdNew_Project_-_2025-09-19T105145.751.png",
            "https://www.mobilecentre.am/img/prodpic/9f91aca467b00744519aNew_Project_-_2025-09-19T105141.795.png"
        ],
        [
            {
                img: "https://allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg",
                date: "04.08.2024",
                comm: "Very good product"
            },
            {
                img: "https://ucasports.com/images/2025/7/31/Dude_Person.jpg",
                date: "04.08.2024",
                comm: "Very good product"
            }
        ],
        "Lorem ipsum dolor sit amet consectetur adipisicing elit."

    ),
    new Bigproduct(
        2,
        "https://www.elesen.lt/UserFiles/Products/Images/431325-649916-medium.avif",
        "STUDIO DESIGN",
        "iPhone 17 pro",
        [
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>'
        ],
        1800,
        2000,
        10,
        3000, [
        "https://www.mobilecentre.am/img/prodpic/5b33d396b295ff26371eNew_Project_-_2025-09-19T105208.752.png",
        "https://www.mobilecentre.am/img/prodpic/ef92f0d9d209faa21bb9New_Project_-_2025-09-19T105205.319.png",
        "https://www.mobilecentre.am/img/prodpic/1e33f74aa2a5dd49699cNew_Project_-_2025-09-19T105157.439.png",
        "https://www.mobilecentre.am/img/prodpic/2e53ca4ade41c78569dbNew_Project_-_2025-09-19T105201.373.png"
    ],
        [
            {
                img: "https://allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg",
                date: "04.08.2024",
                comm: "Very good product"
            },
            {
                img: "https://ucasports.com/images/2025/7/31/Dude_Person.jpg",
                date: "04.08.2024",
                comm: "Very good product"
            }
        ],
        "Lorem ipsum dolor sit amet consectetur adipisicing elit."

    ),
]


big_product_data.map((e) => {
    e.renderBig()
})
// TALL PRODUCT CLASS
class Tall_Product {
    constructor(id, img, category, name, mark, newprice, gallery, comments, description) {
        this.id = id
        this.img = img
        this.category = category
        this.name = name
        this.mark = mark
        this.newprice = newprice
        this.gallery = gallery
        this.comments = comments
        this.description = description
    }

    renderTall() {
        var tall_product_div = document.createElement('article')
        tall_product_div.classList.add('tall_product_div')

        tall_product_div.id = this.id;

        tall_product_div.innerHTML = `
        <img src="${this.img}"/>
        <article>
            <h4>${this.category}</h4>
            <h3>${this.name}</h3>
            <ul></ul>
            <p>$${this.newprice}</p>

            <article class="tall_icon_div">
                <button class="tall_icon addtocart"><i class="fa-solid fa-bag-shopping"></i></button>
                <button class="tall_icon addtolikes"><i class="fa-solid fa-heart"></i></button>
            </article>
        </article>
        `
        this.mark.map((e) => {
            const markelem = document.createElement('li');
            markelem.innerHTML = e;
            tall_product_div.querySelector('ul').append(markelem)
        })
        tall_product_div.querySelector('.addtocart').onclick = () => {
            const productData = {
                id: this.id,
                name: this.name,
                price: this.newprice,
                img: this.img
            };
            cart_products.push(productData);
            localStorage.setItem('cartproducts', JSON.stringify(cart_products));
            alert(`${this.name} added to cart!`);
        };


        tall_product_div.querySelector('.addtolikes').onclick = () => {
            const likeProductData = {
                id: this.id,
                name: this.name,
                price: this.newprice,
                img: this.img
            };
            var index = like_products.findIndex(like => like.id === this.id);

            if (index === -1) {
                like_products.push(likeProductData);
                tall_product_div.querySelector('.addtolikes>i').style.color = "red";
                alert(`${this.name} added to likes!`);
            } else {
                like_products.splice(index, 1);
                tall_product_div.querySelector('.addtolikes>i').style.color = "white";
                alert(`${this.name} removed from likes!`);
            }

            localStorage.setItem('likeproducts', JSON.stringify(like_products));
        };

        var tall_product_img = tall_product_div.querySelector('img')
        var tall_product_name = tall_product_div.querySelector('h3')
        tall_product_img.onclick = () => {
            localStorage.setItem('currentProduct', JSON.stringify({
                id: this.id,
                name: this.name,
                price: this.newprice,
                img: this.img,
                category: this.category,
                mark: this.mark,
                gallery: this.gallery,
                description: this.description,
                comments: this.comments
            }));
            location.href = './productDetail.html';
        };

        var isLikedproducts = JSON.parse(localStorage.getItem("likeproducts")) || [];
        var isLiked = isLikedproducts.findIndex(like => String(like.id) === tall_product_div.id);
        if (isLiked === -1) {
            tall_product_div.querySelector('.addtolikes>i').style.color = "white";
        } else {
            tall_product_div.querySelector('.addtolikes>i').style.color = "red";
        }


        document.querySelector('.tall_product_box').appendChild(tall_product_div);
    }
}


const tall_product_data = [
    new Tall_Product(
        1, 
        "https://m.media-amazon.com/images/I/61Ony8rgwEL._AC_UF1000,1000_QL80_.jpg", 
        "STUDIO DESIGN",
         "iPhone 16 pro", 
         [
        '<i class="fa-solid fa-star"></i>',
        '<i class="fa-solid fa-star"></i>',
        '<i class="fa-solid fa-star"></i>',
        '<i class="fa-solid fa-star"></i>',
        '<i class="fa-solid fa-star"></i>'
    ], 1800,
    [
        "https://www.yerevanmobile.am/media/catalog/product/cache/07720dad39bc68bc6b838050c0f2e34d/1/_/1_32.jpg",
        "https://www.yerevanmobile.am/media/catalog/product/cache/07720dad39bc68bc6b838050c0f2e34d/7/7/7777777777777_1_1.jpg",
        "https://www.yerevanmobile.am/media/catalog/product/cache/07720dad39bc68bc6b838050c0f2e34d/9/9/9999999999999_2_1.jpg",
    ],
    [
            {
                img: "https://allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg",
                date: "04.08.2024",
                comm: "Very good product"
            },
            {
                img: "https://ucasports.com/images/2025/7/31/Dude_Person.jpg",
                date: "04.08.2024",
                comm: "Very good product"
            }
        ],
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam velit dignissimos dolore distinctio a cupiditate autem, ducimus dolorem? Asperiores accusantium sint, consequuntur odit nostrum laborum perspiciatis mollitia sed quidem delectus.",

),
    new Tall_Product(2, "https://m.media-amazon.com/images/I/61zU0mI4EsL._AC_UF894,1000_QL80_.jpg", "STUDIO DESIGN", "iPhone 16 pro",
         [
        '<i class="fa-solid fa-star"></i>',
        '<i class="fa-solid fa-star"></i>',
        '<i class="fa-solid fa-star"></i>',
        '<i class="fa-solid fa-star"></i>',
        '<i class="fa-solid fa-star"></i>'
    ], 1800,[
        "https://www.yerevanmobile.am/media/catalog/product/cache/07720dad39bc68bc6b838050c0f2e34d/1/6/16_9_2.jpg",
        "https://www.yerevanmobile.am/media/catalog/product/cache/07720dad39bc68bc6b838050c0f2e34d/2/2/222_1_1.jpg",
        "https://www.yerevanmobile.am/media/catalog/product/cache/07720dad39bc68bc6b838050c0f2e34d/4/4/4444444444_1_1.jpg",
    ],
        [
            {
                img: "https://allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg",
                date: "04.08.2024",
                comm: "Very good product"
            },
            {
                img: "https://ucasports.com/images/2025/7/31/Dude_Person.jpg",
                date: "04.08.2024",
                comm: "Very good product"
            }
        ],
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam velit dignissimos dolore distinctio a cupiditate autem, ducimus dolorem? Asperiores accusantium sint, consequuntur odit nostrum laborum perspiciatis mollitia sed quidem delectus.",

),
    new Tall_Product(3, "https://www.yerevanmobile.am/media/catalog/product/cache/07720dad39bc68bc6b838050c0f2e34d/i/p/iphone_15_pro_max_black_titanium_pdp_image_position-1__ww-en.jpg",
         "STUDIO DESIGN",
         "iPhone 15 pro", 
        [
        '<i class="fa-solid fa-star"></i>',
        '<i class="fa-solid fa-star"></i>',
        '<i class="fa-solid fa-star"></i>',
        '<i class="fa-solid fa-star"></i>',
        '<i class="fa-solid fa-star"></i>'
    ],
     1500,
     [
        "https://www.yerevanmobile.am/media/catalog/product/cache/07720dad39bc68bc6b838050c0f2e34d/i/p/iphone_15_pro_max_black_titanium_pdp_image_position-1__ww-en.jpg",
        "https://www.yerevanmobile.am/media/catalog/product/cache/07720dad39bc68bc6b838050c0f2e34d/i/p/iphone_15_pro_max_black_titanium_pdp_image_position-1_alt__ww-en.jpg",
        "https://www.yerevanmobile.am/media/catalog/product/cache/07720dad39bc68bc6b838050c0f2e34d/i/p/iphone_15_pro_max_black_titanium_pdp_image_position-2__ww-en.jpg",
        "https://www.yerevanmobile.am/media/catalog/product/cache/07720dad39bc68bc6b838050c0f2e34d/i/p/iphone_15_pro_max_black_titanium_pdp_image_position-3__ww-en.jpg",
        "https://www.yerevanmobile.am/media/catalog/product/cache/07720dad39bc68bc6b838050c0f2e34d/i/p/iphone_15_pro_max_black_titanium_pdp_image_position-4__ww-en.jpg"
     ],[
            {
                img: "https://allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg",
                date: "04.08.2024",
                comm: "Very good product"
            },
            {
                img: "https://ucasports.com/images/2025/7/31/Dude_Person.jpg",
                date: "04.08.2024",
                comm: "Very good product"
            }
        ],
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam velit dignissimos dolore distinctio a cupiditate autem, ducimus dolorem? Asperiores accusantium sint, consequuntur odit nostrum laborum perspiciatis mollitia sed quidem delectus.",

),
    new Tall_Product(4, "https://m.media-amazon.com/images/I/71zPJBoDBoL.jpg", 
        "STUDIO DESIGN",
         "iPhone 15 pro",
         [
        '<i class="fa-solid fa-star"></i>',
        '<i class="fa-solid fa-star"></i>',
        '<i class="fa-solid fa-star"></i>',
        '<i class="fa-solid fa-star"></i>',
        '<i class="fa-solid fa-star"></i>'
    ], 
    1500,[
    "https://www.yerevanmobile.am/media/catalog/product/cache/07720dad39bc68bc6b838050c0f2e34d/i/p/iphone_15_pro_max_natural_titanium_pdp_image_position-1__ww-en_2.jpg",
    "https://www.yerevanmobile.am/media/catalog/product/cache/07720dad39bc68bc6b838050c0f2e34d/i/p/iphone_15_pro_max_natural_titanium_pdp_image_position-1_alt__ww-en_2.jpg",
    "https://www.yerevanmobile.am/media/catalog/product/cache/07720dad39bc68bc6b838050c0f2e34d/i/p/iphone_15_pro_max_natural_titanium_pdp_image_position-2__ww-en_2.jpg",
    "https://www.yerevanmobile.am/media/catalog/product/cache/e041c0e587058f4a8df68ba5046f6eeb/i/p/iphone_15_pro_max_natural_titanium_pdp_image_position-3__ww-en_2.jpg",
    "https://www.yerevanmobile.am/media/catalog/product/cache/e041c0e587058f4a8df68ba5046f6eeb/i/p/iphone_15_pro_max_natural_titanium_pdp_image_position-4__ww-en_2.jpg"
    ],    [
            {
                img: "https://allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg",
                date: "04.08.2024",
                comm: "Very good product"
            },
            {
                img: "https://ucasports.com/images/2025/7/31/Dude_Person.jpg",
                date: "04.08.2024",
                comm: "Very good product"
            }
        ],
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam velit dignissimos dolore distinctio a cupiditate autem, ducimus dolorem? Asperiores accusantium sint, consequuntur odit nostrum laborum perspiciatis mollitia sed quidem delectus."

),
]

tall_product_data.forEach((e) => {
    e.renderTall()
})