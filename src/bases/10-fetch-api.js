
const apikey= 'tB0PclxLL7aWQPg94O3zlAOtJ7JPtFmo'
//https://api.giphy.com/v1/gifs/random?api_key=tB0PclxLL7aWQPg94O3zlAOtJ7JPtFmo

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`) //funcion propia de js, nos permite hacer peticiones https
    .then( resp => resp.json() )
    .then(({  data })=>{
        const { data } = resp.data
        const { url } = data.images.original
        
        const img = document.createElement('img')
        img.src = url
        document.body.append( img )
    })