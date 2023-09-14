//desestructuracion de array
const characters = ['Goku', 'Vegeta', 'Trunks'];

// const [ g, v, t ] = characters; //desestructura todo el array
// console.log (g, v, t) 

// const [ , , t] = characters //desestructuramos solo a Trunks, que se encuentra en la ultima posicion, esto quiere decir que debemos marcar las posiciones con coma para indicarle que valor queremos
// console.log (t) 

// const [ g, v, t, goten = 'No tiene valores' ] = characters; //agrego nuevo elemento con un valor
// console.log(goten) 


const returnArray = () => {
    return ['ABC', 123]
}

const [letters, numbers ] = returnArray()

console.log(letters, numbers)