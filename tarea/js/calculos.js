// Arrow function con operador rest para calcular el promedio de notas
export const promedio = (...notas) => {
  const suma = notas.reduce((t, n) => t + n, 0);
  return suma / notas.length;
};

// Función con parámetro por defecto para determinar el estado
export const estado = (nota, minima = 13) => {
  return nota >= minima ? "Aprobado" : "Desaprobado";
};

// Función reporte que aplica desestructuración y spread en el promedio
export const reporte = (estudiante) => {
  const { nombre, notas } = estudiante;
  const prom = promedio(...notas);
  return `${nombre}: ${prom.toFixed(1)} - ${estado(prom)}`;
};
