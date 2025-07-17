import express from 'express';
import { config } from 'dotenv';
import helmet from 'helmet';
import Router from './routes/index.js';
import Conn from './database/config.js';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { checkDevice } from './middleware/device.js'; 
import { socketController } from './controller/socket.js';
import { Server } from 'socket.io';

import cors from 'cors';

import http from 'http';



config();
const app = express();









app.use(cors({ origin: '*' }));






const bothServer= http.createServer(app)
export   const io= new Server(bothServer,{
    cors:{
        origin:"*",
        methods:['GET','POST']
    }
})


io.on('connection',socketController);





// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());

// Use your custom device-checking middleware
app.use(checkDevice); // Ensure this line is correct

// Set up your routes
app.use(Router);

// Error handling middleware
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).json({
        status: 'error',
        statusCode: err.status,
        message: err.message,
        data: '',
    });
});




const PORT = process.env.PORT || 8080;
const initDb = () => {
    Conn.then(() => {
        console.log('Connection to Database successful');
        bothServer.listen(PORT, '0.0.0.0', () => {
            console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
        });
    });
};

initDb();
