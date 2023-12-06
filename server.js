const express = require('express');
const bodyParser = require('body-parser');
const mahasiswaController = require('./controllers/mahasiswacontroller')

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

//endpoint untuk mahasiswa
app.use('/mahasiswa', mahasiswaController);

//jalankan server
app.listen(PORT, () => {
    console.log('server is running on http://localhost:${PORT}');
});
