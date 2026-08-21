    (function () {
  function $(sel, root=document) { return root.querySelector(sel); }
  function $all(sel, root=document) { return Array.from(root.querySelectorAll(sel)); }

  const form = $('#contactForm');
  const fields = {
    fname: $('#fname'),
    lname: $('#lname'),
    phn: $('#phnnumber'),
    mail: $('#mail'),
    msg: $('#message')
  };

  const errors = {
    fname: $('#fnameError'),
    lname: $('#lnameError'),
    phn: $('#phnError'),
    mail: $('#mailError'),
    msg: $('#msgError')
  };

  $('#form_time').value = Math.floor(new Date().getTime() / 1000);

  // FIRST NAME REQUIRED — but no length rules
  function validateNameRequired(value) {
    if (!value.trim()) return 'This field is required.';
    return '';
  }

  // LAST NAME OPTIONAL — no length rules
  function validateNameOptional(value) {
    if (!value.trim()) return ''; // optional
    return ''; // always valid if filled
  }

  function validateEmail(value) {
    if (!value.trim()) return 'Email is required.';
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(value.trim())) return 'Please enter a valid email address.';
    return '';
  }

  function validatePhone(value) {
    if (!value.trim()) return ''; // optional
    const re = /^[+\d][\d\s\-()]{5,20}$/;
    if (!re.test(value.trim())) return 'Please enter a valid phone number.';
    return '';
  }

  function validateMessage(value) {
    if (!value.trim()) return 'Message is required.';
    if (value.trim().length < 5) return 'Please write a slightly longer message.';
    return '';
  }

  function showError(inputEl, errEl, message) {
    if (message) {
      inputEl.classList.add('error');
      errEl.textContent = message;
    } else {
      inputEl.classList.remove('error');
      errEl.textContent = '';
    }
  }

  function validateField(name) {
    let msg = '';
    const val = fields[name].value || '';

    if (name === 'fname') msg = validateNameRequired(val);
    else if (name === 'lname') msg = validateNameOptional(val);
    else if (name === 'mail') msg = validateEmail(val);
    else if (name === 'phn') msg = validatePhone(val);
    else if (name === 'msg') msg = validateMessage(val);

    showError(fields[name], errors[name], msg);
    return !msg;
  }

  fields.fname.addEventListener('blur', () => validateField('fname'));
  fields.lname.addEventListener('blur', () => validateField('lname'));
  fields.mail.addEventListener('blur', () => validateField('mail'));
  fields.phn.addEventListener('blur', () => validateField('phn'));
  fields.msg.addEventListener('blur', () => validateField('msg'));

  $all('.form-control').forEach(el => {
    el.addEventListener('input', () => {
      const id = 
        el.id === 'phnnumber' ? 'phn' :
        el.id === 'message' ? 'msg' :
        el.id;
      validateField(id);
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const v1 = validateField('fname'); // required
    const v2 = validateField('lname'); // optional
    const v3 = validateField('mail');
    const v4 = validateField('msg');
    const v5 = validateField('phn'); // optional

    const ok = v1 && v2 && v3 && v4 && v5;

    if (!ok) {
      const firstInvalid = $('.error');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Honeypot: real users never fill this hidden field in.
    if ($('#website').value) {
      form.reset();
      return;
    }

    // Timing check: reject submissions filled in implausibly fast (likely bots).
    const formTime = parseInt($('#form_time').value, 10) || 0;
    if (formTime <= 0 || (Math.floor(Date.now() / 1000) - formTime) < 3) {
      alert('Please take a moment to fill in the form before submitting.');
      return;
    }

    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Sending...';

    const params = {
      from_name: (fields.fname.value + ' ' + fields.lname.value).trim(),
      phone: fields.phn.value.trim(),
      reply_to: fields.mail.value.trim(),
      message: fields.msg.value.trim(),
      time: new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })
    };

    emailjs.send('service_10ib2h2', 'template_fse7alf', params)
      .then(() => {
        alert('Message sent successfully.');
        form.reset();
        $all('.error').forEach(el => el.classList.remove('error'));
        $all('.error-message').forEach(el => el.textContent = '');
        $('#form_time').value = Math.floor(new Date().getTime() / 1000);
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        alert('Something went wrong: ' + (err && (err.text || err.message) || JSON.stringify(err)));
      })
      .finally(() => {
        btn.disabled = false;
        btn.textContent = 'Submit';
      });
  });

})();
