const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']
const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]

let groupOfFruits = 0

for (let i = 0; i < foodSchedule.length; i++) {
  if (!foodSchedule.isVegan) {
    if (groupOfFruits < fruits.length) {
      foodSchedule[i] = { name: fruits[groupOfFruits], isVegan: true }
      groupOfFruits++
    } else {
      break
    }
  }
}

console.log(foodSchedule)
