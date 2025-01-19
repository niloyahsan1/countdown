// change the date for countdown
const countdownDate2 = new Date("January 27, 2024 23:00:00").getTime();

const x2 = setInterval(function () {
  const now = new Date().getTime();

  const distance = countdownDate2 - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById(
    "countdown2"
  ).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(x2);
    document.getElementById("countdown2").innerHTML = "Countdown is OVER!";
  }
}, 1000);

