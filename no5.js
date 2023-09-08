const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

function getInfoPenjualan(dataPenjualan) {
  if (!Array.isArray(dataPenjualan)) {
    throw new Error("Parameter harus berupa array");
  }

  let totalKeuntungan = 0;
  let totalModal = 0;
  let produkBukuTerlaris = "";
  let penulisTerlaris = "";
  let bukuTerlarisTerjual = 0;

  dataPenjualan.forEach((produk) => {
    if (
      typeof produk.hargaBeli !== "number" ||
      typeof produk.hargaJual !== "number" ||
      typeof produk.totalTerjual !== "number"
    ) {
      throw new Error(
        "Properti hargaBeli, hargaJual, dan totalTerjual harus berupa angka"
      );
    }

    const modal = produk.hargaBeli * produk.totalTerjual;
    const keuntungan =
      (produk.hargaJual - produk.hargaBeli) * produk.totalTerjual;
    totalModal += modal;
    totalKeuntungan += keuntungan;

    if (produk.totalTerjual > bukuTerlarisTerjual) {
      produkBukuTerlaris = produk.namaProduk;
      bukuTerlarisTerjual = produk.totalTerjual;
    }

    if (produk.totalTerjual > bukuTerlarisTerjual) {
      penulisTerlaris = produk.penulis;
    }
  });

  const persentaseKeuntungan = (totalKeuntungan / totalModal) * 100;

  const infoPenjualan = {
    totalKeuntungan,
    totalModal,
    produkBukuTerlaris,
    penulisTerlaris,
    persentaseKeuntungan,
  };

  return infoPenjualan;
}

const informasiPenjualan = getInfoPenjualan(dataPenjualanNovel);

console.log("Informasi Penjualan Buku:");
console.log("Total Keuntungan:", informasiPenjualan.totalKeuntungan);
console.log("Total Modal:", informasiPenjualan.totalModal);
console.log("Produk Buku Terlaris:", informasiPenjualan.produkBukuTerlaris);
console.log("Penulis Buku Terlaris:", informasiPenjualan.penulisTerlaris);
console.log(
  "Persentase Keuntungan:",
  informasiPenjualan.persentaseKeuntungan.toFixed(2) + "%"
);
