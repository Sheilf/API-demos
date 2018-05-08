/*
  pulling data from an API. Application Program Interface
  grabbing weather data: basic
  current weather data: http://openweathermap.org/current
  
  example of API calls:
    api.openweathermap.org/data/2.5/weather?q={city name}
    api.openweathermap.org/data/2.5/weather?q={city name},{country code}
    
    api.openweathermap.org/data/2.5/weather?q=London
    api.openweathermap.org/data/2.5/weather?q=London,uk
  
  Invalid API key. You need a security check to use it. So sign up to use their key.
  key: 193435898d20d000a299fe6eb95c1c9b

  Format your API query strings
    api.website.org/filepath/weather?q=Data&APPID=SecurityKey
    http://api.openweathermap.org/data/2.5/weather?q=London&APPID=193435898d20d000a299fe6eb95c1c9b
    This will give you JSON data!
    
  Let's format the data. Add the chrome extension JSON Formatter.
  Refresh. It'll be formatted! <3. Much nicer.
  
  Oh no! The values are in Kelvin. Let's change the query.
  Refer to the API docs.."Format: units format"
  
  Example:
     api.openweathermap.org/data/2.5/find?q=London&units=metric
  
  So add &units=metric to the query. simple!
  
  So let's start drawing..
  
  
  
*/

var weather;

var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&APPID=193435898d20d000a299fe6eb95c1c9b';
var units = '&units=metric';

var user_input;

function setup() {
  createCanvas(400,200);
  var button = select('#submit');
  button.mousePressed(getWeatherData);
 
 user_input = select('#city');
}

function getWeatherData(){
  var url = api+ user_input.value() + apiKey+ units;
  loadJSON(url, gotData, 'jsonp');
}

function gotData(data) {
  //print(data);  
  weather = data;
}
function draw() {
  background(0);
  if(weather) {
    //circle on temp_max and circle on humidity under the main key.
    ellipse(100, 100, weather.main.temp_max, weather.main.temp_max);
    ellipse(300, 100, weather.main.humidity, weather.main.humidity);

  }
  /*
  now lets get user input to query information while the program runs.
  open index.html and create an input field. 
  create the necessary strings to make the api url manipulated by user through adding strings.
  var api_site
  var city 
  var api_key
  var units
  var actual_url = api + city + api_key */
  
  /*
  
  Now for DOM Manipulation. 
  Get the value selected:  in setup() -> var button = select('#submit');
  
  and create a mouse event:
    in setup() ->  button.mousePressed(getWeatherData);
    
    create getWeatherData(){
       var url = api+ city+ apiKey+ units;
        loadJSON(url, gotData, 'jsonp'); //remove this from setup()
    }
    
    The values are always the same since var city is hard coded. Grab the <input> value and insert it.
    remove var city and create var user_input = select("#city")
    
    Then remove city and replace it with user_input.value() in the var url field in getWeatherData.
    
    */
}