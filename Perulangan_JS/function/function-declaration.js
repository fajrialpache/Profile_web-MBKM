/**
 * membuat function menghitung umur
 * dibuat menggunakan cara function declaration
 *
 * @param {integer} bod (tanggal lahir)
 * @returns {integer} age (umur)
 */

function getAge(bod) {
  const year = 2023;
  const age = year - bod;

  return age;
}

// memanggil funsi getAge
console.log(`Umur saya ${getAge(2002)}`);
console.log(`Umur saya ${getAge(2000)}`);
