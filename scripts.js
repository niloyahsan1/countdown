// change the date for countdown
const countdownDate1 = new Date("February 10, 2024 02:00:00").getTime();

const x1 = setInterval(function () {
  const now = new Date().getTime();

  const distance = countdownDate1 - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById(
    "countdown1"
  ).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(x1);
    document.getElementById("countdown1").innerHTML = "Countdown is OVER!";
  }
}, 1000);

// ===================================================================================

// change the date for countdown
const countdownDate2 = new Date("February 11, 2024 23:00:00").getTime();

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
