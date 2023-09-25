class Edificio {
  constructor(nombre, costo, ingresos, img) {
    this.nombre = nombre;
    this.costo = costo;
    this.ingresos = ingresos;
    this.cantidad = 0;
    this.img = img;
  }
}

const dataEdificios = [
  {
    nombre: "Cuchara",
    costo: 15,
    ingresos: 0.1,
    img: "./imagenes/Cuchara.png",
  },
  {
    nombre: "Heladero",
    costo: 100,
    ingresos: 1,
    img: "./imagenes/Heladero.png",
  },
  { nombre: "Carrito", costo: 500, ingresos: 5, img: "./imagenes/Carrito.png" },
  { nombre: "Camion", costo: 3000, ingresos: 10, img: "./imagenes/Camion.png" },
  {
    nombre: "Heladeria",
    costo: 10000,
    ingresos: 40,
    img: "./imagenes/Heladeria.png",
  },
  {
    nombre: "Granja",
    costo: 40000,
    ingresos: 100,
    img: "./imagenes/Granja.png",
  },
  {
    nombre: "Fabrica",
    costo: 200000,
    ingresos: 500,
    img: "./imagenes/Fabrica.png",
  },
  {
    nombre: "Iglesia",
    costo: 1500000,
    ingresos: 6000,
    img: "./imagenes/Iglesia.png",
  },
  {
    nombre: "Banco",
    costo: 100000000,
    ingresos: 100000,
    img: "./imagenes/Banco.png",
  },
  {
    nombre: "Alquimia",
    costo: 4000000000,
    ingresos: 900000,
    img: "./imagenes/Alquimia.png",
  },
  {
    nombre: "Alien",
    costo: 80000000000,
    ingresos: 10000000,
    img: "./imagenes/Alien.png",
  },
  {
    nombre: "Planeta",
    costo: 1500000000000,
    ingresos: 100000000,
    img: "./imagenes/Planeta.png",
  },
  {
    nombre: "Portal",
    costo: 30000000000000,
    ingresos: 1000000000,
    img: "./imagenes/Portal.png",
  },
  {
    nombre: "Monstruo",
    costo: 550000000000000,
    ingresos: 10000000000,
    img: "./imagenes/Monstruo.png",
  },
  {
    nombre: "Dios",
    costo: 1500000000000000,
    ingresos: 100000000000,
    img: "./imagenes/Dios.png",
  },
];

function cargarDataEdificios() {
  const edificios = dataEdificios.map((edificio) => {
    return new Edificio(
      edificio.nombre,
      edificio.costo,
      edificio.ingresos,
      edificio.img
    );
  });
  return edificios;
}
