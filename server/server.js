const express = require('express')

const PORT = 8001;

express()

    .get('/', (req, res) => {
        res.status(200).json({status: 200, message:'Hello World!' })
})

    .listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
})