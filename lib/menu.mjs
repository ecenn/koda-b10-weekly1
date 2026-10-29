import { rl } from "../utils/interface.mjs";
import { orders } from "../utils/state.mjs";
import dataMenu from "../data/menu.json" with { type: "json" };
import { keranjang } from "./cart.mjs";

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

// menu

export async function menu() {
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