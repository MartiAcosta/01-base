import giphyApi from "./bases/11-axion";

const getImage = async() => { //funcion asincronica

    try{
        //estos desestructurando data y url de la api
        //await solo se usa si la funcion es async, sino no anda
        const { data } = (await giphyApi.get('/random')).data //Primero se ejecuta esta linea, envio .data para no volver a repeir dos veces data.data en la linea de abajo
        const { url } = data.images.original


        //coloca la img en pantalla, cada vez que recargo pag aparece una nueva img
        const img = document.createElement('img')
        img.src = url
        document.body.append( img )

    } catch(error){
        console.log('Error en la peticion', error)
        throw error
    }

}

getImage()



