const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(
    `Masukkan salah satu dari  ${minNum} sampai ${maxNum}:`
  );
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert("Silahkan masukkan angka yang valid!");
  } else if (guess < minNum || guess > maxNum) {
    window.alert("Silahkan masukkan angka yang valid!");
  } else {
    attempts++;
    if (guess < answer) {
      window.alert("Terlalu rendah! Coba lagi");
    } else if (guess > answer) {
      window.alert("Terlalu tinggi! Coba lagi!");
    } else {
      window.alert(
        `Selamat! kamu berhasil menebak angka ${answer} dengan benar. Sebanyak ${attempts}x percobaan`
      );
      running = false;
    }
  }
}