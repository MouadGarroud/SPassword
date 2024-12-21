document.getElementById('generate').addEventListener('click', function() {
  const length = 20; 
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$£%&#@";
  let password = '';
  for (let i = 0, n = charset.length; i < length; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
  }
  document.getElementById('Password').value = password;
});
document.getElementById('COPY').addEventListener('click', function() {
  const passwordField = document.getElementById('Password');
  passwordField.select();
  document.execCommand('copy');
});
