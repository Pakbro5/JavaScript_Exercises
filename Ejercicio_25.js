const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]

let totalVentas = 0

for (const product of products) {
  totalVentas += product.sellCount
}

const mediaVentas = totalVentas / products.length

console.log('El total de las ventas es:', totalVentas)
console.log('La media de las ventas es:', mediaVentas)
