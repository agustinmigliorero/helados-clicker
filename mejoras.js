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

const dataMejoras = [];

function cargarDatamejoras() {
  const mejoras = dataMejoras.map((mejora) => {
    return new Mejora(
      mejora.nombre,
      mejora.costo,
      mejora.bonus,
      mejora.img,
      mejora.requisito,
      mejora.IDEdificio
    );
  });
  return mejoras;
}
