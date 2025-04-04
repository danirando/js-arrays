const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

const teacherZero = teachers[0];
const teacherOne = teachers[1];
const teacherTwo = teachers[2];
const teacherThree = teachers[3];
const teacherFour = teachers[4];
const teacherFive = teachers[5];
const teacherSix = teachers[6];

for (let i = 0; i < teachers.length; i++) {
  teachers[0] = teacherSix;
  teachers[1] = teacherFive;
  teachers[2] = teacherFour;
  teachers[3] = teacherThree;
  teachers[4] = teacherTwo;
  teachers[5] = teacherOne;
  teachers[6] = teacherZero;
}
const reversedTeachers = teachers;

console.table(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

// for (let i = 0; i < teachers.length; i++) {
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].length >= 5) {
    longNames.push(teachers[i]);
  }
}

console.table(longNames);

// 3. Rimuovi 'Ed' dall'array teachers

teachers.splice(5, 1);

console.table(teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
let ePresente;

if (teachers.includes("Fabio")) {
  ePresente = true;
} else {
  ePresente = false;
}

const isFabioPresent = ePresente;

console.log(isFabioPresent);

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString

const teachersString = `${teachers[0]}, ${teachers[1]}, ${teachers[2]}, ${teachers[3]}, ${teachers[4]}, ${teachers[5]}`;

console.log(teachersString);
