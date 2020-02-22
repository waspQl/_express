import Express = require('express')

const app = Express();

// 引数が渡ってきた場合はそれをport番号として使う
let port = 3000
if (
  process.argv[2]
  && Number.isInteger(
    parseInt(process.argv[2])
  )
) port = parseInt(process.argv[2])

app.listen(port, () => {
});

app.get('/', (req, res) => {
  res.send('GET is sended.');
});
app.post('/', (req, res) => {
  res.send('POST is sended.');
});
