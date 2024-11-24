var video;

//Page load
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	
	console.log("Auto play is set to " + video.autoplay)
	console.log("Looping is set to " + video.loop)

	video.loop=false;
	video.autoplay=false;
});


//Play button
document.querySelector("#play").addEventListener("click", function() {
	video.play();
	var slider = document.querySelector("#slider");
	document.querySelector("#volume").innerText = video.volume * 100 + "%";
	console.log("Video is now playing");
});

//Pause 
document.querySelector("#pause").addEventListener("click", function(){
	video.pause();
	console.log("Video has paused");
});

//Slow down
document.querySelector("#slower").addEventListener("click", function(){

	video.playbackRate = video.playbackRate * 0.90;
	console.log("The speed of the video has now reduced to " + video.playbackRate)
});

//Speed up
document.querySelector("#faster").addEventListener("click", function(){
	video.playbackRate = video.playbackRate * 1.11;
	console.log("The video spead has increased to " + video.playbackRate)
});

//Skip ahead
document.querySelector("#skip").addEventListener("click", function(){
  	console.log("The current video time is " + video.currentTime);
	skip = video.currentTime + 10;
	
	if(skip > video.duration){
		video.currentTime = 0;
		console.log("Video has restarted");
	}
	else{
		video.currentTime = skip;
		console.log("Video has skipped 10 seconds forward");
	}
});

//Mute
document.querySelector("#mute").addEventListener("click", function(){
	if (video.muted) {
        video.muted = false;
        this.innerText = "Mute";
        console.log("Video is now unmuted");
    } else {
        video.muted = true;
        this.innerText = "Unmute";
        console.log("Video is now muted");
    }
});

//Volume slider
document.querySelector("#slider").addEventListener("input", function(){
	var volumeslider = document.querySelector("#slider");
	video.volume = volumeslider.value/100; 
	document.querySelector("#volume").innerText = slider.value +"%";
	console.log("Video volume has now been changed");
});

//Styled
document.querySelector("#vintage").addEventListener("click", function(){
	var video_element = document.querySelector("#player1")
	video_element.classList.add("oldSchool");
});

//Original
document.querySelector("#orig").addEventListener("click", function(){
	var video_element = document.querySelector("#player1")
	video_element.classList.remove("oldSchool");
});
