fetch('https://api.github.com/users/jeremybwilson').then(res => {
  return res.json();
})
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.error('OH noooo!!');
    console.error(err);
  });

  const video = document.querySelector('.handsome');
  console.log(video);


  navigator.mediaDevices.getUserMedia({ video: true })
  .then(mediaStream => {
    video.srcObject = mediaStream;
    video.load();
    video.play();
  })
  .catch(err => {
    console.log(err);
  });
