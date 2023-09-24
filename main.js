const spanCantidadHelados = document.querySelector("#span-cantidad-helados");
const btnClickHelados = document.querySelector("#btn-click-helado");

let juego = {
  helados: 0,
  poderClick: 1,
};

function sumarHelados(helados) {
  juego.helados += helados;
}

function actualizarDisplay() {
  actualizarSpanHelados();
}

function actualizarSpanHelados() {
  spanCantidadHelados.textContent = juego.helados;
}

btnClickHelados.addEventListener("click", () => {
  sumarHelados(juego.poderClick);
  actualizarDisplay();
});
