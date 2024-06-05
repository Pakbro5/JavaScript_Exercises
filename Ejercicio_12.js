const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]
function removeDuplicates(param) {
  let uniqueItems = []
  param.forEach((item) => {
    if (!uniqueItems.includes(item)) {
      uniqueItems.push(item)
    }
  })
  return uniqueItems
}

console.log(removeDuplicates(duplicates))
