const readline = require('node:readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// MENU UTAMA

// (3) Riwayat Pembelian
const home = 
`
${"-".repeat(100)}

ORDER SECBOWL

  (1) Menu
  (2) Keranjang
  (0) Keluar

Pilih Opsi: `

// MENU

const menus = [
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
  { id: 63, name: "Packaging Charge", price: 3500 }
]

let displayMenu = `
| ${"-".repeat(5)} | ${"-".repeat(50)} | ${"-".repeat(10)} |
| ${"id".padEnd(5)} | ${"Menu".padEnd(50)} | ${"Harga".padEnd(10)} |
| ${"-".repeat(5)} | ${"-".repeat(50)} | ${"-".repeat(10)} |`

// for (let i = 0; i < menus.length; i++){
for (let i = 0; i < 5; i++){
  displayMenu += `
| ${menus[i].id.toString().padStart(5)} | ${menus[i].name.toString().padEnd(50)} | ${menus[i].price.toString().padStart(10)} |`
  }

function menu() {
  rl.question(`${displayMenu}

  (id) Pesan Item
  (0) Kembali

  Pilih Opsi: `, (n) => {
    n = parseInt(n)
    if (n == 0) {
      backHome()
    } else if (n > 0 && n <= menus.length){
      getItem(n)
    } else {
      backMenu()
    }
  })
}

function getItem(id) {
  id = id - 1
  rl.question(`
${"-".repeat(100)}

Pesanan: ${menus[id].name.toString()}

  (qty) Tambah Pesanan ke Keranjang
  (0) Kembali ke Menu

Pilih Opsi / Jumlah Pesanan: `, (qty) => {
    qty = parseInt(qty)
    if (qty == 0) {
      backMenu()
    } else if (qty > 0){
      checkout(id, qty)
    } else {
      backMenu()
    }
  })
}

let items = []

function checkout(id, qty) {
  let copyMenu = menus[id]
  items.push(copyMenu)
  // (2) Pesan Menu Lain (BUG)
  rl.question(`
${"-".repeat(100)}

-> ${menus[id].name.toString()} - ${qty} pax berhasil ditambahkan ke Keranjang.

  (1) Cek Keranjang
  (0) Kembali ke Halaman Utama

Pilih Opsi: `, (ans) => {
  ans = parseInt(ans)
  if (ans == 1) {
    cart(qty)
  // } else if (ans == 2) {
  //   backMenu()
  } else if (ans == 0) {
    backHome()
  } else {
    console.log(`Input tidak sesuai. Periksa lagi opsi yang Anda pilih.`)
    backCheckout()
  }  
})  
}

function backMenu() {
  menu()
}  

function backCheckout() {
  checkout()
}  

// KERANJANG

function cart(qty) {
  if (items.length == 0) {
    rl.question(`
Belum ada pesanan.

(1) Mulai Memesan
(0) Kembali ke Menu Utama

Pilih Opsi: `, (ans) => {
  ans = parseInt(ans)
  if (ans == 1) {
    menu()
  } else if (ans == 0) {
    backHome()
  } else {
    console.log(`Input tidak sesuai. Periksa lagi opsi yang Anda pilih.`)
  }
  })
  } else {
    // console.log(items) // array of object(s)
    console.log(`
${"-".repeat(100)}

Keranjang\n`)
    let total = 0
    items.forEach((item, index) => {
      console.log(`${index+1}. ${item.name.toString().padEnd(50)} | ${qty.toString().padStart(5)} pax | Subtotal: ${(qty*item.price).toString().padEnd(10)}`)
      total += qty * item.price
    })
    rl.question(`
Total Tagihan: ${total}

  (1) Bayar
  (0) Kembali ke Menu Utama

Pilih Opsi: `, (ans) => {
  if (ans == 1) {
    payment(total)
    items = []  // items di keranjang jadi kosong
  } else if (ans == 0) {
    backHome()
  }
})
  }
}

function payment(total) {
  rl.question(`
${"-".repeat(100)}

Total Tagihan: ${total}
Uang yang dibayarkan: `, (ans) => {
      ans = parseInt(ans)
      let change = ans - total
      if (change < 0) {
        console.log(`!! Maaf uang anda kurang. !!`)
        backPayment(total)
      } else {
        console.log(`
${"-".repeat(100)}

Uang Kembalian: ${change}

Pesanan sedang diproses...`)
        // history(order)
        backHome()
      }
    })
}

function backCart() {
  cart()
}

function backPayment(total) {
  payment(total)
}

// RIWAYAT PEMBELIAN


function history(order) {
  let orders = []
  if (orders.length > 0) {
    orders.push(order)
  } else {
    rl.question(`
${"-".repeat(100)}

Belum ada riwayat pembelian.

  (1) Mulai Memesan
  (0) Kembali ke Menu Utama

Pilih Opsi: `, (ans) => {
  ans = parseInt(ans)
  if (ans == 1) {
    menu()
  } else if (ans == 0) {
    backHome()
  } else {
    console.log(`Input tidak sesuai. Periksa lagi opsi yang Anda pilih.`)
  }
  })
  }
}

// PROGRAM START

function start() {
  rl.question(home, (ans) => {
    ans = ans.trim()
    if (ans == 1) {           // menu
      menu()
    } else if (ans == 2) {    // keranjang
      cart()
    // } else if (ans == 3) {    // riwayat pembelian
      // history()
    } else if (ans == 0) {    // keluar
      console.log(`\n--- Sampai jumpa lagi! ---\n`)
      rl.close()
    } else {
      console.log(`Input tidak sesuai. Periksa lagi opsi yang Anda pilih.`)
      backHome()
    }
  })
}

function backHome() {
  start()
}

start()