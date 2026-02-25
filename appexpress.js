const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const rootDir = require('./util/path');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, 'public')));

//const adminRoutes = require('./routes/admin');
const adminData = require('./routes/admin');
const userRoutes = require('./routes/users');

app.use('/admin', adminData.routes);
app.use(userRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

app.listen(3000);