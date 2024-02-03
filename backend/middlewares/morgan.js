const express = require('express');
const morgan = require('morgan');
const {serverConfig}=require('../config/config.js')

const app = express();

app.use(morgan('combined'));

const PORT = serverConfig.port;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
