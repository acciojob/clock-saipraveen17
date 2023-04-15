function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let amOrPm = hours >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12;

  // Add leading zeros
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  const timeString = hours + ':' + minutes + ':' + seconds + ' ' + amOrPm;
  const dateString = ("0" + now.getDate()).slice(-2) + "/" + ("0" + (now.getMonth() + 1)).slice(-2) + "/" + now.getFullYear();

  const timer = document.getElementById('timer');
  timer.textContent = timeString + ' ' + dateString;
}

// Update time every second
setInterval(updateTime, 1000);
