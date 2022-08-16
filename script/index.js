import {nombresDeGatos} from './constant/nombres.js';
import responsive from "./responsive.js";
responsive();
const individual = {
  descripcion: 'Individual - Gatito',
  costo: 1500
};
const doble = {
  descripcion: 'Doble - Gatito y un compañero',
  costo: 3200
};
const grupal = {
  descripcion: 'Grupal - Gatito y muchos compañeros ',
  costo: 2500
}
const opctionList = `*** HOTEL PARA GATITOS ***
                  Seleccione una opcion:
                  1 Habitaciones
                  2 Nombres de Gatitos *Nuevo*
                  3 Salir
`
const opcionListError = `*** HOTEL PARA GATITOS ***
                  Ingrese un valor correcto
                  Seleccione una opcion:
                  1 Habitaciones
                  2 Nombres de Gatitos *NUEVO*
                  3 Salir
`
const opctionListHoteles = `*** HOTEL PARA GATITOS ***
                  Seleccione una opcion:
                  1 ${individual.descripcion}                                        $${individual.costo}
                  2 ${doble.descripcion}                   $${doble.costo}
                  3 ${grupal.descripcion}       $${grupal.costo}
                  4 Total de los servicios
                  5 Volver al Menu
`
const opcionNombres = `*** HOTEL PARA GATITOS ***
                        Te ayudamos a elegir un nombre para tu michi!
                        1- Nombre Aleatorio
                        2- Nombre por Inicial
                        3- volver al menu
`
const ingresarPalabraNombres = `*** HOTEL PARA GATITOS ***
                              Ingrese letra para filtrar nombres( b no es lo mismo que B)!
`
const getNombreAleatorio = () => {
  const random = Math.floor(Math.random() * nombresDeGatos.length)
alert("El nombre aleatorio es: " + nombresDeGatos[random])
}

const getNombreByWord = (palabra) => {
  const mappingNames = nombresDeGatos.filter(element => element.includes(palabra))
  let lista = ''
  mappingNames.forEach((element) => {
    lista += ` 
      -${element} `
  })
  alert(`
          *** Cat Hotel ***
          Listas de nombres matcheados con ${palabra}: 
          ${lista}

          Presione cualquier tecla para volver al menu...`);

}

const nombresRecomendados = () => {
  let opcion = 0;
  do {
    opcion = Number(prompt(opcionNombres));
    switch (opcion) {
      case 1: {
        getNombreAleatorio();
        break;
      }
      case 2: {
        const palabra = String(prompt(ingresarPalabraNombres));
        getNombreByWord(palabra);
        break;
      }
      case 3: return
      default: ;
    }
  } while (opcion !== 3)
}

let opcion = 0;
let totalArray = [];

const agregarServicio = (servicio) => {
  alert(`Se agrego ${servicio.descripcion} $${servicio.costo} al total
              Presione para continuar...`)
  totalArray.push(servicio);
}
const hotelesServices = () => {
  let opcion = 0;
  do {
    opcion = Number(prompt(opctionListHoteles));
    switch (opcion) {
      case 1: {
        agregarServicio(individual);
        break;
      }
      case 2: {
        agregarServicio(doble);
        break;
      }
      case 3: {
        agregarServicio(grupal);
        break;
      }
      case 4: {
        totalDeLosServicios();
        break;
      }
      case 5: return;
      default: console.error('Error')
    }
  } while (opcion !== 4)
}
const orderByPrice = (a, b) => {
  if (a.costo > b.costo) {
    return 1;
  }
  if (a.costo < b.costo) {
    return -1;
  }
  return 0;
}

const totalDeLosServicios = () => {
  console.log(totalArray);
  const total = totalArray.reduce((prev, current) => prev + current.costo, 0);
  console.log(total);
  totalArray = totalArray.sort(orderByPrice)
  let lista = ''
  totalArray.forEach((element) => {
    lista += ` 
      -${element.descripcion}        $${element.costo} `
  })
  alert(`
          *** Cat Hotel ***
          Detalle de sus servicios: 
          ${lista}


          Total de la compra:             $${total}

          Presione cualquier tecla para volver al menu...`);
}

do {
  opcion = Number(prompt(opctionList));

  switch (opcion) {
    case 1: hotelesServices();
      break;
    case 2: nombresRecomendados();
      break;
    case 3: {
      alert('MUCHAS GRACIAS ADIOS!');
      break;
    };
    default: opcion = Number(prompt(opcionListError));
  }
} while (opcion !== 3)