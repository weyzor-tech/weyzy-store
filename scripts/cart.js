const cartproducts = JSON.parse(localStorage.getItem('cartproducts'));
var count = 1
cartproducts.map((cartproduct, index) => {
    const cartproductelem = document.createElement('tr');
    cartproductelem.innerHTML = `
    <tr>
    <td>
    <img src = "${cartproduct.img}"/>
    </td>
    <td>
    <h3>${cartproduct.name}</h3>
    </td>

    <td>
    <span>$${cartproduct.price * count}</span>
    </td>
    <td>
        <div class="product_buttons">
        <button id="minus_btn"><i class="fa-solid fa-minus"></i></button>
        <span>${count}</span>
        <button id="plus_btn"><i class="fa-solid fa-plus"></i></button>
        </div>
    </td>
    <td>
    <button class="delete"><i class="fa-solid fa-trash-can"></i></button>
    </td>

    </tr>
    `
    cartproductelem.querySelector("#minus_btn").onclick = () => {
        if (count > 1) {
            count--
            cartproductelem.querySelector('.product_buttons span').textContent = count
            cartproductelem.querySelector('span').textContent = `$${cartproduct.price * count}`
        }
    }

    cartproductelem.querySelector("#plus_btn").onclick = () => {
        count++
        cartproductelem.querySelector('.product_buttons span').textContent = count
            cartproductelem.querySelector('span').textContent = `$${cartproduct.price * count}`

    }

    cartproductelem.querySelector('.delete').onclick = () => {
        cartproducts.splice(index, 1);
        localStorage.setItem('cartproducts', JSON.stringify(cartproducts));
        cartproductelem.remove();
    }

    document.querySelector('table').append(cartproductelem)
})