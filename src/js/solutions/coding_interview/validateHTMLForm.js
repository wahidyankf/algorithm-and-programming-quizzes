// Example test:    '<!DOCTYPE html>\n<html><head><title>Codility test</title></head><body>\n<form>\n  <input type="radio" id="type_person" name="type" value="person" checked/>\n  <input type="radio" id="type_company" name="type" value="company"/>\n  <input type="text" id="first_name" name="first_name" value="John"/>\n  <input type="text" id="last_name" name="last_name" value="Doe"/>\n  <input type="text" id="email" name="email" value="john@example.com"/>\n  <input type="text" id="company_name" name="company_name" value=""/>\n  <input type="text" id="phone" name="phone" value="234-567-890"/>\n</form></body></html>'
// OK

// Example test:    '<!DOCTYPE html>\n<html><head><title>Codility test</title></head><body>\n<form>\n  <input type="radio" id="type_person" name="type" value="person"/>\n  <input type="radio" id="type_company" name="type" value="company" checked/>\n  <input type="text" id="first_name" name="first_name" value="John"/>\n  <input type="text" id="last_name" name="last_name" value="Doe"/>\n  <input type="text" id="email" name="email" value="john@example.com"/>\n  <input type="text" id="company_name" name="company_name" value="ACME"/>\n  <input type="text" id="phone" name="phone" value="12-3"/>\n</form></body></html>'
// OK

function solution() {
  // write your code in JavaScript (Node.js 6.4.0)
  //
  // you can access DOM Tree using DOM Object Model:
  //    document.getElementById
  // or using jQuery:
  //    $('some_tag')
  //
  // you can write to stdout for debugging purposes, e.g.
  // console.log('this is a debug message');
  //  if person is checked, verify:
  //    first_name and last_name should be non-empty
  //    email should be non-empty and validated
  //      contain exactly one @ character
  //      both part before and after @ consist of at least one and at most 64 char
  //      a-z,A-Z, 0-9
  //  if company is checked, verify:
  //    company_name should be non empty
  //    phone should be non-empy
  //      consist of digits, dashes, and spaces only
  //      consist of at least 6 digits
  let type = '';
  let firstName = $('#first_name').val();
  let lastName = $('#last_name').val();
  let email = $('#email').val();
  let companyName = $('#company_name').val();
  let phone = $('#phone').val();

  if ($('#type_person').is(':checked')) {
    type = 'person';
  }

  if ($('#type_company').is(':checked')) {
    type = 'company';
  }

  if (type === 'person') {
    // check first name
    if (firstName === '') {
      return false;
    }
    // check last name
    if (lastName === '') {
      return false;
    }
    // check email
    if (email.length > 64) {
      return false;
    }

    // check email content
    let reEmail = /^[\w.]{1,64}@[\w.]{1,64}/;

    if (!reEmail.test(email)) {
      return false;
    }
  } else if (type === 'company') {
    // check company_name
    if (companyName == '') {
      return false;
    }
    // check phone
    let phoneChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ' ', '-'];
    let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let digitCount = 0;

    for (let i = 0; i < phone.length; i++) {
      if (phoneChar.indexOf(phone[i] < 0)) {
        return false;
      }
      if (number.indexOf(phone[i] >= 0)) {
        digitCount += 1;
      }
    }
    if (digitCount < 6) {
      return false;
    }
  }

  return true;
}

solution();
