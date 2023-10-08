// File ini merupakan kumpulan dari file-file perulangan yang ada \\

// Contoh for ------->
let number = "";

for (let i = 1; i <= 10; i++) {
  number = i;
  console.log(`Perulangan ke: ${number}`);
}


// Contoh forStatement -------->
// 1
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// 2
let jumlahGenap = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    jumlahGenap += i;
  }
}
console.log("Jumlah bilangan genap dari 1 hingga 10 adalah: " + jumlahGenap);

// Contoh ifElse ------->
// If Else
let umur = 18;

if (umur >= 18) {
  console.log("Anda dewasa.");
} else {
  console.log("Anda masih anak-anak.");
}

// nested if
let nilai = 69;

if (nilai >= 90) {
  console.log("Anda mendapatkan nilai A.");
} else if (nilai >= 80) {
  console.log("Anda mendapatkan nilai B.");
} else if (nilai >= 70) {
  console.log("Anda mendapatkan nilai C.");
} else {
  console.log("Anda mendapatkan nilai D.");
}

// Contoh switchCase ------>
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

// Contoh while ------->
let i = 1;
while (i <= 10) {
  console.log(`Perulangan ke: ${i}`);
  i++;
}

// do while
let count = 1;
do {
  console.log("Perulangan ke-" + count);
  count++;
} while (count <= 5);


// Function
function getAge(bod) {
  const year = 2023;
  const age = year - bod;

  return age;
}
console.log(`Umur saya ${getAge(2002)}`);
console.log(`Umur saya ${getAge(2000)}`);