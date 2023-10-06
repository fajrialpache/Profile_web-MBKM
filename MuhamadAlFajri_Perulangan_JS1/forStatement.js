// Contoh perulangan dengan for untuk mencetak angka 1 hingga 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Contoh perulangan dengan for untuk menghitung jumlah bilangan genap dari 1 hingga 10
let jumlahGenap = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    jumlahGenap += i;
  }
}
console.log("Jumlah bilangan genap dari 1 hingga 10 adalah: " + jumlahGenap);

// Dalam contoh pertama, kami menggunakan for untuk mencetak angka 1 hingga 5.
// Variabel i digunakan sebagai penghitung iterasi, dimulai dari 1.
// Perulangan akan terus berlanjut selama i kurang dari atau sama dengan 5, dan setiap iterasi akan mencetak nilai i.

// Dalam contoh kedua, kami menggunakan for untuk menghitung jumlah bilangan genap dari 1 hingga 10.
// Kami menggunakan pernyataan if di dalam perulangan untuk memeriksa apakah suatu bilangan adalah bilangan genap atau tidak.
// Jika i modulo 2 sama dengan 0, itu berarti bilangan tersebut adalah bilangan genap, dan kami menambahkannya ke jumlahGenap.
// Setelah perulangan selesai, kami mencetak total jumlah bilangan genap.