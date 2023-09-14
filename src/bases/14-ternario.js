// Ternarios y null check 


let firstName;
let lastName= 'Herrera'

console.log(`${firtsname || 'No firtsName'} ${lastName || 'No lastName'}`)
//${firtsname || 'No firtsName'} si firtsName tiene un valor imprime el valor, pero si no tiene valor, es decir es 'Undefined agregamos || y le mando un mensaje para imprimir.

const isActive = true

const message = (isActive) ? 'Activo' : 'Inactivo'
//en la constante messege podemos realizar la condicion ahi. 
//Preguntamos si la condicion se cumple con signo de pregunta ?, o sea (isActivity) ? (es true) entonces imprimi activo. 
//Si la condicion no se cumple agregamos los dos puntos en caso que no se cumpla, y mandamos el mensaje que queresmos imprimir si entra despues de los dos puntos.