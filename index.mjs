import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

import dataMenu from "./data/menu.json" with { type: "json" };


const rl = readline.createInterface({input, output});

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
    console.log(`
  - Riwayat -`);
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
  const invoice = `  #INV/${nomor.toString().padStart(4, "0")}\n  | ${"-".repeat(77)} | ${"-".repeat(10)} |` + isi;
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