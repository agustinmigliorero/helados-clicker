const spanCantidadHelados = document.querySelector("#span-cantidad-helados");
const btnClickHelados = document.querySelector("#btn-click-helado");
const contenedorBotonesEdificios = document.querySelector(
  "#contenedor-botones-edificios"
);

let btnEdificios;
let spanCostoEdificios;
let spanCantidadEdificios;

const FPS = 1000 / 30;
const multiplicadorCostoEdificios = 1.15;

let juego = {
  helados: 0,
  poderClick: 1,
  cantidadEdificiosAComprar: 1,
  tiempoActual: new Date(),
  delayAcumulado: 0,
};

btnClickHelados.addEventListener("click", () => {
  sumarHelados(juego.poderClick);
  actualizarDisplay();
});

//EDIFICIOS
let edificios = cargarDataEdificios();
function crearBotonesEdificios() {
  for (let i = 0; i < edificios.length; i++) {
    let botonEdificio = document.createElement("button");
    botonEdificio.classList.add("btn-edificios");
    botonEdificio.innerHTML = `${edificios[i].nombre} Cantidad: <span class="span-cantidad-edificios">${edificios[i].cantidad}</span> Costo: <span class="span-costo-edificios">${edificios[i].costo}</span>`;
    botonEdificio.addEventListener("click", () => {
      comprarEdificio(edificios[i], juego.cantidadEdificiosAComprar);
    });
    contenedorBotonesEdificios.appendChild(botonEdificio);
  }
  btnEdificios = document.querySelectorAll(".btn-edificios");
  spanCostoEdificios = document.querySelectorAll(".span-costo-edificios");
  spanCantidadEdificios = document.querySelectorAll(".span-cantidad-edificios");
}

function comprarEdificio(edificio, cantidad) {
  let nuevoCosto = edificio.costo;
  let costoTotal = edificio.costo;
  for (let i = 1; i < cantidad; i++) {
    nuevoCosto *= multiplicadorCostoEdificios;
    costoTotal += nuevoCosto;
  }

  if (juego.helados >= costoTotal) {
    juego.helados -= costoTotal;
    edificio.cantidad += cantidad;
    nuevoCosto *= multiplicadorCostoEdificios;
    edificio.costo = nuevoCosto;
  } else {
    alert("No tienes suficientes helados");
  }
}
//EDIFICIOS

function sumarHelados(helados) {
  juego.helados += helados;
}

//DISPLAY
function actualizarDisplay() {
  actualizarHelados();
  actualizarEdificios();
  document.querySelector(
    "title"
  ).textContent = `Helados: ${juego.helados.toFixed(0)}`;
}

function actualizarHelados() {
  spanCantidadHelados.textContent = juego.helados.toFixed(0);
}

function actualizarEdificios() {
  for (let i = 0; i < spanCantidadEdificios.length; i++) {
    spanCantidadEdificios[i].textContent = edificios[i].cantidad;
    spanCostoEdificios[i].textContent = Math.ceil(edificios[i].costo).toFixed(
      0
    );
  }
}
//DISPLAY

function calcularIngresosPorSegundo() {
  let ingresos = 0;
  for (let i = 0; i < edificios.length; i++) {
    ingresos += edificios[i].cantidad * edificios[i].ingresos;
  }
  return ingresos;
}

function ejecutarLogicaDelJuego() {
  sumarHelados(calcularIngresosPorSegundo() / FPS);
  actualizarDisplay();
}
function main() {
  crearBotonesEdificios();
  function gameLoop() {
    const tiempo = Date.now();
    let deltaTime = tiempo - juego.tiempoActual;

    while (deltaTime >= 1000 / FPS) {
      deltaTime -= 1000 / FPS;
      ejecutarLogicaDelJuego();
    }
    juego.tiempoActual = tiempo;

    setTimeout(gameLoop, 1000 / FPS);
  }
  gameLoop();
}

main();
