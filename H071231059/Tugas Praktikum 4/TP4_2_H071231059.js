let running = true;
let price;
do {
    price = prompt("Masukkan harga:");
    price = Number(price);

    if (isNaN(price) || price <= 0) {
        window.alert("Input harga tidak valid. Silahkan masukkan angka yang benar.");
    } else {
        running = false
    }
} while (running); 

let inputProduct = prompt("Masukkan jenis barang (Elektronik, Pakaian, Makanan, Lainnya):");
let product = inputProduct.toLowerCase();
let discount;
let discountPrice;

if (product === "elektronik") {
    discount = 10;
    discountPrice = price * 0.9;
} else if (product === "pakaian") {
    discount = 20;
    discountPrice = price * 0.8;
} else if (product === "makanan") {
    discount = 5;
    discountPrice = price * 0.95;
} else {
    discount = 0;
    discountPrice = price;
}

console.log(`Harga awal: Rp${price}`);
console.log(`Diskon: ${discount}%`);
console.log(`Harga setelah diskon: Rp${discountPrice}`);