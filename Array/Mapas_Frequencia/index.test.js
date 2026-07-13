import { Mapa_Frequencia } from "./index";

describe("Quantidade de letra(s) na string", () => {
  test("Deve retornar o mapa de frequência da string 'BANANA'", () => {
    expect(Mapa_Frequencia("BANANA")).toEqual({
      B: 1,
      A: 3,
      N: 2,
    });
  });

  test("Deve retornar o mapa de frequência da string 'MAÇA'", () => {
    expect(Mapa_Frequencia("MAÇA")).toEqual({
      M: 1,
      A: 2,
      Ç: 1,
    });
  });

  test("Deve retornar o mapa de frequência da string 'MATHEUS'", () => {
    expect(Mapa_Frequencia("MATHEUS")).toEqual({
      M: 1,
      A: 1,
      T: 1,
      H: 1,
      E: 1,
      U: 1,
      S: 1,
    });
  });

  test("Deve retornar o mapa de frequência da string 'VINICYUS'", () => {
    expect(Mapa_Frequencia("VINICYUS")).toEqual({
      V: 1,
      I: 2,
      N: 1,
      C: 1,
      Y: 1,
      U: 1,
      S: 1,
    });
  });

  test("Deve retornar o mapa de frequência da string 'STRADA'", () => {
    expect(Mapa_Frequencia("STRADA")).toEqual({
      S: 1,
      T: 1,
      R: 1,
      A: 2,
      D: 1,
    });
  });
});
