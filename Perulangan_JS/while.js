// membuat variable awal
let i = 1;

/**
 * looping menggunakan while
 * membuat kondisi untuk batasan looping
 */

while (i <= 10) {
  console.log(`Perulangan ke: ${i}`);
  // melakukan increment
  i++;
}


// do while
let count = 1;

do {
  console.log("Perulangan ke-" + count);
  count++;
} while (count <= 5);

// Dalam contoh di atas, kami menggunakan do-while untuk membuat perulangan.
// Program akan selalu mengeksekusi blok pernyataan di dalam do terlebih dahulu tanpa memeriksa kondisi.
// Setelah itu, kondisi di dalam while akan diperiksa. Jika kondisinya true, maka perulangan akan terus berlanjut.
// Jika kondisinya false, maka perulangan akan berhenti.

// Dalam contoh ini, perulangan akan mencetak "Perulangan ke-X" ke konsol dan meningkatkan nilai count hingga mencapai 5.
// Ini akan terus berlanjut sampai count lebih dari 5, dan kemudian perulangan akan berhenti.