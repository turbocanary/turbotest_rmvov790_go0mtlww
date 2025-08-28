const crypto = require('crypto');
function anotherInsecurePassword() {
  // GOOD: using cryptographically secure random suffix
  var suffix = crypto.randomBytes(4).toString('hex');
  var password = "sssAAAA" + suffix;
  return password;
}