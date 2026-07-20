export function Binary_Search(arr, target) {
  let pointer_low = 0;
  let size = arr.length;
  let steps = 0;

  while (pointer_low < size) {
    steps++;
    let mid = parseInt((pointer_low + size) / 2);

    // Verifica se o elemento no meio é o alvo
    if (arr[mid] == target) {
      return mid;
    }
    // Se o elemento no meio for menor que o alvo, ajusta o ponteiro inferior
    else if (arr[mid] < target) {
      pointer_low = mid + 1;
    }
    // Se o elemento no meio for maior que o alvo, ajusta o tamanho do array
    else {
      size = mid;
    }
  }

  // Se o alvo não for encontrado, retorna -1
  return -1;
}
