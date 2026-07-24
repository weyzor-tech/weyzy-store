const likeproducts = JSON.parse(localStorage.getItem('likeproducts'));
var count = 1
likeproducts.map((likeproduct, index) => {
    const likeproductelem = document.createElement('tr');
    likeproductelem.innerHTML = `
    <tr>
    <td>
    <img src = "${likeproduct.img}"/>
    </td>
    <td>
    <h3>${likeproduct.name}</h3>
    </td>
    <td>
    <span>$${likeproduct.price * count}</span>
    </td>
    <td class="likeproductelem_buttons">
    <button class="delete"><i class="fa-solid fa-trash-can"></i></button>
<button class="addtocart likeproductadd"><i class="fa-solid fa-cart-shopping"></i></button>
    </td>
    </tr>
    `
    likeproductelem.classList.add('likeproductelem')

    var cart_products = JSON.parse(localStorage.getItem('cartproducts')) || []
    
    likeproductelem.querySelector('.delete').onclick = () => {
        likeproducts.splice(index, 1);
        localStorage.setItem('likeproducts', JSON.stringify(likeproducts));
        likeproductelem.remove();
    }

     likeproductelem.querySelector('.addtocart').onclick = () => {
            const productData = {
                id: likeproduct.id,
                name: likeproduct.name,
                price: likeproduct.price,
                img: likeproduct.img
            };
            cart_products.push(productData);
            localStorage.setItem('cartproducts', JSON.stringify(cart_products));
            alert(`${likeproduct.name} added to cart!`);
        };


    document.querySelector('table').append(likeproductelem)
})