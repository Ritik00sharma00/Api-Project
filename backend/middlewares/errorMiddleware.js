const errorHandler = (err, req, res, next) => {
    // Log the error for debugging purposes
    console.error(err.stack);

    // Set default status code and message
    let statusCode = err.statusCode || 500;
    let message = err.message || 'Internal Server Error';

    // Customize error message based on error type or status code
    if (statusCode === 404) {
        message = 'Resource Not Found';
    } else if (statusCode === 401) {
        message = 'Unauthorized Access';
    }

    // Send error response
    res.status(statusCode).json({ error: message });
};

module.exports = errorHandler;
