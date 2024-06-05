const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]
function repeatCounter(param) {
  let wordRepeat = []

  param.forEach((word) => {
    wordRepeat[word] = (wordRepeat[word] || 0) + 1
  })
  return wordRepeat
}

console.log(repeatCounter(counterWords))
