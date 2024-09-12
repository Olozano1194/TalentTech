const express = require('express');
const fs = require('fs'); //modulo para leer y escribir archivos
const app = express();
const port = 3000;

app.use(express.json()); //manejamos el Json


app.get('/', (require, response) => {
    response.send('Hello World!');
});

//función para leer la bd
const readBd = () => {
    const data = fs.readFileSync('./bd.json'); //leemos el archivo
    const bd = JSON.parse(data); //lo convertimos a un objeto json
    console.log(bd);
    return bd;

};
//Ruta para mostrar/obtener todo los elementos
app.get('/users', (req, res) => {
    const bd = readBd();
    res.json(bd);
});

//función para crear 
const create = (data) => {
    fs.writeFileSync('bd.json', JSON.stringify(data, null, 2)) //escribe el archivo
};
//ruta para crear un nuevo elemento
app.post('/users', (req, res) => {
    const data = readBd(); //leemos los datos
    const user = req.body; //obtenemos el nuevo elemento
    const newUser = {
        id: data.usuarios.length + 1,
        ...user,
    }
    data.usuarios.push(newUser); //añadimos el elemento
    create(data); //guardamos los cambios
    res.status(201).json(user); //devolvemos el nuevo elemento

});

//ruta para actualizar
app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const data = readBd();
    const user = req.body;
    const index = data.usuarios.findIndex((user) => user.id === id);
    data.usuarios[index] = {
        ...data.usuarios[index],
        ...user,
    };
    create(data);
    res.json({message: 'Datos actualizados correctamente'});
});

//ruta para eliminar
app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const data = readBd();
    const index = data.usuarios.findIndex((user) => user.id === id);
    data.usuarios.splice(index, 1);
    create(data);
    res.json({message: 'Usuario eliminado correctamente'});
    
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

