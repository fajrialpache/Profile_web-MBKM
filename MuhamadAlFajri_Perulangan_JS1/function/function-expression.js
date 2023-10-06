/**
 * membuat fungsi menghitung umur
 * dibuat dengan cara menggunakan function expression
 *
 * @param {integer} bod (tanggal lahir)
 * @returns {integer} age (umur)
 */

const getAge = function (bod) {
  const year = 2023;
  const age = 2023 - bod;

  return age;
};

// memanggil fungsi getAge
console.log(getAge(2002));
