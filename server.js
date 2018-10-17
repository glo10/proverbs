const express = require('express');
const app = express();

app.use(express.static('static'));

//Data
let proverbs = [
  {
    content : 'Tra il dire e il fare c\'è in mezzo il mare',
    author : 'Pavarotti'
  },
  {
    content : 'Ad astra per aspera',
    author : 'Sénèque'
  },
  {
    content : 'Jquerira bien qui Jquerira le dernier',
    author : 'Naïm le Grand'
  },
  {
    content : 'Quand tout va bien on peut compter sur les autres, quand tout va mal on ne peut compter que sur sa famille',
    author : 'Chinois'
  },
  {
    content : 'Le bonheur ne s\'acquiert pas, il ne réside pas dans les apparences, chacun d\'entre nous le construit à chaque instant de sa vie avec son coeur',
    author : 'Africain'
  },

  //.chinois
  //. africian
  //Parmi les hommes, le plus faible est celui qui ne sait pas garder un secret. Le plus fort, celui qui maîtrise sa colère, le plus patient, celui qui cache sa pauvreté, le plus riche, celui qui se contente de la part que dieu lui a faite.//algérien
  //Offrir l'amitié à qui veut l'amour, c'est donner du pain à qui meurt de soif. espagnol
  //Souviens-toi qu'au moment de ta naissance tout le monde était dans la joie et toi dans les pleurs. Vis de manière qu'au moment de ta mort, tout le monde soit dans les pleurs et toi dans la joie. arabe
  //On ne peut empêcher le chien d'aboyer, ni le menteur de mentir.français
  //Ne comptez pas les oeufs dans le derrière d'une poule.//Guadeloupéen
];

//route
app.get('/proverb',(req, res) =>{
  let randomValue = Math.floor(Math.random() * proverbs.length);
  res.json(proverbs[randomValue]);
});

app.get('/author',(req, res) =>{
  res.json(proverbs);
});

//Test server is running on
app.listen(4002,() => {
  console.log('Serveur écoutant le port 4002\n CTRL + c pour stopper le serveur');
});
