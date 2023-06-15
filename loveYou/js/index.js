const audio = new Audio('../audio/egor-krid-samaya-samaya.mp3');

document.querySelector(".card-container").addEventListener("click", () => {
   const card = document.querySelector(".card");
   card.classList.toggle("is-opened");

   if (card.classList.contains("is-opened")) {
      audio.play();
   } else {
      audio.pause();
      audio.currentTime = 0;
   }
});



