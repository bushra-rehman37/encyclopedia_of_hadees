const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/arabic-hadees'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+ '/dist/arabic-hadees/index.html'));});
app.listen(process.env.PORT || 8080);
