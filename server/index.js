const express = require('express');
const bodyParser = require('body-parser');



const app = express();

app.use(express.static('client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/:string', (req, res) => {
	console.log(req.params);
  res.send(req.params.string.split('').sort((a,b) => b > a).join(''));
});
app.listen(process.env.PORT || 3000, () => {
  console.log('app has started!');
});