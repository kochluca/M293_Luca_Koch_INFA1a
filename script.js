//Button um abzusenden
const myFormular = document.querySelector("form");

myFormular?.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(myFormular);

  data.forEach((wert, name) => {
    console.log(`${name}: ${wert}`);
  });

  const popup = document.getElementById("meinPopup");
  popup.showModal();

  myFormular.reset();
});

//Button für Popup schleissung
const closeButton = document.getElementById("close-Button");
closeButton?.addEventListener("click", () => {
  const popup = document.getElementById("meinPopup");
  popup.close();
});

//Produkte und Bilder usw. mit API fetchen

//Smartphones

const getSmartphoneProducts = async () => {
  const response = await fetch(
    "https://dummyjson.com/products/category/smartphones",
  );
  const data = await response.json();

  const products = data.products;
  console.log(products);

  const productList = document.querySelector();

  for (let i = 0; i < products.length; i++) {
    const currentProduct = products[i];
    console.log(currentProduct);
    productList.innerHTML = `
    HTML CODE!!!!!
    <article class="product-card">
          <div class="image-box">
            <img
              class="phonepictures"
              src="/assets/smartphone.webp"
              alt="iPhone 5s"
            />
          </div>
          <div class="product-header">
            <h2>iPhone 5s</h2>
            <div class="price-group">
              <span class="price">649 CHF</span>
              <img src="/assets/cart.png" class="cart-icon" alt="Warenkorb" />
            </div>
          </div>
          <select name="Speicherplatz">
            <option value="" disabled selected hidden>
              Speicherplatz auswählen
            </option>
            <option value="16gb">16 GB</option>
            <option value="32gb">32 GB</option>
            <option value="64gb">64 GB</option>
          </select>
          <p class="description">
            The iPhone 5s is a classic smartphone known for its compact design
            and advanced features during its release. While it's an older model,
            it still provides a reliable user experience.
          </p>
        </article>
    `;
    //Für jedes produkt neue kachel und wie daten dynamisch angezeigt werden sind HAUSAUFGABE          !!!!!!!!!!!!!!!
  }
};

//führt den JavaScript Code aus

document.addEventListener("DOMContentLoaded", () => {
  getSmartphoneProducts();
});
