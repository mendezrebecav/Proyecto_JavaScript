import { Console } from 'console';
import readline from 'readline'

const students = [{
    age: 32,
    examScores: [],
    gender: 'male',
    name: 'Eduardo'
  },
  {
    age: 29,
    examScores: [],
    gender: 'female',
    name: 'Silvia'
  },
  {
    age: 20,
    examScores: [],
    gender: 'female',
    name: 'Sarah'
  }
]

  // variables//
const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female'];
let numero = 0;
let condicionWhile = true;

// variable que permitirá mostrar al usuario opciones y obtener el valor que desea introducir
const rl = readline.createInterface({

  input: process.stdin,
  output: process.stdout

});

do{

  rl.question("Por favor introduce la opción que desea: "+"\n"
  +"1- Mostrar en formato de tabla todos los alumnos."+"\n"
  +"2- Mostrar por consola la cantidad de alumnos que hay en clase."+"\n"
  + "3- Mostrar por consola todos los nombres de los alumnos."+"\n"
  + "4- Eliminar el último alumno de la clase." +"\n"
  + "5- Eliminar un alumno aleatoriamente de la clase."+"\n"
  +"6- Mostrar por consola todos los datos de los alumnos que son chicas."+"\n"
  +"7- Mostrar por consola el número de chicos y chicas que hay en la clase."+"\n"
  +"8- Mostrar true o false por consola si todos los alumnos de la clase son chicas"+"\n"
  +"9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años."+"\n"
  +"10- Añadir un alumno nuevo con los siguientes datos: "+"\n"
  +"  *Nombre aleatorio"+"\n"
  +"  *Edad aleatoria entre 20 y 50 años"+"\n"
  +"  *género aleatorio"+"\n"
  +"  *listado de calificaciones vacío"+"\n"
  +"11- Mostrar por consola el nombre de la persona más joven de la clase"+"\n"
  +"12- Mostrar por consola la edad media de todos los alumnos de la clase."+"\n"
  +"13- Mostrar por consola la edad media de las chicas de la clase"+"\n"
  +"14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas."+"\n"
  +"15- Ordenar el array de alumnos alfabéticamente según su nombre. "+"\n"+"==>: ", (valorIntroducidoPorUsuario) => {

    //numero = numero.parseInt(valorIntroducidoPorUsuario);

    console.log("VALOR INTRODUCIDO: "+valorIntroducidoPorUsuario);
    numero = parseInt(valorIntroducidoPorUsuario);
    console.log("NUMERO: "+numero);

    if(!isNaN(numero) && numero <= 15 && numero > 0){

      console.log("Es un número tratable!!")
      console.table(students)
      condicionWhile = true;
    

    }else{

      console.log("NO ES UN VALOR CORRECTO FIN")
      condicionWhile = false;
      rl.pause();

      switch(numero){
        case 1:
          console.table(students)
          break;
        case 2:
          console.log(students.length)
          break;
        case 3:
          let student = students.map(function(students)
          {
            return students.name;
          }) 
          console.log(student);
          break;
        case 4:
          students.pop();
          console.table(students);
          break;
        case 5:
          console.log("NUMERO ALEATORIO: "+Math.floor(Math.random() * students.length))
          students.splice(Math.floor(Math.random() * students.length), 1);
          console.table(students);
          break;
        case 6:
          break;
        case 7:
          break;
        case 8:
          break;
        case 9:
          break;
        case 10:
          break;
        case 11:
          break;
        case 12:
          break;
        case 13:
          break;
        case 14:
          break;
        case 15:
          //metodo short 
          break; 
        default:
          console.log("opción NO valida!")
      }

    }
  })

  console.log("NUMERO: "+numero);

}while(!isNaN(numero) && numero <= 15 && numero > 0);