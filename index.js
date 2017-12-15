const express = require('express');
const app = express();



app.use('/public' , express.static(__dirname + '/public'));



app.get('/welcome/', (req, res) => {

})

app.get('*', function(req, res){

});

//=========================Listening
server.listen(8080, function() {
    console.log('listening on port 8080');
})
