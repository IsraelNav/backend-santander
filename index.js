const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/connection');

const port = process.env.PORT || 8201

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnection();

//Rutas
const productRoutes = require('./routes/Product');

app.use('/api', productRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${ port }`);
})