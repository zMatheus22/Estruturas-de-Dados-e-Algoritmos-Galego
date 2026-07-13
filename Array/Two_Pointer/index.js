export function ReverseWords(string) {
  let left = 0;
  let right = 0;
  let word = "";

  while (right < string.length) {
    if (string[right] != " ") {
      right++;
    } else {
      // Adiciona a palavra atual ao início da string de palavras
      word = string.slice(left, right) + " " + word;
      right++;
      left = right;
    }
  }
  // Adiciona a última palavra ao início da string de palavras
  word = string.slice(left, right) + " " + word;
  // Remove espaços extras no início e no final da string de palavras
  word = word.trim();

  return word;
}
