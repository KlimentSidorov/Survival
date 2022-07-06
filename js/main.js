let shop = document.getElementById('shop');

let basket = JSON.parse(localStorage.getItem('data')) || [];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, desc, img } = x;
      let search = basket.find((x) => x.id === id) || [];
      return `
      <div class="col">
    <div id=product-id-${id} class="card">
        <img class="card-img-top" src=${img} alt="">
        <div class="card-body">
          <h3 class="card-title">${name}</h3>
          <p class="card-text">${desc}</p>
          <div class="price-quantity">
            <h2>$ ${price} </h2>
            <div class="buttons">
              <button id=${id} onclick="increment(${id})" class="btn-cart">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    `;
    })
    .join(''));
};

generateShop();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });

    let btn = document
      .getElementById(selectedItem.id)
      .setAttribute('disabled', '');
    console.log(btn);
  }

  // console.log(basket);
  update(selectedItem.id);
  localStorage.setItem('data', JSON.stringify(basket));
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  // console.log(search.item);
  calculation();
};

let calculation = () => {
  let cartIcon = document.getElementById('cartAmount');
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();
