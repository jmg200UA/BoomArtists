const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();
const port = 3000;

// Agrega el middleware CORS
app.use(cors());

// Configura el proxy para redirigir las solicitudes a la API de Deezer
app.use('/deezer-api', createProxyMiddleware({
  target: 'https://api.deezer.com',
  changeOrigin: true,
}));

// Inicia el servidor en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor proxy en http://localhost:${port}`);
});