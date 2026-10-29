import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({input, output});

// data menu
const dataMenu = [
  { id: 1, name: "B1G1 Black Pepper Chicken", price: 54500 },
  { id: 2, name: "B1G1 Mongolian Chicken", price: 55500 },
  { id: 3, name: "Kombo Kenyang 2", price: 93100 },
  { id: 4, name: "Salted Egg Chicken Pedas Jeruk (Reguler)", price: 45200 },
  { id: 5, name: "Mongolian Chicken (Reguler)", price: 36375 },
  { id: 6, name: "B1G1 Kung Pao Chicken", price: 105000 },
  { id: 7, name: "Salted Egg Chicken Polos (Reguler)", price: 53500 },
  { id: 8, name: "Salted Egg Chicken Pedas Jeruk (Reguler)", price: 56500 },
  { id: 9, name: "Paket 1 LITE Sambalado Chicken + 1 Es Teh Manis", price: 35350 },
  { id: 10, name: "Paket 1 LITE SEC Polos + 1 Es Teh Manis", price: 38150 },
  { id: 11, name: "Salted Egg Chips", price: 48025 },
  { id: 12, name: "Chips Kombo Minum", price: 55600 },
  { id: 13, name: "Chips Kombo Makan", price: 88000 },
  { id: 14, name: "Chips Kombo Lengkap", price: 92250 },
  { id: 15, name: "Salted Egg Chicken Polos", price: 53500 },
  { id: 16, name: "Salted Egg Chicken Original", price: 53500 },
  { id: 17, name: "Spicy Salted Egg Chicken", price: 56500 },
  { id: 18, name: "Salted Egg Chicken Pedas Jeruk", price: 56500 },
  { id: 19, name: "Salted Egg Chicken Founder's Signature", price: 53900 },
  { id: 20, name: "Kung Pao Chicken", price: 48500 },
  { id: 21, name: "Mongolian Chicken", price: 48500 },
  { id: 22, name: "Black Pepper Chicken", price: 47500 },
  { id: 23, name: "General Tso Chicken", price: 43900 },
  { id: 24, name: "Sambalado Chicken", price: 46500 },
  { id: 25, name: "Seckaligus", price: 75500 },
  { id: 26, name: "Kombo 2 Sec Ori + 2 Es Teh Manis", price: 112500 },
  { id: 27, name: "Kombo 2 Sec Polos + 2 Es Teh Manis", price: 112500 },
  { id: 28, name: "Kombo 2 Sec Pedas Jeruk + 2 Es Teh Manis", price: 117500 },
  { id: 29, name: "Kombo 2 Sec Spicy + 2 Es Teh Manis", price: 117500 },
  { id: 30, name: "Kombo 2 SEC Founder's Signature + 2 Es Teh Manis", price: 113500 },
  { id: 31, name: "Kombo 2 Mongolian Chicken + 2 Es Teh Manis", price: 104500 },
  { id: 32, name: "LITE Salted Egg Chicken Polos", price: 41500 },
  { id: 33, name: "LITE Salted Egg Chicken Original", price: 41500 },
  { id: 34, name: "LITE Spicy Salted Egg Chicken", price: 44500 },
  { id: 35, name: "LITE Salted Egg Chicken Pedas Jeruk", price: 44500 },
  { id: 36, name: "LITE SEC Founder's Signature", price: 41900 },
  { id: 37, name: "LITE Kung Pao Chicken", price: 39500 },
  { id: 38, name: "LITE Mongolian Chicken", price: 39500 },
  { id: 39, name: "LITE Black Pepper Chicken", price: 38500 },
  { id: 40, name: "LITE General Tso Chicken", price: 37500 },
  { id: 41, name: "LITE Sambalado Chicken", price: 37500 },
  { id: 42, name: "Salted Egg Chicken Polos (Chicken Only)", price: 129500 },
  { id: 43, name: "Salted Egg Chicken Original (Chicken Only)", price: 129500 },
  { id: 44, name: "Spicy Salted Egg Chicken (Chicken Only)", price: 135500 },
  { id: 45, name: "Salted Egg Chicken Pedas Jeruk (Chicken Only)", price: 135500 },
  { id: 46, name: "SEC Founder's Signature (Chicken Only)", price: 129500 },
  { id: 47, name: "Kungpao Chicken (Chicken only)", price: 119500 },
  { id: 48, name: "Mongolian Chicken (Chicken only)", price: 121000 },
  { id: 49, name: "General Tso Chicken (Chicken Only)", price: 112500 },
  { id: 50, name: "Sambalado Chicken (Chicken Only)", price: 112500 },
  { id: 51, name: "Black Pepper Chicken (Chicken Only)", price: 119500 },
  { id: 52, name: "Telur Mata Sapi", price: 9500 },
  { id: 53, name: "Nasi Putih", price: 9500 },
  { id: 54, name: "Cabe Rawit (tanpa kecap)", price: 3000 },
  { id: 55, name: "Telur Dadar", price: 9500 },
  { id: 56, name: "Extra Salted Egg Sauce", price: 6500 },
  { id: 57, name: "Cabe Rawit Kecap", price: 2000 },
  { id: 58, name: "Iced Tea", price: 12000 },
  { id: 59, name: "Sweet Iced Tea", price: 13000 },
  { id: 60, name: "Es Sari Tebu Murni", price: 18000 },
  { id: 61, name: "Iced Lemon Tea", price: 19000 },
  { id: 62, name: "Es Sari Tebu Lemon", price: 21000 },
  { id: 63, name: "Packaging Charge", price: 3500 },
];

let listMenu = `
| ${"-".repeat(5)} | ${"-".repeat(50)} | ${"-".repeat(10)} |
| ${"id".padStart(5)} | ${"menu".padEnd(50)} | ${"harga".padStart(10)} |
| ${"-".repeat(5)} | ${"-".repeat(50)} | ${"-".repeat(10)} |`;

// for (let i = 0; i < 5; i++){
for (let i = 0; i < dataMenu.length; i++){
  listMenu += `
| ${dataMenu[i].id.toString().padStart(5)} | ${dataMenu[i].name.toString().padEnd(50)} | ${dataMenu[i].price.toString().padStart(10)} |`;
}

listMenu += `\n| ${"-".repeat(5)} | ${"-".repeat(50)} | ${"-".repeat(10)} |`;

// orders
let orders = [];

// invoices
let invoices = [];

// home

async function main() { 
  while(true) {
    console.log(`
  - Order Secbowl -

    (1) Menu
    (2) Keranjang
    (3) Riwayat
    (0) Keluar
      `);

    const choose = await rl.question(`  Pilih opsi: `);

    if (choose == 1) {
      await menu();
    } else if (choose == 2) {
      await keranjang(orders);
    } else if (choose == 3) {
      const hasil = await riwayat();
      if (hasil == "menu") {
        await menu();
      }
    } else if (choose == 0) {
      console.log("\n--- Sampai jumpa lagi! ---\n");
      break;
    } else {
      console.log("[ INPUT TIDAK SESUAI ]");
    }
  }
}

// menu

async function menu() {
  while (true) {
    console.log(`
  - Menu -

  ${listMenu}

    (id) Pilih Menu Pesanan
    (0) Kembali
      `);

    const itemId = await rl.question(`  Masukan Menu ID (0 untuk kembali): `);

    if (itemId >= 1 && itemId <= dataMenu.length) {
      const hasil = await jumlah(itemId);
      if (hasil == "main") {
        return;
      }
    } else if (itemId == 0) {
      return;
    } else {
      console.log(`[ INPUT TIDAK SESUAI ]`);
    }
  }
}

async function jumlah(itemId) {
  while(true) {
    const item = itemId - 1;
    console.log(`
    Pesanan: ${dataMenu[item].name}
    Harga Satuan: ${dataMenu[item].price}
    
      (qty) jumlah pesanan
      (0) kembali
      `);

    const qty = await rl.question(`Masukan jumlah (0 untuk kembali): `);

    if (qty > 0) {
      return await konfirmasiPilihan(qty, item);
    } else if (qty == 0) {
      return "menu";
    } else {
      console.log(`[ INPUT TIDAK SESUAI ]`);
    }
  }
}

async function konfirmasiPilihan(qty, itemId) {
  while (true) {
    console.log(`
    Pesanan: ${dataMenu[itemId].name} - ${qty}pax berhasil ditambahkan.
    
      (1) Bayar (ke Keranjang)
      (2) Pesan Lagi
      (0) Kembali
      `);

    const choose = await rl.question(`  Pilih opsi: `);

    if (choose == 1) {
      masukKeranjang(qty, itemId);
      await keranjang(orders);
      return "main";
    } else if (choose == 2) {
      masukKeranjang(qty, itemId);
      return "menu";
    } else if (choose == 0 ) {
      masukKeranjang(qty, itemId);
      return "main";
    } else {
      console.log(`[ INPUT TIDAK SESUAI ]`);
    }
  }
}

function masukKeranjang(qty, itemId) {
  const temp = {
    name: dataMenu[itemId].name,
    qty: parseInt(qty),
    price: dataMenu[itemId].price,
    total: parseInt(qty) * dataMenu[itemId].price
  };
  orders.push(temp);
}

// keranjang

async function keranjang(orders) {
  while (true) {
    let isi = "";
    console.log(`
    - Keranjang -`);
    if (orders.length == 0) {
      console.log(`
    Keranjang Masih Kosong
    
      (0) Kembali
      `);

    } else {
      isi = listKeranjang(orders);
      console.log(`
  | ${"-".repeat(50)} | ${"-".repeat(6)} | ${"-".repeat(15)} | ${"-".repeat(10)} |
  | ${"Pesanan".padEnd(50)} | ${"Jumlah".padStart(6)} | ${"Harga Satuan".padStart(15)} | ${"Subtotal".padStart(10)} |
  | ${"-".repeat(50)} | ${"-".repeat(6)} | ${"-".repeat(15)} | ${"-".repeat(10)} | ${isi}
  
    (1) bayar
    (0) kembali
    `);
    }
    
    const choose = await rl.question(`  Pilih opsi: `);

    if (choose == 1 && orders.length > 0) {
      const hasil = await bayar(hitungTagihan(orders), isi);
      if (hasil == "home") {
        return "main";
      }
    } else if (choose == 0) {
      return "main";
    } else {
      console.log(`[ INPUT TIDAK SESUAI ]`);
    }
  }
}

function listKeranjang(orders) {
  let isi = ``;
  let tagihan = 0;
  for (let i = 0; i < orders.length; i ++) {
    isi += `\n  | ${orders[i].name.toString().padEnd(50)} | ${orders[i].qty.toString().padStart(3)}pax | ${orders[i].price.toString().padStart(15)} | ${orders[i].total.toString().padStart(10)} |`;
    tagihan += parseInt(orders[i].total);
  }
  isi += `\n  | ${"-".repeat(77)} | ${"-".repeat(10)} |`;
  isi += `\n  | ${"Total".padEnd(77)} | ${tagihan.toString().padStart(10)} |`;
  isi += `\n  | ${"-".repeat(77)} | ${"-".repeat(10)} |`;
  return isi;
}

function hitungTagihan(orders) {
  let tagihan = 0;
  for (let i = 0; i < orders.length; i ++) {
    tagihan += orders[i].total;
  }
  return tagihan;
}

async function bayar(tagihan, isi) {
  const uang = await rl.question(`
  Masukan jumlah uang: `);

  const kembalian = uang - tagihan;

  if (kembalian < 0 ) {
    console.log(`[ MAAF UANG ANDA KURANG ATAU INPUT TIDAK SESUAI ]`);
  } else if (kembalian >= 0) {
    listInvoice(isi);
    orders.length = 0;
    console.log(`
  Kembalian: ${kembalian}
  Pesanan sedang diproses`);
    return "home";
  }
}

// riwayat

async function riwayat() {
  while (true) {
    console.log(`  - Riwayat -`);
    if (invoices.length != 0) {
      console.log(`
  ${invoices.join("\n")}
  
    (0) Kembali
    `);
    } else {
      console.log(`
  Belum ada riwayat pembelian.
  
    (1) Mulai Memesan
    (0) Kembali
    `);
    }

    const choose = await rl.question(`  Pilih opsi: `);

    if (choose == 1) {
      return "menu";
    } else if (choose == 0) {
      return "home";
    } else {
      console.log(`[ INPUT TIDAK SESUAI ]`);
    }
  }
}

function listInvoice(isi) {
  const nomor = invoices.length + 1;
  const invoice = `\n  #INV/${nomor.toString().padStart(4, "0")}\n  | ${"-".repeat(77)} | ${"-".repeat(10)} |` + isi;
  invoices.push(invoice);
}

// start

try {
  await main();
} catch (error) {
  console.error(`Error: Terjadi kesalahan.`);
} finally {
  rl.close();
}