import amazonRouter from './amazon.js';

function routes(app) {
    app.use('/api', amazonRouter);
}

export default routes;
