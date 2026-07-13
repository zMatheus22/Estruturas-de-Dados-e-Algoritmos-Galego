export function Mapa_Frequencia(palavra) {
  let freq = {};

  for (let i = 0; i < palavra.length; i++) {
    let letra = palavra[i];
    freq[letra] = (freq[letra] || 0) + 1;
  }

  return freq;
}
