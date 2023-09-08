function getAngkaTerbesarKedua(dataNumbers) {
  if (!Array.isArray(dataNumbers)) {
    throw new Error("Parameter harus berupa array");
  }

  if (dataNumbers.length < 2) {
    throw new Error("Array harus memiliki setidaknya dua elemen");
  }

  const uniqueSortedArray = [...new Set(dataNumbers)].sort((a, b) => b - a);

  const angkaTerbesarKedua = uniqueSortedArray[1];

  return angkaTerbesarKedua;
}
const angkaArray = [9, 4, 7, 7, 4, 3, 2, 2, 8];
const angkaTerbesarKedua = getAngkaTerbesarKedua(angkaArray);

console.log(`Angka terbesar kedua: ${angkaTerbesarKedua}`);
