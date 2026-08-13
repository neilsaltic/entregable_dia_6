import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇

/* let system_name: string = "Neils_Alanoca";
let version: number = 1.0;
let user_name: string= "Neilsaltic";

console.log(system_name, version);
console.log("Bienvenido, " +user_name + "!"); */
interface lista {
  id: number;
  title: string;
  completed: boolean;
}

let menu: lista[] = [];
let proxid: number = 1;
let contid = 1;
const addlista = (
  title: string,
  completed: boolean,
  callback: (anime: lista) => void,
) => {
  const nuevoanime: lista = {
    id: proxid++,
    title: title,
    completed: completed,
  };
  menu.push(nuevoanime);
  callback(nuevoanime);
};

const listar = (callback: (lista: lista[]) => void) => {
  callback(menu);
};

const eliminarultimo = (
  callback: (eliminado: lista | null, mensaje: string) => void,
) => {
  if (menu.length > 0) {
    const eliminar = menu.pop()!;
    callback(eliminar, "Anime Eliminado");
  } else {
    callback(null, "no hay nada para borrar");
  }
};
let opcion: string;
do {
  console.log("-------- Menu de Animes -------");
  console.log("1. Agregar Anime");
  console.log("2. Eliminar el ultimo Anime");
  console.log("3. Listado de Animes");
  console.log("4. Salir");

  opcion = await rl.question("Elige una opcion: ");
  const opcionC: number = parseInt(opcion, 10);

  switch (opcionC) {
    case 1:
      const titulo: string = await rl.question("Ingresa el nombre del Anime: ");
      const estado: string = await rl.question(
        "Cual es el estado?(Pendiente o Completado): ",
      );
      const estadobool = estado.toLowerCase() === "completado";

      addlista(titulo, estadobool, (anime) => {
        console.log(`anime agregado id: ${anime.id} nombre: ${anime.title}`);
      });
      break;
    case 2:
      eliminarultimo((eliminado, mensaje) => {
        if (eliminado) {
          console.log(mensaje);
        } else {
          console.log(mensaje);
        }
      });
      break;
    case 3:
      listar((lista) => {
        if (lista.length === 0) {
          console.log("La lista esta vacia: ");
        }
        console.log(" Lista de Animes ");
        for (let i = 0; i < lista.length; i++) {
          const anime = lista[i];
          let estadotx: string;
          if (anime.completed === true) {
            estadotx = "Completado";
          } else {
            estadotx = "Pendiente";
          }
          console.log(
            `ID: ${anime.id} nombre: ${anime.title} estado: ${estadotx}`,
          );
        }
      });

      break;
    case 4:
      console.log("Escogiste Salir ");
      break;
    default:
      console.log("La opcion que escogiste no existe en el listado :D");
      break;
  }
} while (opcion !== "4");

/* let opcion: string;
do {
  console.log("-------- Menu de Animes -------");
  console.log("1. Agregar Anime");
  console.log("2. Eliminar el ultimo Anime");
  console.log("3. Listado de Animes");
  console.log("4. Salir");

  opcion = await rl.question("Elige una opción: ");
  const opcionC: number = parseInt(opcion, 10);
  switch (opcionC) {
    case 1:
      let anime: string = await rl.question("Escribe el Anime: ");
      menu.push(anime);
      console.log("Anime Agregado");
      break;

    case 2:
      if (menu.length > 0) {
        menu.pop();
        console.log("Anime Eliminado");
      } else {
        console.log("No se puede realizar por que la lista esta vacia");
      }
      break;

    case 3:
      if (menu.length > 0) {
        console.log("Lista de animes:");

        for (let i = 0; i < menu.length; i++) {
          console.log(`${i + 1}. ${menu[i]}`);
        }
      } else {
        console.log("La Lista esta vacia");
      }
      break;

    case 4:
      console.log("Escogiste Salir ");
      break;

    default:
      console.log("La opcion que escogiste no existe en el listado :D");
  }
} while (opcion !== "4"); */

// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();
