const cartPrice = document.querySelector('.opts_total_num')
const cartContainer = document.querySelector('.item_cont');

const cartData = JSON.parse(decodeURIComponent(localStorage.getItem('cart')))

for (const key in cartData) {
    cartContainer.innerHTML += 
    `<article class="cart_item_js item_js">
    <div class="cart-item__content">
        <img src="${cartData[key].img}" alt="" class="prod_img_for_page">
        <div class="info_prod_cart">
            <h2 class="cart_title">${cartData[key].name}</h2>
            <span class="cart_it_price">${cartData[key].price}</span>
        </div>
    </div>
    <div class="cart_func">
        <div class="cart_tem_quant quant">
            <img src="./image/minus.svg" alt="Минус" class="minus_prod">
            <span class="counter_for_prod">${cartData[key].count}</span>
            <img src="./image/plus.svg" alt="Плюс" class="plus_prod">
        </div>
        <img src="./image/close.svg" alt="" class="close">
    </div>
</article>`;
cartPrice.innerHTML = Number(cartPrice.innerHTML) + (Number(cartData[key].price.slice(1)) * Number(cartData[key].count))
}

const closeBtns = document.querySelectorAll('.close');

closeBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        const curItem = e.target.closest('.item_js');
        const curPrice = Number(curItem.querySelector('.cart_it_price').innerHTML.slice(1))
        const curCounter = Number(curItem.querySelector('.counter_for_prod').innerHTML)
        cartPrice.innerHTML = Number(cartPrice.innerHTML) - (curPrice * curCounter);
        delete cartData[curItem.querySelector('.cart_title').innerHTML];
        localStorage.setItem('cart', encodeURIComponent(JSON.stringify(cartData)));
        cartContainer.removeChild(curItem);
    })
})

document.querySelector('.opts_button').addEventListener('click', e => {
    localStorage.setItem('totalPrice', cartPrice.innerHTML);
})