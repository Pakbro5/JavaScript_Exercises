const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]

let ventasTotales = 0

for (const product of products) {
  ventasTotales += product.sellCount
}

console.log('Total de las ventas:', ventasTotales)
