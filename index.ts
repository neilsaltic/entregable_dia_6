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
const addlista = (
  title: string,
  completed: boolean,
  callback: (anime: lista) => void,
) => {
  const nuevaTarea: lista = {
    id: proxid++,
    title: title,
    completed: completed,
  };
  menu.push(nuevaTarea);
  callback(nuevaTarea);
};

const listar = (callback: (lista: lista[]) => void) => {
  callback(menu);
};

const eliminarultimo = (
  callback: (eliminado: lista | null, mensaje: string) => void,
) => {
  if (menu.length > 0) {
    const eliminar = menu.pop()!;
    callback(eliminar, "Tarea Eliminado");
  } else {
    callback(null, "no hay nada para Eliminar");
  }
};

const markCompletado = (id: number) => {
  const tareaEncon = menu.find((tarea) => tarea.id === id);
  if (tareaEncon) {
    tareaEncon.completed = true;
    console.log(`tarea: ${tareaEncon.title} Completada!!! `);
  } else {
    console.log(`Tarea no Encontrada
      `);
  }
};

let opcion: string;
do {
  console.log("-------- Menu de Tareas -------");
  console.log("1. Agregar Tarea");
  console.log("2. Eliminar el ultima Tarea");
  console.log("3. Listado de Tareas");
  console.log("4. Lista de Tareas: Pendientes");
  console.log("5. Lista de Tareas: Completadas");
  console.log("6. Marcar Tarea -Pendiente- como -Completada-");
  console.log("7. Salir");

  opcion = await rl.question("Elige una opcion: ");
  const opcionC: number = parseInt(opcion, 10);

  switch (opcionC) {
    case 1:
      const titulo: string = await rl.question(
        "Ingresa el nombre de la tarea: ",
      );
      const estado: string = await rl.question(
        "Cual es el estado?(Pendiente o Completado): ",
      );
      const estadobool = estado.toLowerCase() === "completado";

      addlista(titulo, estadobool, (anime) => {
        console.log(`tarea agregado id: ${anime.id} nombre: ${anime.title}`);
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
        console.log(" Lista de Tareas ");
        const listado: string[] = lista.map((tarea) => {
          const { id, title, completed } = tarea;
          const estado = completed ? "Completado" : "Pendiente";
          return `id: ${id}, titulo: ${title}, estado: ${estado}`;
        });
        listado.forEach((linea) => console.log(linea));
      });

      break;
    case 4:
      listar((lista) => {
        if (lista.length === 0) {
          console.log("La lista esta vacia: ");
        }
        const Pendientes = lista.filter((tarea) => {
          return tarea.completed === false;
        });

        const listaPendientes: string[] = Pendientes.map((tarea) => {
          const { id, title, completed } = tarea;
          const estado = completed ? "Completado" : "Pendiente";
          return `id: ${id}, titulo: ${title}, estado: ${estado}`;
        });
        listaPendientes.forEach((linea) => console.log(linea));
      });
      break;
    case 5:
      listar((lista) => {
        if (lista.length === 0) {
          console.log("La lista esta vacia: ");
        }
        const Completadas = lista.filter((tarea) => {
          return tarea.completed === true;
        });

        const listaCompletadas: string[] = Completadas.map((tarea) => {
          const { id, title, completed } = tarea;
          const estado = completed ? "Completado" : "Pendiente";
          return `id: ${id}, titulo: ${title}, estado: ${estado}`;
        });
        listaCompletadas.forEach((linea) => console.log(linea));
      });
      break;
    case 6:
      const ingresaid = await rl.question(
        "Ingresa el Id de la tarea que quieres marcar Completado: ",
      );
      const id = parseInt(ingresaid, 10);

      if (isNaN(id)) {
        console.log("Introduce un ID Valido ");
      } else {
        markCompletado(id);
      }
      break;
    case 7:
      console.log("Escogiste Salir ");
      break;
    default:
      console.log("La opcion que escogiste no existe en el listado :D");
      break;
  }
} while (opcion !== "7");

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
