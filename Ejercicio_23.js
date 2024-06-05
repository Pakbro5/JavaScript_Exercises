const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
]

const peliculasPequeñas = []
const peliculasMedianas = []
const peliculasGrandes = []

for (const movie of movies) {
  if (movie.durationInMinutes < 100) {
    peliculasPequeñas.push(movie)
  } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes <= 200) {
    peliculasMedianas.push(movie)
  } else if (movie.durationInMinutes >= 200) peliculasGrandes.push(movie)
}

console.log('peliculasPequeñas:', peliculasPequeñas)
console.log('peliculasMedianas:', peliculasMedianas)
console.log('peliculasGrandes:', peliculasGrandes)
