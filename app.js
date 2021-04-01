var express = require('express')
var app = express()

const path = require('path');
app.use( express.static( path.join(__dirname, './') ) )
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/admin', function (req, res) {
    res.render( path.join(__dirname, './admin.html'))

})


app.listen(3001,"0.0.0.0", () => {
    console.log('ATR en puerto 3002')
  })