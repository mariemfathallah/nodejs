 const http = require('http')
 const server= http.createServer(function(req,res){
    if(req.url ==='7'){
       res.write('Hello in Pingucoder')
       res.end()
   }
    if(req.url =='/api/courses'){
       res.write(JSON.stringify(['Angular','ReactJs','Laravel']))
       res.end()
    }
})
 server.listen(3000)

var _ = require('lodash');
let result =  _.take([7,15,28,76],1)
console.log(result)