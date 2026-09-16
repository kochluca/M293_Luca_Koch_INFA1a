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
