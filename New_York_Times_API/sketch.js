/*
  http://developer.nytimes.com/
  well, it's not sending you the email API key lol..nvm!
  
  Let's just copy the code and learn from it..
  
  Article Search API http://developer.nytimes.com/article_search_v2.json
  
  API key:
    37a2d7154f194581a342502ba4243fbc
  
  Path: 
    search/v2/articlesearch.format
  
  Parameters: 
    format -> json
    q -> query term -> rainbow
    other params:
      fq -> filtered search
      begin_date -> IT"S ALL IN THE DOCS!! :)
    
  Try it!
  
  find the request url -> 
  
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': "37a2d7154f194581a342502ba4243fbc",
      'q': "Donald Trump",
      'begin_date': "20161108"
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
      console.log(result);
    }).fail(function(err) {
      throw err;
    });
  
  This is a ton of data.
  Let's show all the headlines and a small paragraph from the articles.
  
      
*/

var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Donald Trump&api-key=37a2d7154f194581a342502ba4243fbc&begin_data=20161108';


function setup() {
  noCanvas();
  setInterval(update, 11000);
}

function update(){
   loadJSON(url, getData);
}
  

function getData(data){
  var articles = data.response.docs;
  
  for(var i = 0; i < articles.length; i++){
    
    createElement('h3',articles[i].headline.main);
    if(articles[i].abstract != null){
      createP(articles[i].abstract);
    }else{
      createP(articles[i].snippet);
    }
  }
}

function draw() {
  
}