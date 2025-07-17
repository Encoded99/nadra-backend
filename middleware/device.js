import cors from 'cors';

// Your existing checkDevice middleware
export const checkDevice = (req, res, next) => {
    const source = req.headers['x-source'];

    if (source && source === 'web') {
        // Define allowed origins
        const allowedOrigins = [
            "http://localhost:3000",
            "http://localhost:3001"
        ];

        // Apply CORS for web source requests
        cors({
            origin: allowedOrigins,
            credentials: true
        })(req, res, next);
    } else {
        // For non-web sources, just proceed to the next middleware
        next();
    }
};
