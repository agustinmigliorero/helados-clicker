function calcularTiempoTranscurrido(fechaActual, fechaAnterior) {
  let msTranscurridos = fechaActual - fechaAnterior;
  let segundosTranscurridos = msTranscurridos / 1000;
  let minutosTranscurridos = segundosTranscurridos / 60;
  let horasTranscurridas = minutosTranscurridos / 60;
  let diasTranscurridos = horasTranscurridas / 24;
  let mesesTranscurridos = diasTranscurridos / 30;
  let stringARetornar = "";
  if (mesesTranscurridos >= 1) {
    stringARetornar += `Meses: ${Math.floor(mesesTranscurridos)} `;
  }
  if (diasTranscurridos >= 1) {
    stringARetornar += `Dias: ${Math.floor(diasTranscurridos)} `;
  }
  if (horasTranscurridas >= 1) {
    stringARetornar += `Horas: ${Math.floor(horasTranscurridos)} `;
  }
  if (minutosTranscurridos >= 1) {
    stringARetornar += `Minutos: ${Math.floor(minutosTranscurridos)} `;
  }
  if (segundosTranscurridos >= 1) {
    stringARetornar += `Segundos: ${Math.floor(segundosTranscurridos)} `;
  }
  return stringARetornar;
}
