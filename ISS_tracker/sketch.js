/* we're going to be woking with setInterval() and JSON to load data as it comes into the 
  program automagically by querying the API and animating it.
  
  let's start with a basic line moving across the screen.
*/

var lineX = 0;
var url = 'http://api.open-notify.org/iss-now.json';

var issX = 0;
var issY = 0;
function setup() {
  createCanvas(600,400);
  
  setInterval(getISS, 1000);

}

function getISS(){
   loadJSON(url, getData, 'jsonp'); 
   //lets change the mapping a little so it can move faster..
}

function getData(data){
  //test data
  // print(data);
  // print(data.iss_position.latitude);
  var lat= data.iss_position.latitude; 
  var long = data.iss_position.longitude;
  
  issX = map(lat, -90, 90, 0, width) //YOU HAVE TO CHANGE THESE VALUES DEPENDING ON THE API!!
  issY = map(long, -180,180, 0, height)// n..90 will move very slowly. Refer to the JSON values :)
  //we need to map out the functions to remove the negative positions so change issX and issY.
  /*
    how map(); works:
      map(valueToMap, changeThis1, changeThis2, scaleTo1, scaleTo2)
      You want to grab a value which is arg 1
      You grab it's original domain, in our case lat/long is -90..90
      and you map/scale it to another domain, in this case we're scaling -90..90 to 0..width/height!
  
  */
  
  //now let's get it to move in real time with setInterval()
  // setInterval(callback, interval)
}
function draw() {
  background(51);
  
  fill(255);
  ellipse(issX,issY,24,24); //the circle won't appear when a value is negative..time to map!
  
  stroke(255);
  line(lineX, 0, lineX, height);
  lineX = lineX + 5;
  if(lineX > width){
    lineX = 0;
  }
}