const port = 5000

const express = require('express')
const axios = require('axios')
const cors = require('cors')

require('dotenv').config()
const app = express()
app.use(cors())

app.listen(port, ()=> console.log(`Server is running on ${port}`))

app.get('/',(req,res)=>{
    const options = {
        method: 'GET',
        url:'https://api.unsplash.com/photos/random?orientation=landscape',
        headers:{
            'Authorization':`Client-ID ${process.env.UNSPLASH_APP_ACCESS_KEY}`,
            'Accept-Version':'v1',
            "orientation":"landscape"
        }
    };

    axios.request(options).then((response)=>{
        res.json(response.data)
    }).catch((error)=>{
        console.error(`Issue getting an image\n${error}`);
    })
})

