'use strict';

/************************/
/* MARK: PRIVACYMELDING */
/************************/

document.addEventListener('DOMContentLoaded', () => {
  const notice = document.querySelector('#privacyNotice');
  const closeButton = notice?.querySelector('[data-close-privacy]');
  const heading = notice?.querySelector('#privacyTitle');
  const entrance = document.querySelector('#saloonDoors');
  if (!notice || !closeButton) return;

  // Dit is een informatiemelding: sluiten wijzigt geen toestemming of opslag.
  closeButton.addEventListener('click', () => notice.close());
  notice.addEventListener('close', () => entrance?.focus());

  document.querySelectorAll('[data-open-privacy]').forEach(button => {
    button.addEventListener('click', () => {
      if (!notice.open) notice.showModal();
      heading?.focus();
    });
  });

  if (!notice.open) notice.showModal();
  heading?.focus();
});






/******************************/
/* MARK: PRIVACYKAART VALIDATIE */
/******************************/

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#privacyQuestionForm');
  const summary = document.querySelector('#postcardErrors');
  const submit = document.querySelector('#postcardSubmit');
  const confirmation = document.querySelector('#postcardConfirmation');
  const close = document.querySelector('#postcardConfirmationClose');
  if (!form || !summary || !submit || !confirmation || !close) return;

  const fields = [
    { input: form.querySelector('#postcardName'), error: form.querySelector('#postcardNameError'), emptyKey: 'privacy_postcard_name_error', fallback: 'Vul je naam in.' },
    { input: form.querySelector('#postcardEmail'), error: form.querySelector('#postcardEmailError'), emptyKey: 'privacy_postcard_email_empty', fallback: 'Vul je e-mailadres in.' },
    { input: form.querySelector('#postcardQuestion'), error: form.querySelector('#postcardQuestionError'), emptyKey: 'privacy_postcard_question_error', fallback: 'Schrijf je vraag op de kaart.' },
  ];
  if (fields.some(field => !field.input || !field.error)) return;
  let attempted = false;

  function validateField(field) {
    const empty = field.input.value.trim() === '';
    const invalidEmail = !empty && field.input.type === 'email' && field.input.validity.typeMismatch;
    const invalid = empty || invalidEmail;
    const key = invalidEmail ? 'privacy_postcard_email_invalid' : field.emptyKey;
    const fallback = invalidEmail ? 'Vul een geldig e-mailadres in, bijvoorbeeld naam@voorbeeld.nl.' : field.fallback;
    field.error.dataset.i18n = key;
    field.error.textContent = window.siteI18n?.t(key, fallback) ?? fallback;
    field.error.hidden = !invalid;
    field.input.setAttribute('aria-invalid', String(invalid));
    field.input.classList.toggle('has-error', invalid);
    return !invalid;
  }

  function validateForm() {
    const invalidFields = fields.filter(field => !validateField(field));
    summary.hidden = invalidFields.length === 0;
    return invalidFields;
  }

  fields.forEach(field => {
    field.input.addEventListener('input', () => {
      if (!attempted) return;
      validateField(field);
      summary.hidden = fields.every(item => item.error.hidden);
    });
  });

  form.addEventListener('submit', event => {
    // Geen fetch, formulierverzending of browseropslag: uitsluitend een lokale demo.
    event.preventDefault();
    attempted = true;
    const invalidFields = validateForm();
    if (invalidFields.length) {
      invalidFields[0].input.focus();
      return;
    }
    if (!confirmation.open) confirmation.showModal();
  });

  close.addEventListener('click', () => confirmation.close());
  confirmation.addEventListener('close', () => submit.focus());
  document.addEventListener('languagechange', () => {
    if (attempted) validateForm();
  });

  // Zonder handler blijft de submitknop uitgeschakeld, ook zonder JavaScript.
  submit.disabled = false;
});
