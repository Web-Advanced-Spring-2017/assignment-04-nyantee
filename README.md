# assignment-04-nyantee
assignment-04-nyantee created by GitHub Classroom

# Project Title: Responsive God
Full project documentation here : https://nyantee.squarespace.com/new-index#/responsive-god-final-ms2-project/


### My ideation process began with a few initial thoughts as a base: So many of our commodities, especially our digital commodities are responsive and user-friendly. As traditional Christian religious practices such as exegesis, Bible-study, and dialogue are mapped onto digital platforms like smartphones, laptops, and other portable devices, will they be entirely responsive? Will they be able to adapt entirely? What, if anything, is lost when we adapt these religious rituals to the modern digital environment and ourselves?

### I want to further develop this project into a mobile application that I can use to make a digital art installation which maps people who have connected to the application for prayer. *

I used a simple poster video to create a moving background in each customized page:

-------------


    <video loop muted autoplay poster="img/videoframe.jpg" class="fullscreen-bg-video">
        <!-- <source src="video/big_buck_bunny.webm" type="video/webm"> -->
        <source src="gold.mp4" type="video/mp4">
        <!-- <source src="video/big_buck_bunny.ogv" type="video/ogg"> -->
    </video>
   

-------------


I used web-kit animations to animate the links on the page. I used this Code Pen tutorial as reference: https://codepen.io/raaasin/pen/quvHr


-------------

@keyframes neon4 {
  from {
    text-shadow: 0 0 10px #f7f1be, 0 0 20px #f7f1be, 0 0 30px #f7f1be, 0 0 40px #f7f1be, 0 0 70px #f7f1be, 0 0 80px #f7f1be, 0 0 100px #f7f1be, 0 0 150px #f7f1be;
  }
  to {
    text-shadow: 0 0 5px #f7f1be, 0 0 10px #f7f1be, 0 0 15px #f7f1be, 0 0 20px #f7f1be, 0 0 35px #f7f1be, 0 0 40px #f7f1be, 0 0 50px #f7f1be, 0 0 75px #f7f1be;
  }
}

-------------

Then I used sockets to connect the clients to my server which I created using Node and Express:

Sends message containing sound data being recieved to server:


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

-------------
Receives message from server to create second sketch in P5js:

 socket.on('soundRx', otherSound);
 
 -------------

I also used P5js sound library to capture information from the client’s microphone:

  mic = new p5.AudioIn();
    mic.start();
    frameRate(30);



-------------
Some issues I ran into:

- Making sure to clearly name the packages being sent and received to avoid confusing the sketch
- working with P5js draw function and learning how function interact and are timed 
- Linking my HTML page to my server twice so the client was receiving messages multiple times

Much thanks to multiple one-on-one help sessions with Jaskirat and Cat 
