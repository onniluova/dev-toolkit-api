const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const v1Router = express.Router();

const hashRoutes = require('./routes/api/v1/hashRoutes');

v1Router.use('/hash', hashRoutes)

app.use('/api/v1', v1Router);

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`);
});