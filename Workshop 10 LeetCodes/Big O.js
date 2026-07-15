// O(1) -> Complexidade constante
// A complexidade constante ocorre quando o tempo de execução do algoritmo
// não depende do tamanho da entrada.
function BigO1(num) {
  return num * 2;
}

console.log("BigO1(5):", BigO1(5)); // Saída: 10

// O(Log n) -> Complexidade logarítmica
// A complexidade logarítmica ocorre quando o tempo de execução do algoritmo
// cresce de forma logarítmica em relação ao tamanho da entrada.
function BigOLogN(arr, n) {
  // Implementação de busca binária.
  let low = 0;
  let high = arr.length - 1;
  let mid;

  while (high >= low) {
    mid = low + Math.floor((high - low) / 2);

    if (arr[mid] == n) {
      return mid;
    }

    if (arr[mid] > n) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}

console.log("BigOLogN([1, 2, 3, 4, 5], 3):", BigOLogN([1, 2, 3, 4, 5], 3)); // Saída: 2

// O(n) -> Complexidade linear
// A complexidade linear ocorre quando o tempo de execução do algoritmo
// cresce linearmente em relação ao tamanho da entrada.
function BigON(arr) {
  // Implementação de soma de elementos de um array.
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log("BigON([1, 2, 3, 4, 5]):", BigON([1, 2, 3, 4, 5])); // Saída: 15

// O(n Log n) -> Complexidade linearítmica
// A complexidade linearítmica ocorre quando o tempo de execução do algoritmo
// cresce de forma linear em relação ao tamanho da entrada, mas também envolve
// uma operação logarítmica, como a ordenação.
function BigONLogN(arr) {
  // Implementação de ordenação usando o método sort.
  return arr.sort((a, b) => a - b);
}

console.log("BigONLogN([5, 3, 1, 4, 2]):", BigONLogN([5, 3, 1, 4, 2])); // Saída: [1, 2, 3, 4, 5]

// O(n^2) -> Complexidade quadrática
// A complexidade quadrática ocorre quando o tempo de execução do algoritmo
// cresce de forma quadrática em relação ao tamanho da entrada.
function BigON2(arr) {
  // Implementação de soma de todos os pares de elementos de um array.
  let soma = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      soma = soma + arr[i] + arr[j];
    }
  }
  return soma;
}

console.log("BigON2([1, 2, 3]):", BigON2([1, 2, 3])); // Saída: 12

// O(raiz(n)) -> Complexidade raiz quadrada
// A complexidade raiz quadrada ocorre quando o tempo de execução do algoritmo
// cresce de forma proporcional à raiz quadrada do tamanho da entrada.
function BigORaN(n) {
  return Math.sqrt(n);
}

console.log("BigORaN(16):", BigORaN(16)); // Saída: 4

// O(n!) -> Complexidade fatorial
// A complexidade fatorial ocorre quando o tempo de execução do algoritmo
// cresce de forma fatorial em relação ao tamanho da entrada.
function BigONFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * BigONFactorial(n - 1);
}

console.log("BigONFactorial(10):", BigONFactorial(10)); // Saída: 362880
