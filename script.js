let timer;
let isRunning = false;
let lapCounter = 0;

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById('startStop').textContent = 'Start';
    isRunning = false;
  } else {
    timer = setInterval(updateDisplay, 10);
    document.getElementById('startStop').textContent = 'Stop';
    isRunning = true;
  }
}

function reset() {
  clearInterval(timer);
  document.getElementById('startStop').textContent = 'Start';
  document.getElementById('display').textContent = '00:00:00';
  isRunning = false;
  lapCounter = 0;
  document.getElementById('lapTimes').innerHTML = '';
}

function updateDisplay() {
  const display = document.getElementById('display');
  const time = display.textContent.split(':');
  let hour = parseInt(time[0]);
  let minute = parseInt(time[1]);
  let second = parseInt(time[2]);

  if (++second === 100) {
    second = 0;
    if (++minute === 60) {
      minute = 0;
      hour++;
    }
  }

  display.textContent = 
    (hour < 10 ? '0' + hour : hour) + ':' +
    (minute < 10 ? '0' + minute : minute) + ':' +
    (second < 10 ? '0' + second : second);
}

function lap() {
  lapCounter++;
  const lapTime = document.getElementById('display').textContent;
  const lapList = document.getElementById('lapTimes');
  const listItem = document.createElement('li');
  listItem.textContent = 'Lap ' + lapCounter + ': ' + lapTime;
  lapList.appendChild(listItem);
}
