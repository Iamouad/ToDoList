
const express = require('express');
const router = express.Router();
const uniqid = require('uniqid'); 
const fs = require('fs');

router.get('/todos', async (req, res) => {
  try {
    fs.readFile('database.json', (err, data) => {
      if (err) throw err;
      const todos = JSON.parse(data)
      console.log("getting")
      res.json(todos)
  });
  } catch (error) {
    console.log(error)
    res.status(500).send("Server error");
  }
  
});

router.post('/todos', async (req, res) => {
  try {
    console.log("posting", req.body)
    if(req.body.todo){
      fs.readFile('database.json', function (err, data) {
        var json = JSON.parse(data)
        json.push({
          "id": uniqid(),
          "todo": req.body.todo
        })
        fs.writeFile("database.json", JSON.stringify(json), function(err){
          if (err) throw err;
          console.log('The "data to append" was appended to file!');
          res.json(json);
        });
    })

   }else{
      res.json({
        error: "The input field is empty!"
      })
    }
  } catch (error) {
    
  }
});

router.delete('/todos/:id', (req, res, next) => {
  try {
      fs.readFile('database.json', function (err, data) {
        var json = JSON.parse(data)
        json = json.filter(t => t.id !== req.params.id) 
        fs.writeFile("database.json", JSON.stringify(json), function(err){
          if (err) throw err;
          console.log('The "data to append" was deleted from file!');
          res.json(json);
        });
    })

  } catch (error) {
    
  }
});
module.exports = router;