class Edificio {
  constructor(nombre, costo, ingresos) {
    this.nombre = nombre;
    this.costo = costo;
    this.ingresos = ingresos;
    this.cantidad = 0;
  }
}

const dataEdificios = [
  { nombre: "Edificio1", costo: 15, ingresos: 0.1 },
  { nombre: "Edificio2", costo: 100, ingresos: 1 },
  { nombre: "Edificio3", costo: 300, ingresos: 5 },
];

function cargarDataEdificios() {
  const edificios = dataEdificios.map((edificio) => {
    return new Edificio(edificio.nombre, edificio.costo, edificio.ingresos);
  });
  return edificios;
}
