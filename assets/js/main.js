const secondHand = document.querySelector(".second");
const minuteHand = document.querySelector(".minute");
const hourHand = document.querySelector(".hour");

function setDate() {
  const now = new Date();

  // Lancetta dei secondi
  const seconds = now.getSeconds();
  const secondsDeg =
    (seconds / 60) * 360 +
    90; /* questo passaggio converte i secondi in scala 360 */
  secondHand.style.transform = `rotate(${secondsDeg}deg)`;

  // Lancetta dei minuti
  const minutes = now.getMinutes();
  const minutesDeg =
    (minutes / 60) * 360 +
    90; /* questo passaggio converte i minuti in scala 360  */
  minuteHand.style.transform = `rotate(${minutesDeg}deg)`;

  // Lancetta delle ore
  const hours = now.getHours();
  const hoursDeg =
    (hours / 12) * 360 +
    90; /* questo passaggio converte le ore in scala 360  */
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}

setInterval(setDate, 1000);
