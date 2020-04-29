document.addEventListener('DOMContentLoaded', function() {
	document.querySelector('button').addEventListener('click',
		onclick, false)

	function onclick (url) {
		audio = document.getElementById("wolf_of_wall_street_sound_bite")
		audio.play();
	}
}, false)