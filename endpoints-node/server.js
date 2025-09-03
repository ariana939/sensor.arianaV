import express from 'express'

const app = express();
const PORT = 5000;//cuando creamos un const con MAYUSCULA es una constante constante

app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Este es un endpoint hecho con express');
});

//endpoint con parametro
app.get('/api/user/:id', (req, res) => {
    //destructuración, captuar un pedacito(valor) de un objeto, request, arreglo
    const {id} = req.params
    res.json({message: `El usuario con id ${id} es Pepito`});
});

app.get('/api/search', (req, res) => {
    const {name, lastname} = req.query;
    res.json({
        firstName: name, //renombramos a name por firstName
        lastname,
    });
    //http://localhost:PUERTO/api/search?name=Ariana&lastname=Villa 
});

//endpoint POST
app.post('/api/user', (req, res) => {
    const {name, email} = req.body;
    res.json({message: "Usuario Creado", data: { name, email } });
});

// Iniciar el servidor
// listen siempre al final
app.listen(PORT,() => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

