//1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']

console.log(avengers[0])

//1.2 Cambia el primer elemento de avengers a "IRONMAN"

avengers[0] = 'IRONMAN'

console.log(avengers)

//1.3 console numero de elementos en el array usando la propiedad correcta de Array.
console.log(avengers.length)

//1.4 Añade 2 elementos al array: "Morty" y "Summer".
//Muestra en consola el último personaje del array
const rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry']

rickAndMortyCharacters.push('Morty', 'Summer')

console.log(rickAndMortyCharacters)

console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1])
