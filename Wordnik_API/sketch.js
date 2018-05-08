/*
WORDNIK API - data about words. Getting definitions, etymology, synonyms, etc..
http://developer.wordnik.com/docs.html

Let's look for related words.  Words -> related words -> /word.json/{word}/relatedWords
Well, the docs is awesome and lets you test out through their own interface before coding.
You tried out the word "rainbow" and it gave you this data

http://api.wordnik.com/v4/word.json/rainbow/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5



*/
var url1 = 'http://api.wordnik.com/v4/word.json/';
var word  = 'rainbow';
var url2 = '/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
var apiKey = '';
var api = url1 + word + url2;

var link;

function setup() {
  noCanvas();
  link = createA('#', word);
  link.mousePressed(getWordnik);
}

function getData(data){
  //print(data); // works.
  //every value in the words key is in an array, so you must loop for index the value directly.
  //You have a main array containing all of the keys and then key value pairs, so be careful here.
  var index1 = floor(random(0, data.length));
  var index2 = floor(random(0, data[index1].words.length));
  word = data[index1].words[index2]; 
  link.html(word); //var link becomes a <a> key with the word "sea bow" lol
   //works. Now lets update the word variable.
   // lets make it random().
}

function getWordnik(){
  loadJSON(api, getData); //when you click, it will print to console for testing.
}

function draw() {
  
}