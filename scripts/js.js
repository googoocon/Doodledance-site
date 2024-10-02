function music() {
  const audioContainer = document.querySelector('#audioContainer');
  audioContainer.loop = true
  audioContainer.play()
  }

  function music2() {
    const audioContainer = document.querySelector('#audioContainer');
    audioContainer.pause();
    audioContainer.currentTime = 0;
  }