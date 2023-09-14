
const miPromesa = () => {
    return new Promise( (resolve, reject) =>{
        setTimeout(() =>{
            resolve('Tenemos un valor en la promesa')
        }, 100)
    })
}

const medirTimeAsync = async() => { //funcion async
    console.log('Inicio')

    const respuesta = await miPromesa()
    console.log(respuesta)

    console.log('Fin')

    // return 'fin de medir tiempo async'
    throw 'Error en medirTiempoAsync'
}


medirTimeAsync().then(v => console.log((v)))
                .catch(err => console.log(err))



