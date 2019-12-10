document.addEventListener('DOMContentLoaded', function() {
  copy('{ "Authorization": "Bearer ' + localStorage.access_token + '" }')
}, false);