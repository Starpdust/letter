/* =========================================
   PANTALLA DE INICIO
========================================= */

const intro = document.getElementById("intro");
const openLetter = document.getElementById("openLetter");

openLetter.addEventListener("click", () => {

    intro.classList.add("hidden");

    /*
        El click del usuario permite que el navegador
        considere esta interacción como una acción válida
        para iniciar contenido multimedia.
    */

    const iframe = document.getElementById("youtube");

    iframe.src =
        "https://www.youtube.com/embed/BksBNbTIoPE" +
        "?autoplay=1" +
        "&enablejsapi=1" +
        "&rel=0" +
        "&playsinline=1";

});


/* =========================================
   CARTA / SLIDES
========================================= */

const slides =
    [...document.querySelectorAll(".slide")];

const dots =
    document.getElementById("dots");

const prev =
    document.getElementById("prev");

const next =
    document.getElementById("next");

let currentSlide = 0;


/* Crear puntos */

slides.forEach((slide, index) => {

    const dot =
        document.createElement("button");

    dot.type = "button";

    dot.className =
        "dot" +
        (index === 0 ? " active" : "");

    dot.setAttribute(
        "aria-label",
        `Ir a la página ${index + 1}`
    );

    dot.addEventListener(
        "click",
        () => showSlide(index)
    );

    dots.appendChild(dot);

});


function showSlide(index) {

    currentSlide =
        (index + slides.length) %
        slides.length;


    slides.forEach((slide, i) => {

        slide.classList.toggle(
            "active",
            i === currentSlide
        );

    });


    [...dots.children].forEach(
        (dot, i) => {

            dot.classList.toggle(
                "active",
                i === currentSlide
            );

        }
    );

}


/* Botones */

prev.addEventListener(
    "click",
    () => showSlide(currentSlide - 1)
);

next.addEventListener(
    "click",
    () => showSlide(currentSlide + 1)
);


/* =========================================
   TECLADO
========================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "ArrowLeft") {

            showSlide(currentSlide - 1);

        }

        if (event.key === "ArrowRight") {

            showSlide(currentSlide + 1);

        }

    }
);