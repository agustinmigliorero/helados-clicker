const spanCantidadHelados = document.querySelector("#span-cantidad-helados");
const spanHeladosPorSegundo = document.querySelector(
  "#span-helados-por-segundo"
);
const btnClickHelados = document.querySelector("#btn-click-helado");
const contenedorBotonesEdificios = document.querySelector(
  "#contenedor-botones-edificios"
);
const contenedorBotonesMejoras = document.querySelector(
  "#contenedor-botones-mejoras"
);

let btnEdificios;
let spanCostoEdificios;
let spanCantidadEdificios;
let btnMejoras;

const FPS = 1000 / 30;
const multiplicadorCostoEdificios = 1.15;

let juego = {
  helados: 0,
  poderClick: 1,
  cantidadEdificiosAComprar: 1,
  tiempoActual: new Date(),
};

btnClickHelados.addEventListener("click", () => {
  sumarHelados(juego.poderClick);
  actualizarDisplay();
});

//EDIFICIOS
let edificios = cargarDataEdificios();
function crearBotonesEdificios() {
  for (let i = 0; i < edificios.length; i++) {
    let botonEdificio = document.createElement("div");
    botonEdificio.classList.add("btn-edificios");
    botonEdificio.innerHTML = `
    <div class="row">
        <div class="col-2">
            <img class="img-btn-edificios" src="${edificios[i].img}" />
        </div>
        <div class="col-8">
            <p class="btn-edificios-texto btn-edificios-nombre">${edificios[i].nombre} </p>
            <p class="btn-edificios-texto btn-edificios-costo">Costo: <span class="span-costo-edificios">${edificios[i].costo}</span></p>
        </div>
        <div class="col-2">
            <span class="span-cantidad-edificios">${edificios[i].cantidad}</span>
        </div>
    </div>
    `;
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

//MEJORAS
let mejoras = cargarDatamejoras();

function crearBotonesMejoras() {
  for (let i = 0; i < mejoras.length; i++) {
    let botonMejora = document.createElement("div");
    botonMejora.classList.add("btn-mejoras");
    botonMejora.style.display = "none";
    botonMejora.innerHTML = `<img src="${mejoras[i].img}">`;
    botonMejora.addEventListener("click", () => {
      comprarMejora(mejoras[i]);
    });
    contenedorBotonesMejoras.appendChild(botonMejora);
  }
  btnMejoras = document.querySelectorAll(".btn-mejoras");
}

function comprarMejora(mejora) {
  if (juego.helados >= mejora.costo && !mejora.comprado) {
    juego.helados -= mejora.costo;
    mejora.comprado = true;
    if (mejora.IDEdificio < 0) {
      juego.poderClick *= mejora.bonus;
    } else {
      edificios[mejora.IDEdificio].ingresos *= mejora.bonus;
    }
  }
}
//MEJORAS

function sumarHelados(helados) {
  juego.helados += helados;
}

//DISPLAY
function actualizarDisplay() {
  actualizarHelados();
  actualizarEdificios();
  actualizarMejoras();
  document.querySelector(
    "title"
  ).textContent = `Helados: ${numberformat.formatShort(juego.helados, {
    sigfigs: 4,
  })}`;
}

function actualizarHelados() {
  spanCantidadHelados.textContent = numberformat.formatShort(juego.helados, {
    sigfigs: 4,
  });
  spanHeladosPorSegundo.textContent =
    calcularIngresosPorSegundo() < 1000
      ? calcularIngresosPorSegundo().toFixed(1)
      : numberformat.formatShort(calcularIngresosPorSegundo(), {
          sigfigs: 4,
        });
}

function actualizarEdificios() {
  for (let i = 0; i < spanCantidadEdificios.length; i++) {
    spanCantidadEdificios[i].textContent = edificios[i].cantidad;
    spanCostoEdificios[i].textContent = numberformat.formatShort(
      Math.ceil(edificios[i].costo),
      {
        sigfigs: 4,
      }
    );
  }
}

function actualizarMejoras() {
  for (let i = 0; i < btnMejoras.length; i++) {
    if (!mejoras[i].comprado) {
      if (mejoras[i].IDEdificio < 0 && mejoras[i].requisito <= juego.helados) {
        btnMejoras[i].style.display = "inline-block";
      } else if (
        mejoras[i].IDEdificio >= 0 &&
        mejoras[i].requisito <= edificios[mejoras[i].IDEdificio].cantidad
      ) {
        btnMejoras[i].style.display = "inline-block";
      }
    } else {
      btnMejoras[i].style.display = "none";
    }
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
  crearBotonesMejoras();
  function gameLoop() {
    const tiempo = Date.now();
    let delayTiempo = tiempo - juego.tiempoActual;

    while (delayTiempo >= 1000 / FPS) {
      delayTiempo -= 1000 / FPS;
      ejecutarLogicaDelJuego();
    }
    juego.tiempoActual = tiempo;

    setTimeout(gameLoop, 1000 / FPS);
  }
  gameLoop();
}

main();
