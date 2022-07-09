let shop = document.getElementById('shop');

let basket = JSON.parse(localStorage.getItem('data')) || [];
let test = [];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, desc, img } = x;
      let search = basket.find((x) => x.id === id) || [];
      return `
      <div class="col">
    <div id=product-id-${id} class="card">
        <img class="card-img-top" src=${img} alt="test">
        <div class="card-body">
          <h3 class="card-title">${name}</h3>
          <p class="card-text">${desc}</p>
          <div class="price-quantity">
            <h2>$ ${price} </h2>
            <div class="buttons">
             <button onclick="details(${id})" class="btn-cart" data-mdb-toggle="modal" data-mdb-target="#exampleModal"><i class="fas fa-search"></i></button>
              <button id=${id} onclick="increment(${id})" class="btn-cart"><i class="fas fa-cart-plus"></i></button>
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
  }

  // console.log(basket);
  update(selectedItem.id);
  localStorage.setItem('data', JSON.stringify(basket));
};

let details = (id) => {
  let search = shopItemsData.find((x) => x.id === id.id);

  exampleModalLabel.innerHTML = `${search.name}`;
  exampleModalBody.innerHTML = `
  <img class="card-img-top" src=${search.img} alt="test"/>
  <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga tempore necessitatibus, dignissimos fugiat amet quas? Nostrum voluptate numquam ipsa corrupti in deserunt odit iusto laboriosam velit, at ipsum placeat harum maiores sapiente. Optio illum dolor laborum ut tempora eos quasi quisquam. Ea pariatur asperiores architecto, eum nam eos tempore hic est numquam culpa rerum enim illo! Minus, nostrum possimus ex quas ipsa quaerat incidunt at culpa, repellat officiis fugit? Quasi maiores mollitia excepturi ex tenetur natus numquam labore accusantium exercitationem earum similique eius, iure qui repudiandae? Unde blanditiis aut eius, quaerat necessitatibus minima esse tempore molestiae quisquam accusantium quidem illo?</p>
  `;
  modalFooterCart.innerHTML = `
  <button onclick="increment(${search.id})" class="btn-cart"><i class="fas fa-cart-plus"></i></button>
     <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
  `;
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

let signUp = document.getElementById('signup');
let signIn = document.getElementById('sign');
let signInPage = document.querySelector('.signinpage');
let signInForm = document.querySelector('.signinform');
let signUpPage = document.querySelector('.signuppage');
let signUpForm = document.querySelector('.signupform');
let container1 = document.querySelector('.container-1');
let container2 = document.querySelector('.container-2');

signUp.addEventListener('click', function () {
  signInPage.classList.remove('none');
  signInForm.classList.add('none');
  signUpPage.classList.add('none');
  signUpForm.classList.remove('none');
  container1.classList.add('bcolor1');
  container2.classList.remove('bcolor1');
});
signIn.addEventListener('click', function () {
  signInPage.classList.add('none');
  signInForm.classList.remove('none');
  signUpForm.classList.add('none');
  signUpPage.classList.remove('none');
  container2.classList.add('bcolor1');
  container1.classList.remove('bcolor1');
});
