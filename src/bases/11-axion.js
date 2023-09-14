import axios from 'axios'


const apikey= 'tB0PclxLL7aWQPg94O3zlAOtJ7JPtFmo'
//https://api.giphy.com/v1/gifs/random?api_key=tB0PclxLL7aWQPg94O3zlAOtJ7JPtFmo

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apikey
    }

})

giphyApi.get('/random')
    .then(resp => {
        const { data } = resp.data
        const { url } = data.images.original
        
        const img = document.createElement('img')
        img.src = url
        document.body.append( img )
    })


    export default giphyApi;