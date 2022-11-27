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
    name: 'Carla'
  }
]

  // variables//
const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female'];
var number;

// variable que permitirá mostrar al usuario opciones y obtener el valor que desea introducir
const rl = readline.createInterface({

  input: process.stdin,
  output: process.stdout

});

/*if(!isNaN(number) && number <= 15 && number > 0){

  console.log("NUMBERRRR: "+number);

}

rl.pause()*/

//función para pedir número
  rl.question(
    "Por favor introduce la opción que desea: "+"\n"
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

      console.log("VALOR INTRODUCIDO: "+valorIntroducidoPorUsuario);

      number = parseInt(valorIntroducidoPorUsuario);

      console.log("VALOR INTRODUCIDO: "+valorIntroducidoPorUsuario);

      

    }
  )

 while(!isNaN(number) && number <= 15 && number > 0);

console.log("FIN DE PROGRAMA");

rl.pause();

console.table(students)

//2- Mostrar por consola la cantidad de alumnos que hay en clase.
console.log(students.length)

//3- Mostrar por consola todos los nombres de los alumnos.
let student = students.map(function(students)
    {
    return students.name;
    }) 
    console.log(student);

// 4- Eliminar el último alumno de la clase. 
students.pop();
console.table(students);

// 5- Eliminar un alumno aleatoriamente de la clase.


console.log("NUMERO ALEATORIO: "+Math.floor(Math.random() * students.length))
students.splice(Math.floor(Math.random() * students.length), 1);
console.table(students);
// 6- Mostrar por consola todos los datos de los alumnos que son chicas.



// 7- Mostrar por consola el número de chicos y chicas que hay en la clase.

// 8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.

// 9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.

// 10- Añadir un alumno nuevo con los siguientes datos:
    //nombre aleatorio.
    //edad aleatoria entre 20 y 50 años.
    //género aleatorio.
    //istado de calificaciones vacío.
    //¡OJO!, el nombre y el género tienen que ir acordes.
  students.push('Pedro' , '19' , 'male', '[]')
  console.log(students)

// 11- Mostrar por consola el nombre de la persona más joven de la clase.
   //OJO!, si varias personas de la clase comparten la edad más baja, cualquiera de ellos es una respuesta válida.

//12- Mostrar por consola la edad media de todos los alumnos de la clase.

//13- Mostrar por consola la edad media de las chicas de la clase.

//14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.

//15- Ordenar el array de alumnos alfabéticamente según su nombre.
 // metodo.sort 