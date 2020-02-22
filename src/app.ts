import Express = require('express')

const app = Express();

app.listen(3000, function () {
});

app.get('/', function (req, res) {
  res.send('GET is sended.');
});
app.post('/', function (req, res) {
  res.send('POST is sended.');
});
