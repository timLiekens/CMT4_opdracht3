// neem express-module en steek functionaliteit in constante
const express = require('express');

// constante aanmaken die als webserver zal dienen
const app = express();

// Vertel aan webserver dat ik gebruik maak van view engine en dan ook van dewelke, nl. EJS
app.set("views", "views");
app.set("view engine", "ejs");

// vertel aan webserver waar de publieke bestanden zitten
app.use(express.static('public'));



// webserver luister naar GET-commando van verschillende pagina's
app.get("/", function(request, response){
  // vanuit de views-map de juiste pagina halen en renderen
  response.render("home", {
      posts: work.work,
    });
  });

// databestand inladen
const work = require('./data/museum');

app.get("/work", function(request, response){
  response.render("work", {
      posts: work.work,
  });
});


app.get("/contact", function(request, response){
  response.render("contact");
});

app.get("/captif", function(request, response){
  response.render("captif", {
      posts: work.work,
  });
});

app.get("/cheval", function(request, response){
  response.render("cheval", {
      posts: work.work,
  });
});

app.get("/diamant", function(request, response){
  response.render("diamant", {
      posts: work.work,
  });
});

app.get("/femmemiroir", function(request, response){
  response.render("femmemiroir", {
      posts: work.work,
  });
});

app.get("/frisedesarchers", function(request, response){
  response.render("frisedesarchers", {
      posts: work.work,
  });
});

app.get("/liberteguidant", function(request, response){
  response.render("liberteguidant", {
      posts: work.work,
  });
});

app.get("/louisxiv", function(request, response){
  response.render("louisxiv", {
      posts: work.work,
  });
});

app.get("/monnalisa", function(request, response){
  response.render("monnalisa", {
      posts: work.work,
  });
});

app.get("/quotscribeaccroupiquot", function(request, response){
  response.render("quotscribeaccroupiquot", {
      posts: work.work,
  });
});

app.get("/taureauandrocephaleaile", function(request, response){
  response.render("taureauandrocephaleaile", {
      posts: work.work,
  });
});



// heroku poortinstellingen
app.set('port',(process.env.PORT || 5000));
app.listen(app.get('port'));
