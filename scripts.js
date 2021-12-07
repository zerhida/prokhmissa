function change() {
    const blok = document.getElementById("bolok2");

    if (blok.style.display == "none") {
        blok.style.display = "block";
    } else {
        blok.style.display = "none";
    }
}

function direct() {
    window.location.href = "page6.html";
}

function accueilpro() {
    window.location.href = "accueilpro.html";
}

function pagelogin() {
    window.location.href = "pagelogin.html";
}

function pageinfo() {
    window.location.href = "pageinfo.html";
}

function validlogin() {
    window.location.href = "validlogin.html";
}

function removing() {
    const mylog = document.getElementById("loader");
    const mydone = document.getElementById("Done");
    const myP = document.getElementById("pp");

    myP.textContent = "Vous êtes maintenant un client pro merci pour votre confiance ";
    mylog.style.display = "none";
    mydone.style.display = "block";
}

window.setTimeout(removing, 6000);


$(document).ready(function() {
    $("#btnpanier").click(function() {
        const blok = document.getElementById("bolok2");

        if (blok.style.display == "none") {
            blok.style.display = "block";
        } else {
            blok.style.display = "none";
        }
    });

    $("#toglmenu").click(function() {
        const blok = document.getElementById("sencodMenu");

        if (blok.style.display == "none") {
            blok.style.display = "flex";
        } else {
            blok.style.display = "none";
        }
    });

    $("#searchtogl").click(function() {
        const blok = document.getElementById("Sencondcontainer-search");

        if (blok.style.display == "none") {
            blok.style.display = "flex";
        } else {
            blok.style.display = "none";
        }
    });

    $("#fug").owlCarousel({
        margin: 5,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
                nav: false,
            },
            350: {
                items: 3,
                nav: false,
            },

            450: {
                items: 4,
                nav: false,
            },

            650: {
                items: 5,
                nav: false,
            },

            768: {
                items: 5,
                nav: false,
            },
        },
    });

    // function checkme() {
    //   const cb = document.getElementById("check");
    //   if(cb.checked) {
    //     $("#lang").css("background"," #d4145a"); 

    //   }
    //  }



    $("#check").change(function() {
        if (this.checked) {

            $("#lang1").css("background", "linear-gradient(90deg, #d4145a, #d2135b, #aa0263)");
            $("#fra").css("color", "#f3f3f3");

        } else {

            $("#lang1").css("background", "#f3f3f3");
            $("#fra").css("color", "var(--Dgreen)");

        }
    });
    $("#check1").change(function() {
        if (this.checked) {

            $("#lang2").css("background", "linear-gradient(90deg, #d4145a, #d2135b, #aa0263)");
            $("#ar").css("color", "#f3f3f3");

        } else {

            $("#lang2").css("background", "#f3f3f3");
            $("#ar").css("color", "var(--Dgreen)");

        }
    });


});