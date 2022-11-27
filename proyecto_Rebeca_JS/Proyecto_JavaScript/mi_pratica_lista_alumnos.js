import { Console } from 'console';
import readline from 'readline'

function getYoungerStudentName(students){

  let studentName;

  let ageStudent = students.map(function(students){
    return students.age;
  }) 

  let youngerStudentAge = Math.min(...ageStudent);

  for(let i = 0; i < students.length; i++){

    if(students[i].age === youngerStudentAge){
      studentName = students[i].name;
    }

  }
  return studentName
}


function calculateRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

// configuramos la utilidad de node para que los datos se pidan y se muestren por consola.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isInt(str) {
  // returns a boolean
  return /^[0-9]+$/.test(str);
}



// productor
function getNumberFromConsole() {
  const promise = new Promise((resolve, reject) => {
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
    +"15- Ordenar el array de alumnos alfabéticamente según su nombre. "+"\n"+"==>: ", (num) => {
      rl.pause();
      if (isInt(num) && num <= 15 && num > 0) {
        num = Number.parseInt(num);
        resolve(num);
      } else {
        reject("Por favor introduce un número entero");
      }
    });
  });

  return promise;
}

async function opcionesDeLista() {

  let numberFromConsole;
  let counter = 0;

  const students = [{
    age: 32,
    examScores: [],
    gender: 'male',
    name: 'Yordan'
  },
  {
    age: 29,
    examScores: [],
    gender: 'female',
    name: 'Zaid'
  },
  {
    age: 30,
    examScores: [],
    gender: 'female',
    name: 'Sarah'
  }
]

  // variables//
const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female'];

  do {
    try {
      counter++;
      numberFromConsole = await getNumberFromConsole();
    } catch (error) {
      console.log(error);
      process.exit(0);
    }

    switch(numberFromConsole){
      case 1://Muestra formato tabla los alumnos
        console.table(students); 
        break;
      case 2:// Muestra la cantidad de alumnos
        console.log("Hay "+students.length+" alumnos");
        break;
      case 3: // Muestra el nombre de los alumnos 
        let student = students.map(function(students)
        {
          return students.name;
        }) 
        console.log(student);
        break;
      case 4: // Elimina el último alumno de la clase.
        students.pop(); 
        console.table(students);
        break;
      case 5: // Elimina un alumno de forma aleatoria
        console.log("NUMERO ALEATORIO: "+Math.floor(Math.random() * students.length))
        students.splice(Math.floor(Math.random() * students.length), 1);
        console.table(students);
        break;
      case 6: //Mostrar por consola todos los datos de los alumnos que son chicas.
       
        students.find(object => {

          if(object.gender === "female") {
            console.table(object)
          }

        })

        break;
      case 7: //Mostrar por consola el número de chicos y chicas que hay en la clase.
      let girlsList = students.filter((student) => student.gender === 'female');
      let boysList = students.filter((student) => student.gender === 'male');
    
      console.log('Número de alumnas:', girlsList.length);
      console.log('Número de alumnos:', boysList.length);
        break;
      case 8: //Mostrar true o false por consola si todos los alumnos de la clase son chicas

      let hayAlgunaChica = true;

      students.find(object => {

        if(object.gender === "male") {

          hayAlgunaChica = false;
        }

      })

      console.log(hayAlgunaChica);

        break;
      case 9: //Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años

      let noOneBetween = true;

      for(let i = 0; i < students.length; i++){

        if(students[i].age > 19 && students[i].age < 26){

          console.log(students[i].name);
          noOneBetween = false;

        }
     
      }
      if(noOneBetween){
        console.log("No hay ningun estudiante entre 20 y 25");
      }

        break;
      case 10: // Añadir un nuevo alumno 
        let randomGender =
          availableGenders[Math.floor(Math.random() * availableGenders.length)];
        // - Nombre aleatorio.
        let randomName;
        if (randomGender === 'female') {
          randomName =
            availableFemaleNames[
              Math.floor(Math.random() * availableFemaleNames.length)
            ];
        } else {
          randomName =
            availableMaleNames[
              Math.floor(Math.random() * availableFemaleNames.length)
            ];
        }
        const minAge = 20;
        const maxAge = 50;
        let randomAge = Math.floor(Math.random() * (maxAge - minAge) + minAge);
      
        students.push({
          age: randomAge,
          examScores: [],
          gender: randomGender,
          name: randomName,
        });
      
        console.log('Add a random student: ', students);
      
        break;
      case 11: // Nombre de la persona mas joven 
        console.log("\n"+"El nombre del estudiante con menor edad de todos es: "+getYoungerStudentName(students)+"\n");
        break;
      case 12: // Mostrar por consola la edad media de todos los alumnos de la clase.
      function media() {
        let avg = students.reduce((a, b) => a + b.age, 0) / students.length;
      
        console.log("La media de la edad de los alumnos es: ", Math.round(avg));
      }

      console.log(media());
        break;
      case 13: //Mostrar por consola la edad media de todos los alumnos de la clase
      function femaleAvg() {
        let totalGirls = students.filter((student) => student.gender === 'female');
        let femaleAvg = totalGirls.reduce((a, b) => a + b.age, 0) / totalGirls.length;
       
        return Math.round(femaleAvg);
      }
        console.log(femaleAvg());
        break;
      case 14: // Añadir nueva nota a los alumnos. Por cada alumno de la clase calcular una nota aleatoria (un numero entre 0 y 10) y añadirlo a su lista de nota
         function addRandomScore() {
          students.forEach((newScore) => {
            newScore.examScores.push(calculateRandomNumber(0, 10));
          });
        
          console.log("The students' new scores are", students);
        }
        console.log(addRandomScore());
        break;
      case 15: // Muestra el nombre de los alumnos ordenados alfabéticamente. 
       
        console.log(students.sort((a, b) => a.name.localeCompare(b.name)));
        break; 
      default:
        console.log("opción NO valida!")
    }


  } while (isInt(numberFromConsole) && numberFromConsole <= 15 && numberFromConsole > 0); // condiciones de continuar jugando
}

opcionesDeLista();