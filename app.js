const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('App is ready to deploy...');
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});