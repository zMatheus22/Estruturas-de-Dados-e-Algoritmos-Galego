// Big O (n²)

function twoSumBigN2(array, num) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j && array[i] + array[j] === num) {
        return [i, j]; // retorna a posição dos elementos que somam o número fornecido
      }
    }
  }
  return [];
}

console.log(twoSumBigN2([100, 22, 34, 45, 51], 56)); // [3, 4]

// Hash Table O(n)

function twoSumHashTable(array, num) {
  let hasher = {};

  for (let i = 0; i < array.length; i++) {
    if (hasher[array[i]] !== undefined) {
      return [hasher[array[i]], i]; // retorna a posição dos elementos que somam o número fornecido
    }
    hasher[num - array[i]] = i; // armazena a posição do elemento que falta para somar o número fornecido
  }
  return [];
}

console.log(twoSumHashTable([100, 22, 34, 45, 10, 89, 51], 99)); // [4, 5]
