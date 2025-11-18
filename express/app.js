const express = require('express')
const app = express()
const port = 3000
const cors = require("cors");

app.use(cors());  // Enable CORS

app.get('/', (req, res) => {
  var spawn = require("child_process").spawn,child;
  output = "";
  child = spawn("powershell.exe",["ls"]);
  child.stdout.on("data",function(data){
      output += `${data}`;

  });
  child.stderr.on("data",function(data){
      console.log("Powershell Errors: " + data);
  });
  child.on("exit",function(){
      console.log("Powershell Script finished");
      res.json({ message: output }); 
  });
  child.stdin.end(); //end input
  
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})