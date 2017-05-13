

//IS LISTENING FOR SECOND SOUND AND EMITTING SOUND
var mic;

var check;



var socket = io()  

function setup() {



    createCanvas(1600, 900) 
    noStroke();
    fill(200,200,255);
    rect(0,0,1600,900);
    //this is a really cool olive green color   background(200,200,20);
    mic = new p5.AudioIn();
    mic.start();
    frameRate(30);


}


  
  /////////RECIEVES INCOMING PACKAGE

function otherSound(data){


  var begin = 1000*data.x;

    console.log("incoming:" + " " + begin);

    line(1000,900,1000+begin,-200); //x,y x,y 
      stroke(255, 255, 204);
      
      line(1000,900,1000+begin,-200);
      stroke(255, 255, 204);
      
      
       line(1000,900,1000-begin,-200); //x,y x,y 
      stroke(255, 255, 204);
      
      line(1000,900,1000-begin,-200);
      stroke(255, 255, 204);

  // fill(255)
  // ellipse(300,300,40000*data.x,40000*data.x)
}


//when sound is received from server, trigger function

 socket.on('soundRx', otherSound);

function draw() {
  
   for (var i = 50; i <= 2000; i += 10) {
     
     positiony = random(0,600);
         var c = color(100,200,200,10);
      fill(c);
     noStroke();
     
    ellipse(random(0,1600),positiony,50,50);

   
   }
    

  for (var b = 50; b <= 1000; b += 10) {
      var co = color(255,180);
       fill(co);
     noStroke();
    ellipse(random(0,1600),random(0,1600),3,3);
   
  
   }
 
  //////////voice visualization///////////



    for (var d = 100; d <= 2000; d += 80) {
     
    
      var start = d*2*mic.getLevel();
      
      if (start<0.5){ 
        start=0
      }
        
      
      line(350,900,360+start,-200); //x,y x,y 
      stroke(255,255);
      
      line(350,900,350+start,-200);
      stroke(255,100);
      
      
       line(350,900,360-start,-200); //x,y x,y 
      stroke(255,255);
      
      line(350,900,370-start,-200);
      stroke(255,100);


       var data = {

          x: mic.getLevel()
    
        }


     socket.emit('soundTx', data);
     //console.log(data);

    }


}



   

  









