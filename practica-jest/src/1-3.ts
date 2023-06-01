export function ADN(cadena: string | Iterable<unknown> | null | undefined) {
  let valorUnico = Array.from(new Set(cadena));
  let nuevaCadena = valorUnico.join("");
  return nuevaCadena;
}