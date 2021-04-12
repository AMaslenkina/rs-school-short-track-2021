/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let b = 0;
  let newEmail = [];
  newEmail = email.split('');
  for (let i = 0; i < newEmail.length; i++) {
    if (newEmail[i] === '@') {
      b = i + 1;
    }
  }
  return email.substr(b);

  // const a = email.split('@')[1];
  // for (let i = 0; i < email.length; i++){
  //   if(email[i] === '@'){
  //     b=i;
  //   }
  // }
  //
  // return a;
}

module.exports = getEmailDomain;
