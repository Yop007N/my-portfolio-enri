
    let menuVisible = false;

    //Función que oculta o muestra el menu
    function mostrarOcultarMenu() {
        if (menuVisible) {
            document.getElementById("nav").classList = "";
            menuVisible = false;
        } else {
            document.getElementById("nav").classList = "responsive";
            menuVisible = true;
        }
    }

    function seleccionar() {
        //oculto el menu una vez que selecciono una opcion
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }

    // Funcion que aplica las animaciones de las habilidades
    function efectoHabilidades() {
        const skills = document.getElementById("skills");
        const distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
        if (distancia_skills >= 300) {
            let habilidades = document.querySelectorAll(".progreso span");
            habilidades.forEach(habilidad => {
                const porcentaje = parseInt(habilidad.innerText);
                const progresoElement = habilidad.parentNode;
                progresoElement.style.width = porcentaje + "%";
            });
        }
    }

    //detecto el scrolling para aplicar la animacion de la barra de habilidades
    window.onscroll = function () {
        efectoHabilidades();
    };
