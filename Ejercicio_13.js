const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]
function finderName(array, param) {
  for (let i = 0; i < array.length; i++) {
    if (param == array[i]) {
      return true
    }
  }
  return false
}

console.log(finderName(nameFinder, 'James'))
console.log(finderName(nameFinder, 'Jessica'))
