let ShoppingCart = document.getElementById('shopping-cart');

let basket = JSON.parse(localStorage.getItem('data')) || [];

console.log(basket);
let calculation = () => {
  let cartIcon = document.getElementById('cartAmount');
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

let generateCartItems = () => {
  if (basket.length !== 0) {
    return (ShoppingCart.innerHTML = basket
      .map((x) => {
        let { id, item } = x;
        let search = shopItemsData.find((y) => y.id === id) || [];
        console.log(search);
        return `
        
    <tr>
                  <!-- image -->
                  <td class="d-none d-sm-table-cell">
                    <picture class="d-block bg-light p-3 ">
                      <img
                        class="img-fluid"
                        src=${search.img}
                        alt=""
                      />
                    </picture>
                  </td>
                  <!-- image -->

                  <!-- Details -->
                  <td>
                    <div class="">
                      <h6 class="mb-2 fw-bolder">
                       ${search.name}
                      </h6>
                    </div>
                  </td>
                  <!-- Details -->

                  <!-- Qty -->
                  <td>
                    <div class="px-2">
                      <span class="small text-muted mt-1">1 <br/> $${
                        item * search.price
                      }</span>
                    </div>
                  </td>
                  <!-- /Qty -->

                  <!-- Actions -->
                    <td>
                    <div class="px-3">
                        <i id=${id} onclick="decrement(${id})" class="fas fa-times cursor"></i>
                    </div>
                  </td>
                  <!-- /Actions -->
                </tr>

      `;
      })
      .join(''));
  } else {
    ShoppingCart.innerHTML = ``;
    label.innerHTML = `
    <h2>Cart is Empty</h2>
    <a href="courses.html">
      <button class="HomeBtn">Back to courses</button>
    </a>
    `;
  }
};

generateCartItems();

let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  generateCartItems();
  localStorage.setItem('data', JSON.stringify(basket));
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
  TotalAmount();
};

let removeItem = (id) => {
  let selectedItem = id;
  // console.log(selectedItem.id);
  basket = basket.filter((x) => x.id !== selectedItem.id);
  generateCartItems();
  TotalAmount();
  localStorage.setItem('data', JSON.stringify(basket));
};

let clearCart = () => {
  basket = [];
  generateCartItems();
  localStorage.setItem('data', JSON.stringify(basket));
  subTotal.innerHTML = `
    <span>$ 0</span>
    `;
  grandTotal.innerHTML = `
    <span>$ 0</span>
    `;
  cartAmount.innerHTML = 0;
  btnRemoveAll.innerHTML = `
   <button onclick="clearCart()" class="d-none">Clear Cart</button>
    `;
};

let TotalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { item, id } = x;
        let search = shopItemsData.find((y) => y.id === id) || [];

        return item * search.price;
      })
      .reduce((x, y) => x + y, 0);
    // console.log(amount);
    subTotal.innerHTML = `
    <span>$ ${amount}</span>
    `;
    btnRemoveAll.innerHTML = `
   <button onclick="clearCart()" class="btn btn-white w-100 text-center mt-3">Clear Cart</button>
    `;
    if (amount > 0) {
      grandTotal.innerHTML = `
    <span>$ ${amount + 10}</span>
    `;
    } else {
      grandTotal.innerHTML = `
    <span>$ 0</span>
    `;
    }
  } else return;
};

TotalAmount();
