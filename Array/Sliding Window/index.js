// Sliding Window -> é uma técnica usada para resolver problemas
// de arrays, onde você mantém uma "janela" de elementos
// e a move ao longo do array para encontrar soluções eficientes.

export function SlidingWindow(arr) {
  const charCounts = {};
  let maxLen = 0;
  let start = 0;

  // Itera sobre cada caractere do array
  for (let end = 0; end < arr.length; end++) {
    const charEnd = arr[end];

    // Se o caractere atual não estiver no objeto de contagem, inicialize-o com 0
    if (!charCounts[charEnd]) {
      charCounts[charEnd] = 0;
    }
    charCounts[charEnd]++;

    // Se o caractere atual tiver mais de 2 ocorrências, mova o início da janela para a direita
    while (charCounts[charEnd] > 2) {
      const charStart = arr[start];
      charCounts[charStart]--;
      start++;
    }

    // Calcula o tamanho da janela atual e atualiza o tamanho máximo encontrado
    maxLen = Math.max(maxLen, end - start + 1);
  }

  return maxLen;
}
