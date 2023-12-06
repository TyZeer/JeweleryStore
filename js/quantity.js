const quanities = document.querySelectorAll('.quant');
quanities.forEach(el => {
    el.addEventListener('click', e => {
        let counter = el.querySelector('.counter_for_prod');
        if(e.target === el.querySelector('.minus_prod') && Number(counter.innerHTML) > 1) {
            counter.innerHTML = Number(counter.innerHTML) - 1;
            if(el.closest('.item_js')) {
                const totalCost = document.querySelector('.opts_total_num');
                totalCost.innerHTML = Number(totalCost.innerHTML) - Number(el.closest('.item_js').querySelector('.cart_it_price').innerHTML.slice(1))
            }
        } 
        else if (e.target === el.querySelector('.plus_prod') && Number(counter.innerHTML) < 100) {
            counter.innerHTML = Number(counter.innerHTML) + 1;
            if(el.closest('.item_js')) {
                const totalCost = document.querySelector('.opts_total_num');
                totalCost.innerHTML = Number(totalCost.innerHTML) + Number(el.closest('.item_js').querySelector('.cart_it_price').innerHTML.slice(1))
            }
        }
    })
})