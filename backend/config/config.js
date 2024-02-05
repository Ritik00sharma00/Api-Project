require('dotenv').config(); // Load environment variables from .env file

const serverConfig = {
    port:  3000,
    databaseURI:  'mongodb://localhost:27017/employeetask',
    jwtSecret:  'mysecretkey'
};
 
module.exports = serverConfig;