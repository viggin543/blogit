import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
import morgan from 'morgan';
/*eslint-disable no-console */



const app = express();
app.set('port', (process.env.PORT || 5000));
app.use(morgan('combined'));
app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(app.get('port'),'0.0.0.0', function(err) {
    if(err) console.log(err);
    console.log('Node app is running on port', app.get('port'));
});
