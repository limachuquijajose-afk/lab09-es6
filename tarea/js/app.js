import { curso, estudiantes } from "./datos.js";
import { promedio, estado, reporte } from "./calculos.js";

console.log(`Curso: ${curso}`);

// Uso de spread de objeto y de arreglo en lugar de Object.assign y concat
const nuevo = { ...estudiantes[0], nombre: "Ana María" };
const todos = [...estudiantes, nuevo];

const listaReportes = document.querySelector("#reportes");

todos.forEach((est) => {
  const textoReporte = reporte(est);
  console.log(textoReporte);

  if (listaReportes) {
    listaReportes.innerHTML += `<li>${textoReporte}</li>`;
  }
});
