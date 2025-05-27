function getCounter() {
  var countDownDate = new Date("Nov 15, 2023 22:00:00").getTime();

  var x = setInterval(function () {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var textDays = document.getElementById("days");
    var textHours = document.getElementById("hours");
    var textMinutes = document.getElementById("minutes");
    var textSeconds = document.getElementById("seconds");

    textDays.innerHTML = days < 10 ? "0" + days : days;
    textHours.innerHTML = hours < 10 ? "0" + hours : hours;
    textMinutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
    textSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;

    if (distance < 0) {
      clearInterval(x);
    }
  }, 1000);
}

