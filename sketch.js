function setup() {
  createCanvas(600,600)
  angleMode(DEGREES)
}

function draw() {
  background(242, 242, 242)
  
  // hours
  if (hour()>12) {
    var hour12 = hour()-12
  } else {
    var hour12 = hour()
  }
  clockHand(hour12,12,50,50,150,300,[255, 153, 0])
  
  // minutes
  clockHand(minute(),60,25,50,300,300,[51, 153, 255])
  
  // seconds
  clockHand(second(),60,10,50,450,300,[191, 191, 191])
  
  clockText();
}

function clockHand(timeValue,range,size,radius,tempX,tempY, col){
  push()
  var angle = map(timeValue,0,range,-90,270)
  noStroke()
  fill(col)
  this.x = tempX
  this.y = tempY
  if (angle != -90){
    arc(tempX,tempY,radius*2,radius*2,-90,angle,PIE)
  }
  pop()
  
}

function clockText() {
  var ho = hour();
  var mi = minute();
  var se = second();
 
  if (mi < 10) {
    mi = "0" + mi;
  }
  if (ho < 10) {
    ho = "0" + ho;
  }
  if (se < 10) {
    se = "0" + se;
  }
  

  textSize(48);
  textAlign(CENTER);
  textFont("Monospace");
  text(ho, 150, 315);
  text(mi, 300, 315);
  text(se, 450, 315);
  textSize(15);
  text("three times a day these numbers will all be the same", 300, 200)
}
