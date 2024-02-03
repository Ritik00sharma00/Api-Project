require('dotenv').config(); // Load environment variables from .env file

const serverConfig = {
    port: process.env.PORT || 5000,
    databaseURI: process.env.DATABASE_URI || 'mongodb://localhost:27017/employeeTask',
    jwtSecret: process.env.JWT_SECRET || 'mysecretkey'
};

module.exports = serverConfig;