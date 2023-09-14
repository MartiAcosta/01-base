console.log('Hola Martu')


//desestructuración de objetos

const person = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman'
}

const {name, age, codeName, power = 'No tiene poder' } = person // esto me desestructura el objeto

//Me muestra el objeto desestructurado por cada console.log que hago y llamo lo que quiero ver
// console.log(name)
// console.log(age)
// console.log(codeName)
// console.log(power)

const createHerore = ( {name, codeName, power = 'No tiene poder' }  ) => ({  //desestructuramos objeto para no estar llamando person.name, sino que directamente name
        id: 1112236547,
        name: name, //si es un elemento desestructurado
        age: person.age, //es un elemento no desestructurado, entonces debo llamarlo person.age
        codeName, //ya que apuntamos al mismo valor que person, podemos obviar codeName : codeName y poner directamente codeName, ya que person se encuntra desestructurado
        power : power,
})

console.log( createHerore( person ) )