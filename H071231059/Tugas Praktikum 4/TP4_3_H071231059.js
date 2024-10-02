const daysOfWeek = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

let inputDay;
let running1 = true;
do {
    inputDay = prompt("Masukkan nama hari: ");
    inputDay = inputDay.charAt(0).toUpperCase() + inputDay.slice(1).toLowerCase();

    if (!daysOfWeek.includes(inputDay)) {
        window.alert("Input hari tidak valid. Silahkan masukkan nama hari yang benar.");
    } else {
        running1 = false;
    }
} while (running1); 

let daysToAdd;
let running2 = true;
do {
    daysToAdd = prompt("Masukkan jumlah hari yang ingin ditambahkan: ");
    daysToAdd = Number(daysToAdd);

    if (isNaN(daysToAdd) || daysToAdd < 0) {
        window.alert("Input jumlah hari tidak valid. Silahkan masukkan inputan yang benar.");
    } else {
        running2 = false;
    }
} while (running2); 

let futureDayIndex = (daysOfWeek.indexOf(inputDay) + daysToAdd) % 7;
let futureDay = daysOfWeek[futureDayIndex];

console.log(`${daysToAdd} hari setelah ${inputDay} adalah hari ${futureDay}`);