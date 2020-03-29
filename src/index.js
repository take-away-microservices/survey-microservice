import Koa from 'koa';
import bodyParser from 'koa-body';
import mongoose from 'mongoose';

import routes from '$controllers';


// Connect with the mongo database
mongoose.Promise = Promise;
mongoose.connect('mongodb://service_db:27017');

// Initialize App
const app = new Koa();

// Middlewares
app.use(bodyParser());

// Routes
app.use(routes);

app.listen(process.env.INTERNAL_PORT || 4000);
