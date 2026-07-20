import { SlidingWindow } from "./index";

describe("Sliding Window", () => {
  test("Deve retornar o tamanho da maior substring sem caracteres repetidos", () => {
    expect(SlidingWindow("bcbbbcba")).toBe(4);
  });

  test("Deve retornar o tamanho da maior substring sem caracteres repetidos", () => {
    expect(SlidingWindow("abcabcbb")).toBe(6);
  });

  test("Deve retornar o tamanho da maior substring sem caracteres repetidos", () => {
    expect(SlidingWindow("bbbbb")).toBe(2);
  });
});
