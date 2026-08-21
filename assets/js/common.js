// ===============================
// LOAD COMMON HEADER
// ===============================

fetch("./header.html")
    .then(response => response.text())
    .then(data => {

        document.getElementById("common-header").innerHTML = data;

        // Initialize header functions
        initializeHeader();

    })
    .catch(error => {
        console.error("Error loading header:", error);
    });


// ===============================
// LOAD COMMON FOOTER
// ===============================

fetch("./footer.html")
    .then(response => response.text())
    .then(data => {

        document.getElementById("common-footer").innerHTML = data;

    })
    .catch(error => {
        console.error("Error loading footer:", error);
    });


// ===============================
// INITIALIZE HEADER
// ===============================

function initializeHeader() {

    const openMenu =
        document.getElementById("openmenu");

    const slide =
        document.querySelector(".nav-links");

    const links =
        document.querySelectorAll(".nav-link");

    const body =
        document.getElementById("page-body");

    const overlay =
        document.getElementById("overlay");


    // Stop if header elements don't exist
    if (!openMenu || !slide) {
        return;
    }


    // ===============================
    // HAMBURGER MENU
    // ===============================

    openMenu.addEventListener("click", function () {

        openMenu.classList.toggle("active");

        slide.classList.toggle("active");

        if (body) {
            body.classList.toggle("active");
        }

        if (overlay) {
            overlay.classList.toggle("active");
        }

    });


    // ===============================
    // CLOSE MENU ON LINK CLICK
    // ===============================

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            openMenu.classList.remove("active");

            slide.classList.remove("active");

            if (body) {
                body.classList.remove("active");
            }

            if (overlay) {
                overlay.classList.remove("active");
            }

        });

    });


    // ===============================
    // ACTIVE NAVIGATION
    // ===============================

    setActiveNav(links);


    // ===============================
    // OVERLAY
    // ===============================

    if (overlay) {

        overlay.addEventListener("click", function () {

            openMenu.classList.remove("active");

            slide.classList.remove("active");

            if (body) {
                body.classList.remove("active");
            }

            overlay.classList.remove("active");

        });

    }


    // ===============================
    // CLOSE MENU ON DESKTOP
    // ===============================

    const media =
        window.matchMedia("(max-width: 767px)");


    media.addEventListener("change", function (e) {

        if (!e.matches) {

            openMenu.classList.remove("active");

            slide.classList.remove("active");

            if (body) {
                body.classList.remove("active");
            }

            if (overlay) {
                overlay.classList.remove("active");
            }

        }

    });

}


// ===============================
// ACTIVE NAVIGATION
// ===============================

function setActiveNav(navLinks) {

    const currentPath =
        window.location.pathname;

    const currentPage =
        currentPath.split("/").pop();


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (!href) {
            return;
        }


        const linkPath =
            new URL(
                href,
                window.location.origin
            ).pathname;


        // ===============================
        // HOME
        // / 
        // /index.html
        // ===============================

        const isHomePage =
            currentPath === "/" ||
            currentPage === "" ||
            currentPage === "index.html";


        const isHomeLink =
            linkPath === "/" ||
            linkPath === "/index.html";


        if (isHomePage && isHomeLink) {

            link.classList.add("active");

            return;

        }


        // ===============================
        // OTHER PAGES
        // ===============================

        if (
            !isHomePage &&
            linkPath === currentPath
        ) {

            link.classList.add("active");

        }

    });

}