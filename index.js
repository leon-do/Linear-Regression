/*

http://onlinestatbook.com/2/regression/intro.html

*/


var points = [
{x:1, y:1},
{x:2, y:2},
{x:3, y:1.3},
{x:4, y:3.75},
{x:5, y:2.25}]

var xTotal = 0;
var yTotal = 0;
var xSD = 0;
var ySD = 0;
var xyTotal = 0;
var xSquaredTotal = 0;
var ySquaredTotal = 0;
var xAvrg;
var yAvrg;
var r;
var slope;
var yIntercept;

//add all x and y
for (var i = 0; i < points.length; i++){
    //add x column
    xTotal = xTotal + points[i].x;
    //add y column
    yTotal = yTotal + points[i].y;
    //calculate standard devaition for x
}


//get average
xAvrg = xTotal/points.length;
yAvrg = yTotal/points.length;

// calculate x^2 and y^2
for (var i = 0; i < points.length; i++){
    xSquaredTotal = xSquaredTotal + (points[i].x - xAvrg) * (points[i].x - xAvrg)
    ySquaredTotal = ySquaredTotal + (points[i].y - yAvrg) * (points[i].y - yAvrg)
    xyTotal = xyTotal + (points[i].x - xAvrg) * (points[i].y - yAvrg);
    xSD = xSD + (points[i].x - xAvrg) * (points[i].x - xAvrg)
    ySD = ySD + (points[i].y - yAvrg) * (points[i].y - yAvrg)    
}

//finish up sample standard deviation equation
xSD = Math.sqrt(xSD/(points.length - 1)) 
ySD = Math.sqrt(ySD/(points.length - 1)) 

//Computing Pearson's r
r = xyTotal / (Math.sqrt(xSquaredTotal * ySquaredTotal))


//calculate slope = r xSD / ySD
slope = r * ySD / xSD


//calculate y intercept
yIntercept = yAvrg - xAvrg * slope;

//Final line y = slope * x + yIntercept




