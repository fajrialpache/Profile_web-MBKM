/**
 * membuat function menghitung umur
 * dibuat menggunakan cara arrow function
 *
 * @param {integer} bod (tanggal lahir)
 * @returns {integer} age (umur)
 */

const getAge = (bod) => {
  const year = 2023;
  const age = year - bod;

  return age;
};

// memanggil function getAge
console.log(getAge(2002));
