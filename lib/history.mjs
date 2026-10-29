import fs from "node:fs";
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({input, output});

const invoices = JSON.parse(fs.readFileSync("./data/invoices.json", "utf-8"));

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
  simpanInvoices(invoice);
}

function simpanInvoices() {
  fs.writeFileSync(invoices, JSON.stringify(invoices));
}