const letterText = `
Mi Moshita,

Hoy solo quiero recordarte cuánto te amo. 
A veces, entre la rutina y el ajetreo del día a día, se nos olvida lo bonito que es detenernos un momento y simplemente agradecer por lo que tenemos… y afortunadamente, yo te tengo a ti.

¿Te acuerdas cuando apenas empezábamos a salir en el CCH? 
Caminábamos juntos hacia la parada del camión, riéndonos de cualquier tontería, hablando de todo y de nada. 
Eran momentos simples, pero tan nuestros, tan perfectos. Desde entonces supe que estar contigo era estar en casa.

Gracias por seguir a mi lado, por cada risa, por cada abrazo, por cada momento difícil que han hecho madurar de la manera más hermosa nuestra relación y por seguir construyendo recuerdos conmigo. 

Eres mi alegría diaria, mi mejor amiga, y el amor de mi vida.

Siempre tuyo,
Tu Moshito
    `;

function showLetter() {
  document.getElementById("screen1").classList.remove("active");
  document.getElementById("screen2").classList.add("active");
  typeWriter(letterText, "letter");
}

function typeWriter(text, elementId, delay = 30) {
  let i = 0;
  const element = document.getElementById(elementId);
  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, delay);
    }
  }
  typing();
}

const screen1 = document.getElementById("screen1");
if (screen1.classList.contains("active")) {
  let currentIndex = 0;
  const slides = document.querySelectorAll(".slide");

  function showNextSlide() {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active");
  }
}

setInterval(showNextSlide, 4000);
