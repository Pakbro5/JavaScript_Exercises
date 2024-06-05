const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']
function averageWord(param) {
  let totalSum = 0

  for (const item of param) {
    if (typeof item === 'number') {
      totalSum += item
    } else if (typeof item === 'string') {
      totalSum += item.length
    }
  }

  return totalSum / param.length
}

console.log(averageWord(mixedElements))
