const addToCart = document.querySelector(".add_to_cart");
const prodName = document.querySelector(".h_title").innerHTML;
const price = document.querySelector(".prod_price").innerHTML;
const img = document.querySelector('.prod_img_for_page').getAttribute('src');
addToCart.addEventListener("click", (e) => {
  const count = document.querySelector(".counter_for_prod").innerHTML;
  let cartData = JSON.parse(decodeURIComponent(localStorage.getItem("cart")));
  if (cartData == null) {
    localStorage.setItem(
      "cart",
      encodeURIComponent(
        JSON.stringify({
          [prodName]: {
            name: prodName,
            price: price,
            count: count,
            img: img
          },
        })
      )
    );
  } else {
    const newItem = {
      [prodName]: {
        name: prodName,
        price: price,
        count: count,
        img: img
      },
    };
    const newCart = {...cartData, ...newItem}
    localStorage.setItem("cart", encodeURIComponent(JSON.stringify(newCart)));
  }
});
