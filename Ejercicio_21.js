const users = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 }
]

let minorUsers = 'Usuarios menores de edad:'
let adultUsers = 'Usuarios mayores de edad:'

for (const user of users) {
  if (user.years < 18) {
    ;(minorUsers += user.name), 'name'
  } else {
    ;(adultUsers += user.name), 'name'
  }
}

console.log(minorUsers)
console.log(adultUsers)
