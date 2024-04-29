// ejercicio promedio de calificaciones

const calificaciones = [85,95,100,75,80, 50, 40, 60, 70, 100, 100]
// filtramos la informacion
const passingGrades = calificaciones.filter(calificacion => calificacion >= 70)
//sacamos promedio de calificaciones
const promedioCalificaciones = passingGrades.reduce((sum, calificacion) => sum + calificacion, 0) / passingGrades.length

console.log('Calificiones iniciales: ', calificaciones)
console.log('Passing grades: ', passingGrades)
console.log('Average Passing Grade: ', promedioCalificaciones)

