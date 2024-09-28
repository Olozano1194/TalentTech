const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

//Configuración del moddleware para servir archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//Ruta para servir el archivo html directamente
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });


app.listen(port,() => {  
    console.log(`Server is running on port: ${port}`);
});



