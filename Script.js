document.addEventListener("DOMContentLoaded", function () {


    /* ==================================================
       ELEMENTOS
    ================================================== */

    const intro =
        document.getElementById("intro");

    const openLetter =
        document.getElementById("openLetter");

    const youtube =
        document.getElementById("youtube");


    const slides =
        Array.from(
            document.querySelectorAll(".slide")
        );

    const dots =
        document.getElementById("dots");

    const prev =
        document.getElementById("prev");

    const next =
        document.getElementById("next");


    let currentSlide = 0;



    /* ==================================================
       ABRIR CARTA
    ================================================== */

    openLetter.addEventListener(
        "click",
        function () {


            /*
             * Cambiamos el iframe DESPUÉS del click.
             *
             * Esto hace que la carga de YouTube ocurra
             * como consecuencia directa de una interacción
             * del usuario! Ya lo habia hecho igual en el anterior proyecto, soy vergas B)
             */

            youtube.src =
                "https://www.youtube.com/embed/BksBNbTIoPE" +
                "?autoplay=1" +
                "&enablejsapi=1" +
                "&origin=https%3A%2F%2Fstarpdust.github.io" +
                "&rel=0" +
                "&playsinline=1";


            /*
             * Animación de salida
             */

            intro.classList.add("hidden");


        }
    );



    /* ==================================================
       CREAR PUNTOS
    ================================================== */

    slides.forEach(
        function (slide, index) {


            const dot =
                document.createElement("button");


            dot.type = "button";


            dot.className =
                "dot";


            if (index === 0) {

                dot.classList.add("active");

            }


            dot.setAttribute(
                "aria-label",
                "Ir a la página " +
                (index + 1)
            );


            dot.addEventListener(
                "click",
                function () {

                    showSlide(index);

                }
            );


            dots.appendChild(dot);


        }
    );



    /* ==================================================
       CAMBIAR SLIDE
    ================================================== */

    function showSlide(index) {


        currentSlide =
            (index + slides.length)
            % slides.length;


        slides.forEach(
            function (slide, i) {

                slide.classList.toggle(
                    "active",
                    i === currentSlide
                );

            }
        );


        Array.from(
            dots.children
        ).forEach(
            function (dot, i) {

                dot.classList.toggle(
                    "active",
                    i === currentSlide
                );

            }
        );


    }



    /* ==================================================
       BOTÓN ANTERIOR
    ================================================== */

    prev.addEventListener(
        "click",
        function () {

            showSlide(
                currentSlide - 1
            );

        }
    );



    /* ==================================================
       BOTÓN SIGUIENTE
    ================================================== */

    next.addEventListener(
        "click",
        function () {

            showSlide(
                currentSlide + 1
            );

        }
    );



    /* ==================================================
       TECLADO
    ================================================== */

    document.addEventListener(
        "keydown",
        function (event) {


            if (
                event.key === "ArrowLeft"
            ) {

                showSlide(
                    currentSlide - 1
                );

            }


            if (
                event.key === "ArrowRight"
            ) {

                showSlide(
                    currentSlide + 1
                );

            }


        }
    );


});
