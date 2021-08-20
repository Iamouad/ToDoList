/*Import project dependencies*/
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
/*Initialize Express server*/
const app = express();

app.use(cors());
app.use(express.json({ extended: false }));
app.use('/api', require('./api'));

/*Create default route*/
app.get('/', (req, res) => {
  res.json({message: "Welcome to the REST API OF TODO LIST"});
});

/*Set PORT and listen for request*/
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});