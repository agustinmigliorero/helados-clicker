class Mejora {
  constructor(nombre, costo, bonus, img, requisito, IDEdificio) {
    this.nombre = nombre;
    this.costo = costo;
    this.bonus = bonus;
    this.img = img;
    this.requisito = requisito;
    this.IDEdificio = IDEdificio;
    this.comprado = false;
  }
}

const dataMejoras = [
  [
    {
      nombre: "Click Poderoso!",
      costo: 100,
      bonus: 2,
      img: "./imagenes/Puntero.png",
      requisito: 100,
      IDEdificio: -1,
    },
    {
      nombre: "Click Poderoso!",
      costo: 500,
      bonus: 2,
      img: "./imagenes/Puntero.png",
      requisito: 1000,
      IDEdificio: -1,
    },
  ],
  [
    {
      nombre: "Cucharas Dobles!",
      costo: 100,
      bonus: 2,
      img: "./imagenes/Cuchara.png",
      requisito: 10,
      IDEdificio: 0,
    },
    {
      nombre: "Cucharas Dobles!",
      costo: 1000,
      bonus: 2,
      img: "./imagenes/Cuchara.png",
      requisito: 25,
      IDEdificio: 0,
    },
    {
      nombre: "Cucharas Dobles!",
      costo: 10000,
      bonus: 2,
      img: "./imagenes/Cuchara.png",
      requisito: 50,
      IDEdificio: 0,
    },
  ],
  [
    {
      nombre: "Heladeros Dobles!",
      costo: 500,
      bonus: 2,
      img: "./imagenes/Heladero.png",
      requisito: 10,
      IDEdificio: 1,
    },
    {
      nombre: "Heladeros Dobles!",
      costo: 5000,
      bonus: 2,
      img: "./imagenes/Heladero.png",
      requisito: 25,
      IDEdificio: 1,
    },
    {
      nombre: "Heladeros Dobles!",
      costo: 25000,
      bonus: 2,
      img: "./imagenes/Heladero.png",
      requisito: 50,
      IDEdificio: 1,
    },
  ],
  [
    {
      nombre: "Carritos Dobles!",
      costo: 2500,
      bonus: 2,
      img: "./imagenes/Carrito.png",
      requisito: 10,
      IDEdificio: 2,
    },
    {
      nombre: "Carritos Dobles!",
      costo: 20000,
      bonus: 2,
      img: "./imagenes/Carrito.png",
      requisito: 25,
      IDEdificio: 2,
    },
    {
      nombre: "Carritos Dobles!",
      costo: 75000,
      bonus: 2,
      img: "./imagenes/Carrito.png",
      requisito: 50,
      IDEdificio: 2,
    },
  ],
];

function cargarDatamejoras() {
  const mejoras = dataMejoras.map((arrMejoras) => {
    arrMejoras.map((mejora) => {
      return new Mejora(
        mejora.nombre,
        mejora.costo,
        mejora.bonus,
        mejora.img,
        mejora.requisito,
        mejora.IDEdificio
      );
    });
    return arrMejoras;
  });
  return mejoras.flat();
}
