import { ReverseWords } from "./index";

describe("Reverter palavras em uma string", () => {
  test("Deve reverter as palavras em uma string", () => {
    expect(ReverseWords("the sky is blue")).toBe("blue is sky the");
  });

  test("Deve reverter as palavras em uma string com espaços extras", () => {
    expect(ReverseWords("  hello world  ")).toBe("world hello");
  });
});
