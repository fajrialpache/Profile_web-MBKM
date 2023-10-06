//Switch Case

let hari = "Minggu";

switch (hari) {
  case "Senin":
    console.log("Hari ini Senin.");
    break;
  case "Selasa":
    console.log("Hari ini Selasa.");
    break;
  case "Rabu":
    console.log("Hari ini Rabu.");
    break;
  case "Kamis":
    console.log("Hari ini Kamis.");
    break;
  case "Jumat":
    console.log("Hari ini Jumat.");
    break;
  default:
    console.log("Ini bukan hari kerja.");
}

// Dalam contoh di atas, kita menggunakan switch untuk memeriksa nilai dari variabel hari,
// dan kemudian melakukan perbandingan dengan beberapa nilai yang mungkin (case).
// Jika nilai hari cocok dengan salah satu kasus, kode yang sesuai akan dieksekusi.
// Jika tidak ada yang cocok, kode di dalam blok default akan dieksekusi.

// Pastikan untuk menggunakan pernyataan break setiap kali Anda ingin menghentikan eksekusi setelah kondisi yang cocok
// ditemukan. Tanpa break, program akan melanjutkan ke kasus berikutnya.
