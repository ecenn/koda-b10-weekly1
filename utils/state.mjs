import fs from "node:fs";

export const orders = [];

const fileInvoices = new URL("../data/invoices.json", import.meta.url);
export const invoices = JSON.parse(fs.readFileSync(fileInvoices, "utf-8"));

export function simpanInvoices() {
  fs.writeFileSync(fileInvoices, JSON.stringify(invoices));
}