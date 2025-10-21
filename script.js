window.addEventListener('load', function () {
	new Glider(document.querySelector('.glider'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		scrollLock: true, //If true, Glider.js will scroll to the nearest slide after any scroll interactions
		draggable: true, //If true, the list can be scrolled by click and dragging with the mouse
		dots: '.dots',
		arrows: {
			prev: '.glider-prev',
			next: '.glider-next'
		},
		responsive: [
      {
				// screens greater than >= 320px
				breakpoint: 320,
				settings: {
					// Set to `auto` and provide item width to adjust to viewport
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				// screens greater than >= 768px
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				// screens greater than >= 1024px
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				// screens greater than >= 1200px
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1
				}
			}
		]
	})
})

// Set the date we're counting down to
let countDownDate = new Date("Oct 25, 2025 18:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(function () {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("dias").innerHTML = `${days} <span class="count_text">días</span>`;
  document.getElementById("horas").innerHTML = `${hours} <span class="count_text">hrs</span>`;
  document.getElementById("minutos").innerHTML = `${minutes} <span class="count_text">min</span>`;
  document.getElementById("segundos").innerHTML = `${seconds} <span class="count_text">seg</span>`;

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    // document.getElementById("count_fin").innerHTML = "Bienvenido a mis 15";
    //Voy a ocultar el contenedor de la cuenta regresiva y su titulo
    const tituloCuentaRegresiva = document.querySelector(".count_title");
    tituloCuentaRegresiva.style.display = "none";
    const contenedorCuentaRegresiva = document.querySelector(".count_container");
    contenedorCuentaRegresiva.style.display = "none";

    //Y muestro el elemento que dice Bienvenido a mis 15
    const bienvenidaMsg = document.querySelector(".count_fin");
    bienvenidaMsg.style.display = "flex";

    //Confetti
    const duration = 15 * 1000,
      animationEnd = Date.now() + duration,
      defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      // since particles fall down, start a bit higher than random
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      );
    }, 250);
  }
}, 1000);

let modal = document.getElementById("modal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.visibility = "visible";
  modal.style.opacity = "1";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.visibility = "hidden";
  modal.style.opacity = "0";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.visibility = "hidden";
    modal.style.opacity = "0";
  }
}