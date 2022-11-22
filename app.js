//////////////// Inputs - Selectors
const mspCompany = document.querySelector('#msp-company-name');
const mspPhone = document.querySelector('#msp-phone-info');
const mspEmail = document.querySelector('#msp-email-info');
const mspWebsite = document.querySelector('#msp-website');

///////////////// Buttons - Selectors
const mspCompanyBtn = document.querySelector('#msp-company-name__btn');
const mspContactInfoBtn = document.querySelector('#msp-contact-info__btn');
const mspWebsiteBtn = document.querySelector('#msp-website__btn');
const clearLogoBtn = document.querySelector('#clear-logo');
const clearCompanyBtn = document.querySelector('#clear-company');
const clearContactBtn = document.querySelector('#clear-contact');
const clearWebsiteBtn = document.querySelector('#clear-website');
const downloadPDFBtn = document.querySelector('#download-pdf-btn');

//////////////// Update Elements
const brandedName = document.querySelectorAll('#update-company-name');
const brandedPhone = document.querySelector('#update-phone-info');
const brandedEmail = document.querySelector('#update-email-info');
const brandedWebsite = document.querySelector('#update-website');

////////////////// Inner HTML
const contactInfoContent = document.querySelector('#contact-info-content');

////////////// Events

// Company Name Event
mspCompanyBtn.addEventListener('click', function (e) {
  e.preventDefault();
  let array = [];
  array.push(brandedName);

  array.forEach((el) => {
    let innerArray = el;
    innerArray.forEach((innerEl) => {
      console.log(innerEl);
      innerEl.innerHTML = document.querySelector('#msp-company-name').value;
    });
  });
});

// Contact Info Event
mspContactInfoBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const phoneVal = document.querySelector('#msp-phone-info').value;
  const emailVal = document.querySelector('#msp-email-info').value;

  if (mspPhone.value === '') {
    contactInfoContent.innerHTML = `Contact us at ${emailVal}`;
    // if email is empty
  } else if (mspEmail.value === '') {
    contactInfoContent.innerHTML = `Contact us at ${phoneVal}`;
  } else {
    contactInfoContent.innerHTML = `Contact us at ${phoneVal} or ${emailVal}`;
  }
});

// Website Event
mspWebsiteBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const val = document.querySelector('#msp-website').value;
  brandedWebsite.innerHTML = val;
});

//////////////// Reset Functions
clearLogoBtn.addEventListener('click', function (e) {
  e.preventDefault();
});

clearCompanyBtn.addEventListener('click', function (e) {
  e.preventDefault();
  brandedName.innerHTML = 'Zorus';
  mspCompany.value = '';

  // new
  let array = [];
  array.push(brandedName);

  array.forEach((el) => {
    let innerArray = el;
    innerArray.forEach((innerEl) => {
      console.log(innerEl);
      innerEl.innerHTML = 'Zorus';
    });
  });
});

clearContactBtn.addEventListener('click', function (e) {
  e.preventDefault();
  contactInfoContent.innerHTML =
    'Contact us at 203-222-3344 or info@mspwebsite.com ';
  mspPhone.value = '';
  mspEmail.value = '';
});
clearWebsiteBtn.addEventListener('click', function (e) {
  e.preventDefault();
  brandedWebsite.innerHTML = 'zorustech.com';
  mspWebsite.value = '';
});

const preventRefresh = () => {
  preventRefresh.preventDefault();
};

////////// Download PDF
downloadPDFBtn.addEventListener('click', function () {
  window.print();
});

/////////// Change logo
let loadFile = function (event) {
  let array = [];
  let image = document.querySelectorAll('#output');
  array.push(image);

  array.forEach((el) => {
    let innerArray = el;
    innerArray.forEach((innerEl) => {
      console.log(innerEl);
      innerEl.src = URL.createObjectURL(event.target.files[0]);
    });
  });
};

////////// Clear logo
clearLogoBtn.addEventListener('click', () => {
  console.log('clear');
  document.querySelector('.logo1').src = 'img/logo--zorus--dark.svg';
  document.querySelector('.logo2').src = 'img/logo--zorus--white.svg';
});
