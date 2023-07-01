
   const videoContainer = document.getElementById('watchvideo');
   const playButton = document.querySelector('.button-play');

   playButton.addEventListener('click', function() {
      videoContainer.classList.add('active');
   });

   videoContainer.addEventListener('click', function() {
      videoContainer.classList.remove('active');
   });