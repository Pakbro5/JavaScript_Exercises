const numbers = [12, 21, 38, 5, 45, 37, 6]
function average(param) {
  let averageSum = 0

  for (let i = 0; i < param.length; i++) {
    averageSum += param[i]
  }

  return averageSum / param.length
}

console.log(average(numbers))
