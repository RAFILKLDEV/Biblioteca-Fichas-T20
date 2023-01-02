export const tabela = [
  // 0 Indice 1 B.ATA 2 Dano.M 3 Defesa 4 R.FORTE 5 R.MEDIA 6 R.FRACA 7 PV 8 CD

  ["1/4", 6, 8, 11, 3, 0, -2, 7, 12],
  ["1/2", 7, 10, 14, 6, 3, -1, 15, 14],
  [1, 9, 15, 16, 11, 5, 0, 35, 15],
  [2, 12, 18, 19, 13, 7, 2, 70, 16],
  [3, 14, 21, 21, 15, 9, 4, 105, 17],
  [4, 16, 24, 23, 16, 10, 5, 140, 18],
  [5, 17, 40, 24, 16, 10, 5, 200, 20],
  [6, 20, 56, 27, 18, 12, 7, 240, 22],
  [7, 24, 62, 31, 20, 14, 9, 280, 24],
  [8, 26, 68, 33, 21, 15, 10, 320, 26],
  [9, 27, 74, 34, 21, 15, 10, 360, 28],
  [10, 29, 80, 36, 22, 16, 11, 400, 30],
  [11, 34, 130, 41, 29, 23, 18, 550, 31],
  [12, 36, 144, 43, 30, 24, 19, 600, 33],
  [13, 37, 158, 44, 30, 24, 19, 650, 35],
  [14, 39, 172, 46, 31, 25, 20, 700, 38],
  [15, 43, 186, 50, 31, 25, 20, 750, 40],
  [16, 46, 200, 53, 32, 26, 21, 800, 42],
  [17, 47, 270, 54, 32, 26, 21, 1020, 44],
  [18, 49, 288, 56, 33, 27, 22, 1080, 47],
  [19, 52, 306, 59, 33, 27, 22, 1140, 47],
  [20, 54, 324, 61, 34, 28, 23, 1200, 49],
];

export const pericias = [
  { name: null, total: 4, total2: 0 },
  { name: "Acrobacia", trained: false },
  { name: "Adestramento", trained: false },
  { name: "Atuação", trained: false },
  { name: "Cavalgar", trained: false },
  { name: "Conhecimento", trained: false },
  { name: "Cura", trained: false },
  { name: "Enganação", trained: false },
  { name: "Fortitude", trained: false },
  { name: "Furtividade", trained: false },
  { name: "Guerra", trained: false },
  { name: "Iniciativa", trained: false },
  { name: "Intimidação", trained: false },
  { name: "Intuição", trained: false },
  { name: "Investigação", trained: false },
  { name: "Jogatina", trained: false },
  { name: "Ladinagem", trained: false },
  { name: "Luta", trained: false },
  { name: "Misticismo", trained: false },
  { name: "Nobreza", trained: false },
  { name: "Oficio", trained: false },
  { name: "Percepção", trained: false },
  { name: "Pilotagem", trained: false },
  { name: "Pontaria", trained: false },
  { name: "Reflexos", trained: false },
  { name: "Religião", trained: false },
  { name: "Sobrevivência", trained: false },
  { name: "Vontade", trained: false },
];

export const deslocamento = [4.5, 6, 9, 12, 15, 18, 24, 36];

export function calcChanges(nd, n, valor, result) {
  let total = 0;
  for (let index = 0; tabela[nd][index] <= result; index++) {
    total++;
  }

  if (total !== 0) {
  }
}

export let changes = [
  // 0 Indice 1 B.ATA 2 Dano.M 3 Defesa 4 R.FORTE 5 R.MEDIA 6 R.FRACA 7 PV 8 CD
  { name: "B.Ataque", valor: 0 },
  { name: "Dano", valor: 0 },
  { name: "Defesa", valor: 0 },
  { name: "R.Forte", valor: 0 },
  { name: "R.Media", valor: 0 },
  { name: "R.Fraca", valor: 0 },
  { name: "Pv", valor: 0 },
  { name: "Cd", valor: 0 },
  { name: "Habilidades", valor: 0 },
];
