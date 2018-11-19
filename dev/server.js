const http = require('http');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const urlencodedParser = bodyParser.urlencoded({extended: false});

let check = true;
let data = [];
let user = {
              avatar: 'http://i73.beon.ru/31/71/1697131/62/57784762/anime_boy1.jpeg',
              login: 'Rominok',
              header: 'https://wallup.net/wp-content/uploads/2015/12/105761-artwork-fantasy_art-anime-mountain-moon-forest-nature.jpg'
            }
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.get('/', function(req, res){
  if(check===true){
    res.render('index', {login: user.login});
  }else {
    res.render('form');
  }
});
app.get('/data/:id', function(req, res){
  switch (req.params.id) {
    case 'user':
      res.json({ avatar: user.avatar,  login: user.login, header: user.header });
      break;
    case 'data':
      res.json(data);
      break;
  }
});

app.post('/data/:id', urlencodedParser, function(req, res){
  switch (req.params.id) {
    case 'data':
      data.push(req.body);
      break;
    case 'like':
      let {id, attribute} = req.body;
      data.map(element=>{
        if(element.id == id){
          element.like = attribute;
        }
      });
      break;

    case 'comments':

    let comments = JSON.parse(req.body.attribute);
      data.map(element=>{
        if(element.id == req.body.id){
          element.comments = comments;
        }
      });
      break;

    case 'delete':
      let key = 0;
      data.map((element )=>{
        if(element.id == req.body.id){
          data.splice(key, 1);
          console.log(data);
        }
        key++;
      })
      break;

    case 'login':
      user.login = req.body.login;
      break;

    case 'header':
      user.header = req.body.type;
      console.log(user);
      break;

    case 'avatar':
      user.avatar = req.body.type;
      console.log(user, 2);
      break;
  }
});

app.listen(3000);
console.log('start server 3000');
