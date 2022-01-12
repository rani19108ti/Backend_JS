// promise async await
const second = (value) => value * 1000;

const promise = (waktu, desc) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(desc);
    }, second(waktu));
  });

function persiapan() {
  const prom = promise(1, "persiapan....");
  return prom;
}

function rebus() {
  const prom = promise(5, "rebus....");
  return prom;
}

function masak() {
  const prom = promise(7, "masak....selesai.");
  return prom;
}

async function main() {
  console.log(await persiapan());
  console.log(await rebus());
  console.log(await masak());
}

main();