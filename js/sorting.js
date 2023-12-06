const allElements = document.querySelectorAll('.cards');
const filter = document.querySelector('.select_catalogue');
const container = document.querySelector('.catalogue');
console.log(container);
filter.addEventListener('change', event => {
    if(event.target.value === 'cheaper') {
        const sortedElements = Array.from(allElements).sort((a, b) => {
            const aPrice = Number(a.querySelector('.price').innerHTML.slice(1))
            const bPrice = Number(b.querySelector('.price').innerHTML.slice(1))
            return aPrice- bPrice;
        })
        container.innerHTML = '';
        sortedElements.forEach(el => {
            container.appendChild(el);
        })
    } else
    if(event.target.value === 'expensive') {
        const sortedElements = Array.from(allElements).sort((a, b) => {
            const aPrice = Number(a.querySelector('.price').innerHTML.slice(1))
            const bPrice = Number(b.querySelector('.price').innerHTML.slice(1))
            return bPrice - aPrice;
        })
        container.innerHTML = '';
        sortedElements.forEach(el => {
            container.appendChild(el);
        })
    } 
    else {
        const sortedElements = Array.from(allElements).sort((a, b) => {
            const aName = a.querySelector('.product-card__title').innerHTML;
            const bName = b.querySelector('.product-card__title').innerHTML;
            if (aName.toLowerCase() > bName.toLowerCase()) {
                return 1;
            }
            else if (aName.toLowerCase() < bName.toLowerCase()){
                return -1;
            }
            else return 0;
        })
        container.innerHTML = '';
        sortedElements.forEach(el => {
            container.appendChild(el);
        })
    }
})