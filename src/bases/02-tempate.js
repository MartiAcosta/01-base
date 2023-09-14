const nombre = 'Martu'
const apellido = 'Acosta'

const nombreApellido= `Martina Acosta`
const nombreComp = 'nombre apellido' // me muestra el string nombre apellido.
const nombreCompleto = ` Hola: ${ nombre } ${ apellido } `  // `` -> backticks (alt + 96) se usa para llamar variables declaradas

console.log(nombreApellido) //Martina Acosta
console.log(nombreComp) //nombre apellido
console.log(nombreCompleto) // Hola: Martu Acosta

function getSaludo( nombre ){
    return 'Hola ' + nombre
}

console.log(`Este es un texto: ${ getSaludo(nombre) }`) //Este es un texto: Hola Martu

  