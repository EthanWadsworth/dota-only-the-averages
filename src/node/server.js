const express = require('express')
const app = express()
const request = require('request')

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/heroes', (req, res) => {
    request(, function(err, response, body) {
		if(!err && response.statusCode < 400) {
			res.send(JSON.parse(body).result);
		}
	});	
})

app.listen(3000, () => console.log('Server started'))