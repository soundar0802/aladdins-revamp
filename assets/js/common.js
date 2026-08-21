// ===============================
// LOAD COMMON HEADER
// ===============================

fetch("./header.html")
    .then(response => response.text())
    .then(data => {

        document.getElementById("common-header").innerHTML = data;

        // Initialize header functions
        initializeHeader();

        // Set active navigation
        setActiveNav();

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
// ===============================
// POSTCODE SEARCH
// ===============================

const postcodeOrderUrl =
    "https://aladdinsorder.com/location/-/";


// ===============================
// UK POSTCODE VALIDATION
// ===============================

function checkPostCode(input) {

    let postcode = input.value.trim();

    const firstCharacter =
        "[abcdefghijklmnoprstuwyz]";

    const secondCharacter =
        "[abcdefghklmnopqrstuvwxy]";

    const lastCharacters =
        "[abdefghjlnpqrstuwxyz]";


    const patterns = [

        new RegExp(
            "^(" +
            firstCharacter +
            "{1}" +
            secondCharacter +
            "?[0-9]{1,2})" +
            "(\\s*)" +
            "([0-9]{1}" +
            lastCharacters +
            "{2})$",
            "i"
        ),

        new RegExp(
            "^(" +
            firstCharacter +
            "{1}[0-9]{1}[abcdefghjkstuw]{1})" +
            "(\\s*)" +
            "([0-9]{1}" +
            lastCharacters +
            "{2})$",
            "i"
        ),

        new RegExp(
            "^(" +
            firstCharacter +
            "{1}" +
            secondCharacter +
            "?[0-9]{1}[abehmnprvwxy]{1})" +
            "(\\s*)" +
            "([0-9]{1}" +
            lastCharacters +
            "{2})$",
            "i"
        ),

        /^(GIR)(\s*)(0AA)$/i,

        /^(bfpo)(\s*)([0-9]{1,4})$/i,

        /^(bfpo)(\s*)(c\/o\s*[0-9]{1,3})$/i,

        /^([A-Z]{4})(\s*)(1ZZ)$/i

    ];


    let valid = false;
    let formattedPostcode = postcode;


    for (let i = 0; i < patterns.length; i++) {

        const match =
            postcode.match(patterns[i]);


        if (match) {

            formattedPostcode =
                (
                    match[1].toUpperCase() +
                    " " +
                    match[3].toUpperCase()
                )
                .replace(/C\/O\s*/i, "c/o ");


            valid = true;

            break;

        }

    }


    input.value = formattedPostcode;

    return valid && formattedPostcode;

}


// ===============================
// INVALID POSTCODE ALERT
// ===============================

function customAlert(message, time, form) {

    const existingAlert =
        form.querySelector(".invalidAlert-wrapper");


    if (existingAlert) {
        existingAlert.remove();
    }


    const alertWrapper =
        document.createElement("div");


    alertWrapper.className =
        "invalidAlert-wrapper";


    alertWrapper.innerHTML =
        "<span class='invalidAlert'>" +
        message +
        "</span>";


    form.appendChild(alertWrapper);


    setTimeout(function () {

        if (alertWrapper.parentNode) {
            alertWrapper.remove();
        }

    }, time);

}


// ===============================
// POSTCODE FORM SUBMIT
// ===============================

function search(form) {

    const input =
        form.querySelector(
            'input[name="postcode"]'
        );


    if (!input) {
        return false;
    }


    const postcode =
        checkPostCode(input);


    if (postcode) {

        window.location.href =
            postcodeOrderUrl +
            encodeURIComponent(postcode);

    } else {

        input.focus();


        customAlert(
            "Please enter a valid postcode",
            2000,
            form
        );

    }


    return false;

}

 
// ===============================
// INITIALIZE POSTCODE FORMS
// ===============================

function initializePostcodeForms() {

    const forms =
        document.querySelectorAll(
            ".postcode-search"
        );


    forms.forEach(function (form) {

        // Prevent duplicate event listeners
        if (form.dataset.postcodeInitialized === "true") {
            return;
        }


        form.dataset.postcodeInitialized =
            "true";


        form.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                search(form);

            }
        );

    });

}