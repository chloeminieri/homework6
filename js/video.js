var video;



window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	volume = document.getElementById("volumeSlider");
});

document.querySelector("#play").addEventListener("click", function playVideo() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = volume.value;
	});

document.querySelector("#pause").addEventListener("click", function pauseVideo() {
	console.log("Pause Video");
	video.pause();
	
});

document.querySelector("#slower").addEventListener("click", function slowVideo() {
	video.playbackRate = video.playbackRate * 0.9;           /* IS THIS WRONG? HOW TO DO 10% LESS? */
	console.log("Slower Video, New Speed is", video.playbackRate);
})

document.querySelector("#faster").addEventListener("click", function fastVideo() {
	video.playbackRate = video.playbackRate * 1.1;           /* IS IT OKAY TO JUST MAKE IT INCREASE BY 10%?*/
	console.log("Faster Video, New Speed is", video.playbackRate);
})

document.querySelector("#skip").addEventListener("click", function skipAhead() {
	video.currentTime = video.currentTime + 5; 				 /* DOES THIS ADD 5 SECONDS?*/ 
	if (video.currentTime >= video.duration){ video.currentTime = 0; video.play()}       /* IS THIS WHAT THEYRE LOOKING FOR? */
	console.log("Current location is", video.currentTime);
	
})

document.querySelector("#mute").addEventListener("click", function mute() {
	if (video.muted){
		video.muted = false; document.querySelector("#mute").innerHTML = "Mute";
	}
	else {
		video.muted = true; document.querySelector("#mute").innerHTML = "Unmute";
	}
})

volumeSlider.oninput = function volumeSlide() {
	console.log(this.value)
	document.getElementById('volume').innerHTML = volumeSlider.value;
	var n_volume = volumeSlider.value/100;
	video.volume = n_volume
	document.getElementById('volume').innerHTML = volumeSlider.value + '%';
}

document.querySelector("#old").addEventListener("click", function oldschool() {
	video.classList.add('oldTime') })

document.querySelector("#original").addEventListener("click", function original() {
	video.classList.remove('oldTime') })
