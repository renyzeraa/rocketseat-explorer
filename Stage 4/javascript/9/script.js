/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

const patients = [
  {
    name: 'Pedro',
    age: 25,
    weight: 100,
    height: 190
  },
  {
    name: 'Renan',
    age: 33,
    weight: 70,
    height: 150
  },
  {
    name: 'Julio',
    age: 18,
    weight: 80,
    height: 175
  },
  {
    name: 'Caio',
    age: 27,
    weight: 90,
    height: 180
  }
]

let patientsNames = []

for (let patient of patients) {
  patientsNames.push(patient.name, patient.age, patient.weight, patient.height)
}

alert(patientsNames)
