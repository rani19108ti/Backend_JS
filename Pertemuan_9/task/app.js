const { index, store, update, destroy } = require("./controller/FruitController.js");

const main = () => {
  console.log("Method index - Menampilkan Buah");
  index();
  console.log("Menambahkan buah");
  store("Cucumber");
  console.log("Method Update - Ubah data ke 0 menjadi Blueberry");
  update(0, "Blueberry");
  console.log("Method destroy - Menghapus data ke 0");
  destroy(0);
};

main();
