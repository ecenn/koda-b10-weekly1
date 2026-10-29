import { listInvoice } from "./riwayat.mjs";
import { orders } from "../index.mjs";
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({input, output});

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
