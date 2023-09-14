const persona = {
    nombre: 'Tony',
    apellido: 'Gonzales',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 523123,
        lat: 14.3232,
        lng: 34.456842
    }
}

const persona1= persona //crea variable persona1 y guardo lo que ya tengo en persona
const persona2= {...persona} //creo variable persona2, le pongo operador spret, me ayuda a crear un nuevo objeto.

persona1.nombre = 'Peter' //aca llama a nombre y le doy el valor de 'Peter', lo que me va hacer esto es, traerme el objeto de persona con sus valores, y me va acrear otro con los valores de persona1 y cambiar el valor de nombre.
persona2.nombre = 'Robert' // en este caso si me va a traer un objeto con el nombre cambiado

console.log(persona) 
//{nombre: 'Peter', apellido: 'Gonzales', edad: 45, direccion: {…}}
// apellido:  "Gonzales"
// direccion : {ciudad: 'New York', zip: 523123, lat: 14.3232, lng: 34.456842}
// edad :  45
// nombre: "Peter"

console.log(persona1)
// {nombre: 'Peter', apellido: 'Gonzales', edad: 45, direccion: {…}}
// apellido:  "Gonzales"
// direccion:  {ciudad: 'New York', zip: 523123, lat: 14.3232, lng: 34.456842}
// edad : 45
// nombre: "Peter"

console.log(persona2)
// {nombre: 'Robert', apellido: 'Gonzales', edad: 45, direccion: {…}}
// apellido : "Gonzales"
// direccion: {ciudad: 'New York', zip: 523123, lat: 14.3232, lng: 34.456842}
// edad : 45
// nombre: "Robert"
