/**
 * membuat function menghitung umur
 * dibuat menggunakan cara Arrow function
 *
 * @param {integer} bod (tanggal lahir)
 * @returns {integer} age (umur)
 */

const getAge = (bod = 1999) => {
  const year = 2023;
  const age = year - bod;

  return age;
};

// memanggil function getAge
console.log(`Umur saya adalah ${getAge()}`);
