var songHold = document.getElementById('pray');
var audio = new Audio("choir.mp3" ) ;

var playSong = function(){
audio.play();
audio.volume = 1;
}

var lowSong = function(){
audio.volume = 0.1;


}


playSong();
songHold.addEventListener('mouseover', lowSong);
songHold.addEventListener('mouseout', playSong);

