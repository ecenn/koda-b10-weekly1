import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({input, output});

// orders
let orders = [];

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

// start

try {
  await main();
} catch (error) {
  console.error(`Error: Terjadi kesalahan.`);
} finally {
  rl.close();
}