window.addEventListener("keydown", function (e) {
  // selezioniamo l'audio che ha come data attribute il keyCode del tasto che abbiamo cliccato.
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  // selezioniamo il div di classe .key che ha come data attribute il keyCode del tasto che abbiamo cliccato.
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // aggiungo la classe play all'elemento cliccato
  key.classList.add("play");
  // seleziono tutti i tasti con classe .key
  const keys = document.querySelectorAll(".key");
  console.log(keys);
  // ciclo all'interno della node list keys e per ogni key che ha effettuato la transizione eseguo una funzione che rimuove la transizione.
  for (const key of keys) {
    key.addEventListener("transitionend", (element) => {
      if (element.propertyName !== "transform") {
        return;
      }
      key.classList.remove("play");
    });
  }
  if (!audio) {
    return; //stop function
  }
  audio.currentTime = 0; // questo permette di stoppare l'audio immediatamente e farlo ripartire ad ogni pressione del tasto
  audio.play();
});
