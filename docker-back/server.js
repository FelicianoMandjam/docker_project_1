const app = require('./app.js');

// PORT
const PORT = process.env.PORT || 3000;

// LISTEN 
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
})