document.addEventListener('DOMContentLoaded', function() {
    var audio = document.createElement('audio');
    audio.setAttribute('src', 'sound.mp3');
    audio.loop = true;
  
    document.getElementById('playButton').addEventListener('click', function() {
      audio.play();
    });
  });
  