import { Binary_Search } from "./index";

describe("Binary Search", () => {
  test("Deve encontar o número 3 em 2 tentativas", () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 3;
    expect(Binary_Search(arr, target)).toBe(2);
  });

  test("Deve retornar -1 para quando o número não for encontrado", () => {
    const arr = [10, 20, 30, 40, 50, 60];
    const target = 5;
    expect(Binary_Search(arr, target)).toBe(-1);
  });
});
