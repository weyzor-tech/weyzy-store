var cart_products = JSON.parse(localStorage.getItem('cartproducts')) || [];

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
            <ul id="mark_list"></ul>
            <p>$${this.newprice}</p>

            <article class="tall_icon_div">
                <button class="tall_icon addtocart"><i class="fa-solid fa-bag-shopping"></i></button>
                <button class="tall_icon addtolikes"><i class="fa-solid fa-heart"></i></button>
            </article>
        </article>
        `
        // tall_product_div.querySelector('img').onclick=()=>{
        //     localStorage.setItem('currentproduct',JSON.stringify({
        //          id: this.id,
        //         name: this.name,
        //         price: this.newprice,
        //         img: this.img
        //     }))
        // }\
        this.mark.map(star => {
            tall_product_div.querySelector('#mark_list').innerHTML += star;
        });
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

        var like_products = JSON.parse(localStorage.getItem('likeproducts')) || [];

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


        document.querySelector('.shop_product_box').appendChild(tall_product_div);
    }
}

const tall_product_data = [
    new Tall_Product(
        1,
        "./images/product_img/16pro_orange.jpg",
        "STUDIO DESIGN",
        "iPhone 16 pro",
        [
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>'
        ],
        999,
        [
            "https://www.yerevanmobile.am/media/catalog/product/cache/07720dad39bc68bc6b838050c0f2e34d/1/6/16_9_2.jpg",
            "https://www.yerevanmobile.am/media/catalog/product/cache/07720dad39bc68bc6b838050c0f2e34d/2/2/222_1_1.jpg",
            "https://www.yerevanmobile.am/media/catalog/product/cache/07720dad39bc68bc6b838050c0f2e34d/4/4/4444444444_1_1.jpg",
            "https://www.mobilecentre.am/img/prodpic/2d5d06f21f9b671adf6aiPhone_16_Pro_Max_Desert_Titanium_PDP_Image_Position_1b__ce-WW.jpg"
        ],
        [
            {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyY4Dk7MPITQqsIs0L_gu0sDrMEyzTQGs7Nw&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyY4Dk7MPITQqsIs0L_gu0sDrMEyzTQGs7Nw&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyY4Dk7MPITQqsIs0L_gu0sDrMEyzTQGs7Nw&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyY4Dk7MPITQqsIs0L_gu0sDrMEyzTQGs7Nw&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyY4Dk7MPITQqsIs0L_gu0sDrMEyzTQGs7Nw&s",
                date: "04.08.2024",
                comm: "Very good product"
            }
        ],
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eum eos odit tempore error aut omnis architecto dolor saepe, enim ducimus inventore iste quis molestiae cumque dolorem rem soluta laudantium."
    ), new Tall_Product(
        2,
        "./images/product_img/16pro_black.jpg",
        "STUDIO DESIGN",            
        "iPhone 16 pro",
        [
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>'
        ],
        999,
        [
            "https://www.yerevanmobile.am/media/catalog/product/cache/07720dad39bc68bc6b838050c0f2e34d/1/_/1_32.jpg",
            "https://www.yerevanmobile.am/media/catalog/product/cache/458301a94a1ed4bc2cc89308945d1c65/7/7/7777777777777_1_1.jpg",
            "https://www.yerevanmobile.am/media/catalog/product/cache/07720dad39bc68bc6b838050c0f2e34d/9/9/9999999999999_2_1.jpg",
        ],
        [
            {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyY4Dk7MPITQqsIs0L_gu0sDrMEyzTQGs7Nw&s",
                date: "04.08.2024",
                comm: "Very good Product"
            }
        ],
        "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    ),

    new Tall_Product(
        3,
        "./images/product_img/17pro_black.jpg",
        "STUDIO DESIGN",
        "iPhone 17 pro",
        [
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>'
        ],
        1099,
        [
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

    new Tall_Product(
        4,
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
        1099,
        [
            "https://www.mobilecentre.am/img/prodpic/4a8822417da1096297a9New_Project_-_2025-09-19T105153.521.png",
            "https://www.mobilecentre.am/img/prodpic/2c3ca4e3e45db4a35a48New_Project_-_2025-09-19T105149.635.png",
            "https://www.mobilecentre.am/img/prodpic/c54ecf10d76f4784bcfdNew_Project_-_2025-09-19T105145.751.png",
            "https://www.mobilecentre.am/img/prodpic/9f91aca467b00744519aNew_Project_-_2025-09-19T105141.795.png"
        ],
        [
            {
                img: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e",
                date: "04.08.2024",
                comm: "Very good product"
            }, {
                img: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg",
                date: "04.08.2024",
                comm: "Very good product"
            }
        ],
        "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    ),

    new Tall_Product(
        5,
        "./images/product_img/17 pink.jpg",
        "STUDIO DESIGN",
        "iPhone 17",
        [
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>'
        ],
        799,
        [
            "https://www.mobilecentre.am/img/prodpic/2234d35c8332e33bfed8New_Project_-_2025-09-19T111118.050.png",
            "https://www.mobilecentre.am/img/prodpic/6c0a1b006764a36feeb5New_Project_-_2025-09-19T111115.106.png",
            "https://www.mobilecentre.am/img/prodpic/c2642f990993da6a2c29New_Project_-_2025-09-19T111111.260.png",
            "https://www.mobilecentre.am/img/prodpic/e00a133bd3a4d0b9853bNew_Project_-_2025-09-19T111108.094.png"
        ],
        [
            {
                img: "https://a.espncdn.com/combiner/i?img=/i/headshots/college-football/players/full/5152030.png",
                date: "04.08.2024",
                comm: "Very good product"
            },
            {
                img: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg",
                date: "04.08.2024",
                comm: "Very good product"
            }
        ],
        "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    ),

    new Tall_Product(
        6,
        "./images/product_img/17green.jpg",
        "STUDIO DESIGN",
        "iPhone 17",
        [
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>'
        ],
        799,
        [
            "https://www.mobilecentre.am/img/prodpic/cb65629ef59738bd26d5New_Project_-_2025-09-19T111236.354.png",
            "https://www.mobilecentre.am/img/prodpic/26826aef66b434294659New_Project_-_2025-09-19T111232.778.png    ",
            "https://www.mobilecentre.am/img/prodpic/11ce57eb4047c83ee2baNew_Project_-_2025-09-19T111228.643.png",
            "https://www.mobilecentre.am/img/prodpic/f14c4add249eaf7ff6baNew_Project_-_2025-09-19T111223.837.png"
        ],
        [
            {
                img: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg",
                date: "04.08.2024",
                comm: "Very good product"
            },
            {
                img: "https://caricom.org/wp-content/uploads/Floyd-Morris-Remake-1024x879-1.jpg",
                date: "04.08.2024",
                comm: "Very good product"
            }
        ],
        "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    ),

    new Tall_Product(
        7,
        "./images/product_img/17blue.jpg",
        "STUDIO DESIGN",
        "iPhone 17",
        [
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>'
        ],
        799,
        [
            "https://www.mobilecentre.am/img/prodpic/ac320ba014fb703136c4New_Project_-_2025-09-19T111202.675.png",
            "https://www.mobilecentre.am/img/prodpic/6eb6ed9845369ffcb626New_Project_-_2025-09-19T111159.791.png",
            "https://www.mobilecentre.am/img/prodpic/8615e77d543224fa84ebNew_Project_-_2025-09-19T111154.900.png",
            "https://www.mobilecentre.am/img/prodpic/db824f281c58b33ef493New_Project_-_2025-09-19T111151.762.png",

        ],
        [
            {
                img: "https://caricom.org/wp-content/uploads/Floyd-Morris-Remake-1024x879-1.jpg",
                date: "04.08.2024",
                comm: "Very good product"
            },
            {
                img: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg",
                date: "04.08.2024",
                comm: "Very good product"
            }
        ],
        "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    ),

    new Tall_Product(
        8,
        "./images/product_img/17white.jpg",
        "STUDIO DESIGN",
        "iPhone 17",
        [
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>'
        ],
        799,
        [
            "https://www.mobilecentre.am/img/prodpic/b4e5ebacd863d7bf3781New_Project_-_2025-09-19T111310.759.png",
            "https://www.mobilecentre.am/img/prodpic/fc3c4c6b5d1078c47241New_Project_-_2025-09-19T111308.162.png    ",
            "https://www.mobilecentre.am/img/prodpic/d6b8ecceeafd7976c161New_Project_-_2025-09-19T111303.131.png",
            "https://www.mobilecentre.am/img/prodpic/58115279fc222a9ba6b8New_Project_-_2025-09-19T111300.040.png"
        ],
        [
            {
                img: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg",
                date: "04.08.2024",
                comm: "Very good product"
            }
        ],
        "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    ),

    new Tall_Product(
        9,
        "./images/product_img/Apple-iPhone-Air-Sky-Blue.jpg",
        "STUDIO DESIGN",
        "iPhone Air",
        [
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>'
        ],
        999,
        [
            "https://www.mobilecentre.am/img/prodpic/9fba26866d66a3888939New_Project_-_2025-09-19T110133.050.png",
            "https://www.mobilecentre.am/img/prodpic/8b80e9627d161e6a0a25New_Project_-_2025-09-19T110128.994.png",
            "https://www.mobilecentre.am/img/prodpic/689b78c75b51c87510ffNew_Project_-_2025-09-19T110121.266.png",
            "https://www.mobilecentre.am/img/prodpic/baa8a426f36b53ce30a6New_Project_-_2025-09-19T110124.906.png"
        ],
        [
            {
                img: "https://t4.ftcdn.net/jpg/03/03/11/75/360_F_303117590_NNmo6BS2fOBEmDp8uKs2maYmt03t8fSL.jpg",
                date: "04.08.2024",
                comm: "Very good product"
            },
            {
                img: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg",
                date: "04.08.2024",
                comm: "Very good product"
            }
        ],
        "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    ),
    new Tall_Product(
        10,
        "./images/product_img/canon.jpg",
        "STUDIO DESIGN",
        "Canon Camera",
        [
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>'
        ],
        710,
        [
            "https://s7d1.scene7.com/is/image/canon/2727C002_eos-rebel-t7-ef-s-18-55mm-is-ii-kit_primary?fmt=webp-alpha&wid=800",
            "https://s7d1.scene7.com/is/image/canon/2727C002_eos-rebel-t7-ef-s-18-55mm-is-ii-kit_4?fmt=webp-alpha&wid=800",
            "https://s7d1.scene7.com/is/image/canon/2727C002_eos-rebel-t7-ef-s-18-55mm-is-ii-kit_5?fmt=webp-alpha&wid=800",
            "https://s7d1.scene7.com/is/image/canon/2727C002_eos-rebel-t7-ef-s-18-55mm-is-ii-kit_3?fmt=webp-alpha&wid=800"
        ],
        [
            {
                img: "https://img.freepik.com/free-photo/handsome-young-cheerful-man-with-arms-crossed_171337-1073.jpg?semt=ais_hybrid&w=740&q=80",
                date: "04.08.2024",
                comm: "Very good product"
            },
            {
                img: "https://ucasports.com/images/2025/7/31/Dude_Person.jpg",
                date: "04.08.2024",
                comm: "Very good product"
            },
            {
                img: "https://res.cloudinary.com/jerrick/image/upload/v1703775884/658d8e8b8dd72e001dd80289.jpg",
                date: "04.08.2024",
                comm: "Very good product"
            }
        ],
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eum eos odit tempore error aut omnis architecto dolor saepe."
    ),

    new Tall_Product(
        14,
        "https://www.yerevanmobile.am/media/catalog/product/cache/07720dad39bc68bc6b838050c0f2e34d/d/s/dsc_2111a.jpg",
        "STUDIO DESIGN",
        "Dualsense",
        [
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>'
        ],
        79,
        [
            "https://www.yerevanmobile.am/media/catalog/product/cache/e041c0e587058f4a8df68ba5046f6eeb/d/s/dsc_2111a.jpg",
            "https://www.yerevanmobile.am/media/catalog/product/cache/e041c0e587058f4a8df68ba5046f6eeb/d/s/dsc_2113a.jpg",
            "https://www.yerevanmobile.am/media/catalog/product/cache/07720dad39bc68bc6b838050c0f2e34d/d/s/dsc_2114a.jpg"
        ],
        [
            {
                img: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg",
                date: "04.08.2024",
                comm: "Very good product"
            },
            {
                img: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg",
                date: "04.08.2024",
                comm: "Very good product"
            }
        ],
        "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    ),

    new Tall_Product(
        15,
        "./images/product_img/gopro.jpg",
        "STUDIO DESIGN",
        "Go Pro",
        [
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>'
        ],
        420,
        [
            "https://cdn2.louis.de/dynamic/articles/o_resize,w_200,h_200,m_limit,c_fff::o_extension,e_webp/4d.29.1d.ARG10076042GoProHero13SportBundleD2.JPG",
            "https://cdn2.louis.de/dynamic/articles/o_resize,w_1800,h_1800,m_limit,c_fff::o_extension,e_webp/5d.93.8d.ARG10076042GoProHero13SportBundleD1.JPG",
            "https://cdn2.louis.de/dynamic/articles/o_resize,w_1800,h_1800,m_limit,c_fff::o_extension,e_webp/45.8c.7f.ARG10076042GoProHero13SportBundleE3.JPG",
            "https://cdn2.louis.de/dynamic/articles/o_resize,w_1800,h_1800,m_limit,c_fff::o_extension,e_webp/a7.1f.08.ARG10076042GoProHero13SportBundleE2.JPG"
        ],
        [
            {
                img: "https://www.mnp.ca/-/media/foundation/integrations/personnel/2020/12/16/13/57/personnel-image-4483.jpg?h=800&iar=0&w=600&hash=833D605FDB6AC3C2D2915F6BF8B4ADA4",
                date: "04.08.2024",
                comm: "Very good product"
            },
            {
                img: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg",
                date: "04.08.2024",
                comm: "Very good product"
            }
        ],
        "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    ),

    new Tall_Product(
        16,
        "./images/product_img/meta_quest.jpg",
        "STUDIO DESIGN",
        "Meta Quest 3",
        [
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>'
        ],
        499,
        [
            "https://lookaside.fbsbx.com/elementpath/media/?media_id=1560611838183151&version=1772548871&transcode_extension=webp",
            "https://lookaside.fbsbx.com/elementpath/media/?media_id=997546762175495&version=1772548871&transcode_extension=webp",
            "https://lookaside.fbsbx.com/elementpath/media/?media_id=1222408552891736&version=1772548871&transcode_extension=webp",
            "https://lookaside.fbsbx.com/elementpath/media/?media_id=1656151888438046&version=1772548871&transcode_extension=webp"
        ],
        [
            {
                img: "https://images.squarespace-cdn.com/content/v1/638f52162f1c55090dc1a9fc/46e1d1c1-4c4f-42e8-bb73-d803e9745475/David+Person%2C+M.D.+Orthopedic+Hand+Surgeon+in+San+Antonio+at+the+the+Hand+and+Upper+Extremity+Center+of+San+Antonio",
                date: "04.08.2024",
                comm: "Very good product"
            },
            {
                img: "https://img.freepik.com/free-photo/handsome-young-cheerful-man-with-arms-crossed_171337-1073.jpg?semt=ais_hybrid&w=740&q=80",
                date: "04.08.2024",
                comm: "Very good product"
            },
            {
                img: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg",
                date: "04.08.2024",
                comm: "Very good product"
            }
        ],
        "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    ),

    new Tall_Product(
        17,
        "https://eldorado.am/media/catalog/product/cache/b636eac9f5e866652b5cbe8cee86d97c/a/p/apple_vision_pro_4__1.jpg",
        "STUDIO DESIGN",
        "Apple Vision Pro",
        [
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>'
        ],
        3499,
        [
            "https://eldorado.am/media/catalog/product/cache/b636eac9f5e866652b5cbe8cee86d97c/a/p/apple_vision_pro_4__1.jpg",
            "https://eldorado.am/media/catalog/product/cache/b636eac9f5e866652b5cbe8cee86d97c/a/p/apple_vision_pro_3__-_copy.jpg",
            "https://eldorado.am/media/catalog/product/cache/b636eac9f5e866652b5cbe8cee86d97c/a/p/apple_vision_pro_6__-_copy.jpg",
            "https://eldorado.am/media/catalog/product/cache/b636eac9f5e866652b5cbe8cee86d97c/a/p/apple_vision_pro_5__-_copy.jpg"
        ],
        [
            {
                img: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg",
                date: "04.08.2024",
                comm: "Very good product"
            }
        ],
        "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    ),

    new Tall_Product(
        18,
        "https://www.yerevanmobile.am/media/catalog/product/cache/e041c0e587058f4a8df68ba5046f6eeb/6/1/61z8y0y2b0l._ac_uf894_1000_ql80__1.jpg",
        "STUDIO DESIGN",
        "Apple Watch Series 10",
        [
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>',
            '<i class="fa-solid fa-star"></i>'
        ],
        399,
        [
            "https://www.yerevanmobile.am/media/catalog/product/cache/e041c0e587058f4a8df68ba5046f6eeb/6/1/61z8y0y2b0l._ac_uf894_1000_ql80__1.jpg",
            "https://www.yerevanmobile.am/media/catalog/product/cache/e041c0e587058f4a8df68ba5046f6eeb/6/1/61hnbgl8dyl._ac_sl1500__1.jpg"
        ],
        [
            {
                img: "https://ucasports.com/images/2025/7/31/Dude_Person.jpg",
                date: "04.08.2024",
                comm: "Very good product"
            }, {
                img: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg",
                date: "04.08.2024",
                comm: "Very good product"
            }
        ],
        "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    )]

tall_product_data.forEach((e) => {
    e.renderTall()
})


