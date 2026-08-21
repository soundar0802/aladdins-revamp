// ==================================================
// LOAD COMMON HEADER
// ==================================================
fetch("./header.html")
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to load header.html");
        }
        return response.text();
    })
    .then(data => {
        const headerContainer =
            document.getElementById("common-header");
        if (!headerContainer) {
            return;
        }
        // Insert header
        headerContainer.innerHTML = data;

        // Initialize hamburger / mobile menu
        initializeHeader();

        // Initialize active navigation
        setActiveNav();
    })
    .catch(error => {
        console.error(
            "Error loading header:",
            error
        );
    });

// ==================================================
// LOAD COMMON FOOTER
// ==================================================

fetch("./footer.html")
    .then(response => {

        if (!response.ok) {
            throw new Error("Failed to load footer.html");
        }

        return response.text();

    })
    .then(data => {

        const footerContainer =
            document.getElementById("common-footer");


        if (!footerContainer) {
            return;
        }


        // Insert footer
        footerContainer.innerHTML = data;


        // Initialize postcode forms
        initializePostcodeForms();

    })
    .catch(error => {

        console.error(
            "Error loading footer:",
            error
        );

    });


// ==================================================
// INITIALIZE HEADER
// ==================================================

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


    // ----------------------------------------------
    // Safety check
    // ----------------------------------------------

    if (!openMenu || !slide) {
        return;
    }


    // ==================================================
    // HAMBURGER MENU
    // ==================================================

    openMenu.addEventListener(
        "click",
        function () {

            openMenu.classList.toggle("active");

            slide.classList.toggle("active");


            if (body) {

                body.classList.toggle("active");

            }


            if (overlay) {

                overlay.classList.toggle("active");

            }

        }
    );


    // ==================================================
    // CLOSE MENU WHEN NAV LINK IS CLICKED
    // ==================================================

    links.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                closeMobileMenu(
                    openMenu,
                    slide,
                    body,
                    overlay
                );

            }
        );

    });


    // ==================================================
    // OVERLAY CLICK
    // ==================================================

    if (overlay) {

        overlay.addEventListener(
            "click",
            function () {

                closeMobileMenu(
                    openMenu,
                    slide,
                    body,
                    overlay
                );

            }
        );

    }


    // ==================================================
    // CLOSE MENU WHEN SWITCHING TO DESKTOP
    // ==================================================

    const media =
        window.matchMedia(
            "(max-width: 767px)"
        );


    media.addEventListener(
        "change",
        function (event) {

            if (!event.matches) {

                closeMobileMenu(
                    openMenu,
                    slide,
                    body,
                    overlay
                );

            }

        }
    );

}


// ==================================================
// CLOSE MOBILE MENU
// ==================================================

function closeMobileMenu(
    openMenu,
    slide,
    body,
    overlay
) {

    if (openMenu) {

        openMenu.classList.remove(
            "active"
        );

    }


    if (slide) {

        slide.classList.remove(
            "active"
        );

    }


    if (body) {

        body.classList.remove(
            "active"
        );

    }


    if (overlay) {

        overlay.classList.remove(
            "active"
        );

    }

}


// ==================================================
// ACTIVE NAVIGATION
// ==================================================

function setActiveNav() {

    const navLinks =
        document.querySelectorAll(
            "#header .nav-link"
        );


    // Header has not loaded
    if (!navLinks.length) {
        return;
    }


    // ----------------------------------------------
    // Get current URL pathname
    // ----------------------------------------------

    let currentPath =
        window.location.pathname;


    // Remove trailing slash
    currentPath =
        currentPath.replace(
            /\/+$/,
            ""
        );


    // ----------------------------------------------
    // Get current page
    // ----------------------------------------------

    let currentPage =
        currentPath
            .split("/")
            .pop();


    // ----------------------------------------------
    // GitHub Pages root
    //
    // https://soundar0802.github.io/aladdins-revamp/
    //
    // Treat the project root as index.html
    // ----------------------------------------------

    if (
        !currentPage ||
        !currentPage.includes(".")
    ) {

        currentPage =
            "index.html";

    }


    // ----------------------------------------------
    // Check every navigation link
    // ----------------------------------------------

    navLinks.forEach(function (link) {

        // Remove existing active class
        link.classList.remove(
            "active"
        );


        const href =
            link.getAttribute("href");


        if (!href) {
            return;
        }


        // ------------------------------------------
        // Get filename from href
        // ------------------------------------------

        let linkPage =
            href
                .split("/")
                .filter(Boolean)
                .pop();


        // Treat empty / as index.html
        if (
            !linkPage ||
            linkPage === "/"
        ) {

            linkPage =
                "index.html";

        }


        // ------------------------------------------
        // Compare current page with link
        // ------------------------------------------

        if (
            currentPage.toLowerCase() ===
            linkPage.toLowerCase()
        ) {

            link.classList.add(
                "active"
            );

        }

    });

}


// ==================================================
// POSTCODE SEARCH
// ==================================================

const postcodeOrderUrl =
    "https://aladdinsorder.com/location/-/";


// ==================================================
// UK POSTCODE VALIDATION
// ==================================================

function checkPostCode(input) {

    let postcode =
        input.value.trim();


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


    let formattedPostcode =
        postcode;


    // ----------------------------------------------
    // Validate postcode
    // ----------------------------------------------

    for (
        let i = 0;
        i < patterns.length;
        i++
    ) {

        const match =
            postcode.match(
                patterns[i]
            );


        if (match) {

            formattedPostcode =
                (
                    match[1].toUpperCase() +
                    " " +
                    match[3].toUpperCase()
                )
                .replace(
                    /C\/O\s*/i,
                    "c/o "
                );


            valid = true;

            break;

        }

    }


    input.value =
        formattedPostcode;


    return (
        valid &&
        formattedPostcode
    );

}


// ==================================================
// INVALID POSTCODE ALERT
// ==================================================

function customAlert(
    message,
    time,
    form
) {

    // Remove existing alert
    const existingAlert =
        form.querySelector(
            ".invalidAlert-wrapper"
        );


    if (existingAlert) {

        existingAlert.remove();

    }


    // Create alert
    const alertWrapper =
        document.createElement(
            "div"
        );


    alertWrapper.className =
        "invalidAlert-wrapper";


    alertWrapper.innerHTML =
        "<span class='invalidAlert'>" +
        message +
        "</span>";


    form.appendChild(
        alertWrapper
    );


    // Remove alert after timeout
    setTimeout(
        function () {

            if (
                alertWrapper.parentNode
            ) {

                alertWrapper.remove();

            }

        },
        time
    );

}


// ==================================================
// POSTCODE SEARCH
// ==================================================

function search(form) {

    const input =
        form.querySelector(
            'input[name="postcode"]'
        );


    if (!input) {

        return false;

    }


    // Validate postcode
    const postcode =
        checkPostCode(input);


    // ----------------------------------------------
    // Valid postcode
    // ----------------------------------------------

    if (postcode) {

        window.location.href =
            postcodeOrderUrl +
            encodeURIComponent(
                postcode
            );

    }


    // ----------------------------------------------
    // Invalid postcode
    // ----------------------------------------------

    else {

        input.focus();


        customAlert(
            "Please enter a valid postcode",
            2000,
            form
        );

    }


    return false;

}


// ==================================================
// INITIALIZE POSTCODE FORMS
// ==================================================

function initializePostcodeForms() {

    const forms =
        document.querySelectorAll(
            ".postcode-search"
        );


    // No postcode forms
    if (!forms.length) {
        return;
    }


    forms.forEach(function (form) {

        // Prevent duplicate listeners
        if (
            form.dataset
                .postcodeInitialized ===
            "true"
        ) {

            return;

        }


        form.dataset
            .postcodeInitialized =
            "true";


        // ------------------------------------------
        // Submit
        // ------------------------------------------

        form.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                search(form);

            }
        );

    });

}