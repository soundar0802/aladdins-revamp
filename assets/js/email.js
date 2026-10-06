// Contact form -> EmailJS (template: emailjs/contact-enquiry-template.html)
(function () {
    // ---- fill these in from your EmailJS dashboard ----
    var EMAILJS_PUBLIC_KEY = "eZaR0K6FBbpg2mU73";   // Account > General > Public Key
    var EMAILJS_SERVICE_ID = "service_0qlub85";     // Email Services
    var EMAILJS_TEMPLATE_ID = "template_bn7iqjq";   // Email Templates

    var form = document.getElementById("contactForm");
    if (!form) return;

    var statusBox = document.getElementById("contact-status");
    var submitBtn = form.querySelector(".contact-btn");
    var formTime = document.getElementById("form_time");

    if (window.emailjs) {
        emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    }

    function stamp() {
        formTime.value = Math.floor(Date.now() / 1000);
    }
    stamp();

    function value(name) {
        var el = form.elements[name];
        return el && el.value ? el.value.trim() : "";
    }

    // ---- field validation (shows the message under each field) ----
    var fields = {
        fname: { input: "fname", error: "fnameError", check: function (v) {
            return v ? "" : "This field is required.";
        } },
        lname: { input: "lname", error: "lnameError", check: function () {
            return ""; // optional
        } },
        phn: { input: "phnnumber", error: "phnError", check: function (v) {
            if (!v) return ""; // optional
            return /^[+\d][\d\s\-()]{5,20}$/.test(v) ? "" : "Please enter a valid phone number.";
        } },
        mail: { input: "mail", error: "mailError", check: function (v) {
            if (!v) return "Email is required.";
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Please enter a valid email address.";
        } },
        msg: { input: "message", error: "msgError", check: function (v) {
            if (!v) return "Message is required.";
            return v.length < 5 ? "Please write a slightly longer message." : "";
        } }
    };

    function validateField(key) {
        var f = fields[key];
        var input = document.getElementById(f.input);
        var error = document.getElementById(f.error);
        var message = f.check(input.value.trim());
        input.classList.toggle("error", !!message);
        error.textContent = message;
        return !message;
    }

    Object.keys(fields).forEach(function (key) {
        var input = document.getElementById(fields[key].input);
        input.addEventListener("blur", function () { validateField(key); });
        input.addEventListener("input", function () { validateField(key); });
    });

    function clearErrors() {
        Object.keys(fields).forEach(function (key) {
            document.getElementById(fields[key].input).classList.remove("error");
            document.getElementById(fields[key].error).textContent = "";
        });
    }

    function showStatus(message, ok) {
        if (!statusBox) return;
        statusBox.textContent = message;
        statusBox.className = "contact-status " + (ok ? "contact-status--ok" : "contact-status--error");
        statusBox.style.display = "block";
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        var valid = Object.keys(fields).map(validateField).every(Boolean);
        if (!valid) {
            var firstInvalid = form.querySelector(".error");
            if (firstInvalid) firstInvalid.focus();
            return;
        }

        // honeypot: bots fill the hidden "website" field
        if (value("website")) {
            form.reset();
            return;
        }

        // timing check: reject forms filled in implausibly fast (likely bots)
        var started = parseInt(formTime.value, 10) || 0;
        if (!started || Math.floor(Date.now() / 1000) - started < 3) {
            showStatus("Please take a moment to fill in the form before submitting.", false);
            return;
        }

        if (!window.emailjs) {
            showStatus("Sorry, the form could not be sent. Please try again later.", false);
            return;
        }

        var firstName = value("fname");
        var lastName = value("lname");
        var submittedAt = new Date().toLocaleString("en-GB", { timeZone: "Europe/London" });

        var params = {
            first_name: firstName,
            last_name: lastName || "-",
            from_name: (firstName + " " + lastName).trim(),
            phone: value("phnnumber") || "Not provided",
            email: value("mail"),
            message: value("message"),
            submitted_at: submittedAt
        };

        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";

        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params).then(function () {
            form.reset();
            clearErrors();
            stamp();
            showStatus("Thank you! Your message has been sent. We'll get back to you soon.", true);
        }, function (err) {
            console.error("EmailJS error:", err);
            showStatus("Sorry, something went wrong sending your message. Please try again.", false);
        }).finally(function () {
            submitBtn.disabled = false;
            submitBtn.textContent = "Submit";
        });
    });
})();
