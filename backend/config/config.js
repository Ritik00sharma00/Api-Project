// require('dotenv').config();

const serverConfig = {
    port: process.env.PORT || 3000,
    databaseURI: process.env.DATABASE_URI || 'mongodb://localhost:27017/employeetask',
    jwtSecret: process.env.JWT_SECRET || 'mysecretkey'
};

module.exports = serverConfig;
