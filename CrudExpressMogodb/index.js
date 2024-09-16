const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3000;

app.use(express.json());

async function connect() {
    const uri = "mongodb+srv://srempalador2021:@leger1194@devoscar.h7chs.mongodb.net/?retryWrites=true&w=majority&appName=DevOscar";
    const client = new MongoClient(uri);
    await client.connect();
    console.log("Connected to MongoDB");
    const db = client.db("dbEstudiantes");
    return db;
        
}
let collection = connect();

//crear usuarios con express en la ruta con post y los datos del usuario
app.post('/usuarios', async (req, res) => {
    const { name, password } = req.body;
    const db = await collection;
    const result = await db.collection('usuarios').insertOne({ name, password });
    res.send('Create User');
         
});

//Listar usuarios
app.get('/usuarios', async (req, res) => {
    const db = await collection;
    const result = await db.collection('usuarios').find().toArray();
    res.json(result);

});

//Actualizar usuarios 
app.put('/usuarios/:id', async (req, res) => {
    //const id = req.params.id;
    //const { name, password } = req.body;
    //const db = await collection;
    //const result = await db.collection('usuarios').updateOne({ _id: ObjectId(id) },{ $set: { name, password }});
    let result = collection.updateOne(
        { name: req.body.name },
        { $set: { password: req.body.password } }
    );
    res.json(req.body);
    res.send('Update User');
    
});

//Eliminar usuarios
app.delete('/usuarios/:id', async (req, res) => {
    //const id = req.params.id;
    //const db = await collection;
    let result = collection.deleteOne({ name: req.body.name });
    res.json(result);
    
});










app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});




