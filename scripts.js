// change the date for countdown
const countdownDate = new Date("February 10, 2024 00:00:00").getTime();

const x = setInterval(function () {
  const now = new Date().getTime();

  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById(
    "countdown"
  ).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Countdown is OVER!";
  }
}, 1000);
