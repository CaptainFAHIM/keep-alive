// URLs to ping
const urls = ['https://captains-music.onrender.com/',];

// Function to ping the URL
function pingSites() {
    for(let i = 0; i<urls.length; i++){
  fetch(urls[i])
    .then(response => {
      if (response.ok) {
        return;
      } else {
        console.log(`Ping failed: ${urls[i]}`, response.status);
      }
    })
    .catch(error => {
      console.log('Ping external error:', error);
    });
}
}

setInterval(pingSites, 360000); //6 minutes (360,000 milliseconds)
