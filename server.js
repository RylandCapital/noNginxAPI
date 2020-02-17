const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const path = require('path')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")))

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const spxRouter = require('./routes/spx');
const vixRouter = require('./routes/vix');
const tltRouter = require('./routes/tlt');
const xlbRouter = require('./routes/xlb');
const xleRouter = require('./routes/xle');
const xlfRouter = require('./routes/xlf');
const xliRouter = require('./routes/xli');
const xlkRouter = require('./routes/xlk');
const xlpRouter = require('./routes/xlp');
const xluRouter = require('./routes/xlu');
const xlvRouter = require('./routes/xlv');
const xlyRouter = require('./routes/xly');
const featuresRouter = require('./routes/features');
const ohlcRouter = require('./routes/ohlc');
const fwds5Router = require('./routes/fwds5');
const fwds10Router = require('./routes/fwds10');
const fwds22Router = require('./routes/fwds22');
const customRouter = require('./routes/custom');
const spxmlRouter = require('./routes/spxml');
const xlbmlRouter = require('./routes/xlbml');
const xlemlRouter = require('./routes/xleml');
const xlfmlRouter = require('./routes/xlfml');
const xlimlRouter = require('./routes/xliml');
const xlpmlRouter = require('./routes/xlpml');
const xlvmlRouter = require('./routes/xlvml');
const xlymlRouter = require('./routes/xlyml');

app.use('/', spxRouter);
app.use('/spx', spxRouter);
app.use('/vix', vixRouter);
app.use('/tlt', tltRouter);
app.use('/xlb', xlbRouter);
app.use('/xle', xleRouter);
app.use('/xlf', xlfRouter);
app.use('/xli', xliRouter);
app.use('/xlk', xlkRouter);
app.use('/xlp', xlpRouter);
app.use('/xlu', xluRouter);
app.use('/xlv', xlvRouter);
app.use('/xly', xlyRouter);
app.use('/features', featuresRouter);
app.use('/ohlc', ohlcRouter);
app.use('/fwds5', fwds5Router);
app.use('/fwds10', fwds10Router);
app.use('/fwds22', fwds22Router);
app.use('/custom', customRouter);
app.use('/spxml', spxmlRouter);
app.use('/xlbml', xlbmlRouter);
app.use('/xleml', xlemlRouter);
app.use('/xlfml', xlfmlRouter);
app.use('/xliml', xlimlRouter);
app.use('/xlpml', xlpmlRouter);
app.use('/xlvml', xlvmlRouter);
app.use('/xlyml', xlymlRouter);



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});