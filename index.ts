import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇

let system_name: string = "Neils_Alanoca";
let version: number = 1.0;
let user_name: string= "Neilsaltic";

console.log(system_name, version);
console.log("Bienvenido, ",user_name, "!");

// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();