const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3000;

    
const uri = 'mongodb+srv://srempalador2021:Oleger1194@devoscar.h7chs.mongodb.net/?retryWrites=true&w=majority&appName=DevOscar';
const dbName = 'dbStudent';
const collectionName = 'usuarios';

app.use(express.json());

let col;

async function connect() {
    try {
        const client = new MongoClient(uri);
        await client.connect();
        console.log('Connected to MongoDB');
        const db = client.db(dbName);
        col = db.collection(collectionName);
        
    } catch (err) {
        console.error('Error conectando a Mongodb:', err);
        
    } 
    

    // let client
    // try {
    //     client = new MongoClient(uri);
    //     await client.connect();
    //     console.log("Connected to MongoDB");
    //     const db = client.db(dbName);
    //     col = db.collection(collectionName);

    // }catch(err){
    //     console.log('Error connecting to MongoDB;', err);
    // }finally {
    //     if (client) {
    //         await client.close();
           
    //     }
    // }    
            
}
connect().catch(console.error);


//Listar usuarios
app.get('/usuarios', async (req, res) => {
    try {
        const result = await col.find().toArray();
        res.json(result);
        
    } catch (error) {
        res.status(500).json({ error: 'Error obteniendo usuarios'});
        
    }
});

//obteniendo usuario
app.get('/usuarios/:name', async (req, res) => {
    try {
        const user = await col.findOne({ name: req.params.name });
        res.json(user);
    }catch(err) {
        res.status(404).json({ error: 'Usuario no encontrado' });
    }

});

//crear usuarios con express en la ruta con post y los datos del usuario
app.post('/usuarios', async (req, res) => {
    try {
        const result = await col.insertOne(req.body);
        res.status(201).json(result);
        res.send('Create User');
        
    } catch (err) {
        res.status(500).json({ error: 'Error creando usuario' });
        
    }
     
         
});

//Actualizar usuarios 
app.put('/usuarios/:name', async (req, res) => {
    //const { name, ...updateFields } = req.body;
    try {
        const result = await col.updateOne(
            { name: req.params.name },
            { $set: req.body }
        );
        res.json(req.body);
        res.send('Update User');
        
    } catch (err) {
        res.status(500).json({ error: 'Error actualizando usuario' });
        
    }
    
    
});

//Eliminar usuarios
app.delete('/usuarios/:id', async (req, res) => {
    try {
        const result = await col.deleteOne({ name });
        res.json(result);
        
    } catch (err) {
        res.status(500).json({ error: 'Error eliminando usuario' });
        
    }
    
    
    
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});




