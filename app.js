const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'))

app.get('/home', (req, res) => {
    console.log('here')
    res.sendFile(__dirname + '/views/home.html')
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html')
})

app.get('/work', (req, res) => {
    res.sendFile(__dirname + '/views/work.html')
})

app.get('/gallery', (req, res) => {
    res.sendFile(__dirname + '/views/gallery.html')
})

app.listen(5000, () => {
    console.log('server is live')
})
