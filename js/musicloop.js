var song = document.getElementById('song');
music =new Array('media/cfc.mp3','media/fhm.mp3');
function change() {
	if(song.ended){
	var index = Math.floor(Math.random()*music.length);
	song.src=music[index];
	song.play();
	}
} 
