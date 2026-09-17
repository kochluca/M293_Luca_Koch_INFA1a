//Produkte und Bilder usw. mit API fetchen

//Smartphones

const getSmartphoneProducts = async () => {
  const response = await fetch(
    "https://dummyjson.com/products/category/smartphones",
  );
  const data = await response.json();

  const products = data.products;
  console.log(products);

  const productList = document.querySelector(".product-grid");
  productList.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    const currentProduct = products[i];
    console.log(currentProduct);

    productList.innerHTML += `
    <article class="product-card">
          <div class="image-box">
            <img
              class="phonepictures"
              src="${currentProduct.thumbnail}"
              alt=${currentProduct.title}}
            />
          </div>
          <div class="product-header">
            <h2>${currentProduct.title}</h2>
            <div class="price-group">
              <span class="price">${currentProduct.price}</span>
              <img src="assets/cart.png" class="cart-icon" alt="Warenkorb" />
            </div>
          </div>
          <select name="Speicherplatz" title="speicherplatz auswählen">
            <option value="" disabled selected hidden>
              Speicherplatz auswählen
            </option>
            <option value="32gb">32 GB</option>
            <option value="64gb">64 GB</option>
            <option value="128gb">128 GB</option>
            <option value="256gb">256 GB</option>
          </select>
          <p class="description">
            ${currentProduct.description}
          </p>
        </article>
    `;
  }
};

//Laptop Produkte mit API fetchen und auf der Seite anzeigen lassen

const getLaptopProducts = async () => {
  const response = await fetch(
    "https://dummyjson.com/products/category/laptops",
  );
  const data = await response.json();
  const products = data.products;
  console.log(products);

  const productList = document.querySelector(".product-grid");
  productList.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    const currentProduct = products[i];
    console.log(currentProduct);

    productList.innerHTML += `
        <article class="product-card">
          <div class="image-box">
            <img
              class="phonepictures"
              src="${currentProduct.thumbnail}"
              alt="${currentProduct.title}"
            />
          </div>
          <div class="product-header">
            <h2>${currentProduct.title}</h2>
            <div class="price-group">
              <span class="price">${currentProduct.price}</span>
              <img src="assets/cart.png" class="cart-icon" alt="Warenkorb" />
            </div>
          </div>
          <p class="description">
            ${currentProduct.description}
          </p>
        </article>
    `;
  }
};

//Tablets auf der tablet.html seite anzeigen lassen

const getTabletProducts = async () => {
  const response = await fetch(
    "https://dummyjson.com/products/category/tablets",
  );
  const data = await response.json();
  const products = data.products;
  console.log(products);

  const productList = document.querySelector(".product-grid");
  productList.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    const currentProduct = products[i];
    console.log(currentProduct);

    productList.innerHTML += `
        <article class="product-card">
          <div class="image-box">
            <img
              class="phonepictures"
              src="${currentProduct.thumbnail}"
              alt=${currentProduct.title}
            />
          </div>
          <div class="product-header">
            <h2>${currentProduct.title}</h2>
            <div class="price-group">
              <span class="price">${currentProduct.price}</span>
              <img src="assets/cart.png" class="cart-icon" alt="Warenkorb" />
            </div>
          </div>
          <p class="description">
            ${currentProduct.description}
          </p>
        </article>
    `;
  }
};

//führt den JavaScript Code aus
//Mit KI erstellt, da ich nicht wusste wie ich auf der Laptop Seite nur die Laptops angezeigt bekomme

document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;

  if (path.includes("laptop")) {
    getLaptopProducts();
  } else if (path.includes("tablet")) {
    getTabletProducts();
  } else {
    getSmartphoneProducts();
  }
});
