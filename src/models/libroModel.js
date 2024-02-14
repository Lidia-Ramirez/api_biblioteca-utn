require('dotenv').config();

console.log("Valor de MONGO_DB_URI:", process.env.MONGO_DB_URI);

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const LibroSchema = new mongoose.Schema({
  titulo: String,
  autor: String
}, { collection: 'libros' });

const Libro = mongoose.model('Libro', LibroSchema);

module.exports = Libro;