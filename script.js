//Button um abzusenden
const myButton = document.querySelector(".SendButton");
myButton.addEventListener("click", (e) => {
  e.preventDefault();

  const myFormular = document.querySelector("form");
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
closeButton.addEventListener("click", () => {
  const popup = document.getElementById("meinPopup");
  popup.close();
});
