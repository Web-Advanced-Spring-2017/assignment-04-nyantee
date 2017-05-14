# assignment-04-nyantee
assignment-04-nyantee created by GitHub Classroom

#Responsive God
Full project documentation here : https://nyantee.squarespace.com/new-index#/responsive-god-final-ms2-project/

![alt tag](assignment-04-nyantee/Images/Screen Shot 2017-05-11 at 1.06.50 AM.png)

My ideation process began with a few initial thoughts as a base: So many of our commodities, especially our digital commodities are responsive and user-friendly. As traditional Christian religious practices such as exegesis, Bible-study, and dialogue are mapped onto digital platforms like smartphones, laptops, and other portable devices, will they be entirely responsive? Will they be able to adapt entirely? What, if anything, is lost when we adapt these religious rituals to the modern digital environment and ourselves?


I want to develop this project into a mobile application that I can use to make a digital art installation which maps people who have connected to the application for prayer. 


I used a simple poster video to create a moving background in each customized page

![alt tag](Screen Shot 2017-05-11 at 1.06.50 AM.png)


I used web-kit animations to animate the links on the page. I used this Code Pen tutorial as reference:
https://codepen.io/raaasin/pen/quvHr

 
![alt tag](/Users/nyanteeasherman/Desktop/Screen Shot 2017-05-13 at 7.56.08 PM.png)


Then I used sockets to connect the clients to my server which I created using Node and Express:

Sends message containing sound data being recieved to server:

![alt tag](/Users/nyanteeasherman/Desktop/Screen Shot 2017-05-13 at 8.02.04 PM.png)



Receives message from server to create second sketch in P5js:

![alt tag](/Users/nyanteeasherman/Desktop/Screen Shot 2017-05-13 at 8.01.50 PM.png)

I also used P5js sound library to capture information from the client’s microphone:

![alt tag](/Users/nyanteeasherman/Desktop/Screen Shot 2017-05-13 at 8.05.11 PM.png)




Some issues I ran into:

- Making sure to clearly name the packages being sent and received to avoid confusing the sketch
- working with P5js draw function and learning how function interact and are timed 
- Linking my HTML page to my server twice so the client was receiving messages multiple times

