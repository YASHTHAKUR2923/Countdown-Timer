function startCountdown() {
    const targetDate = document.getElementById('target-date').value;
    if (!targetDate) {
      alert('Please select a date and time.');
      return;
    }
  
    const endTime = new Date(targetDate).getTime();
    if (isNaN(endTime)) {
      alert('Invalid date and time.');
      return;
    }
  
    const countdownElement = document.getElementById('countdown');
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = endTime - now;
  
      if (timeRemaining <= 0) {
        clearInterval(interval);
        countdownElement.innerHTML = 'Time is up!';
        return;
      }
  
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
      document.getElementById('days').textContent = String(days).padStart(2, '0');
      document.getElementById('hours').textContent = String(hours).padStart(2, '0');
      document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
      document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }, 1000);
  }
  