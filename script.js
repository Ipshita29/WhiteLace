function togglePopup() {
  const popup = document.getElementById('loginPopup');
  popup.style.display = popup.style.display === 'flex' ? 'none' : 'flex';
}

function handleLogin() {
  const user = document.getElementById('username')?.value;
  if (user) {
    togglePopup();
    alert('Welcome back, ' + user + '! 👟');
  } else {
    alert('Please enter your username.');
  }
}

// Close popup when clicking outside
document.addEventListener('DOMContentLoaded', function () {
  const popup = document.getElementById('loginPopup');
  if (popup) {
    popup.addEventListener('click', function (e) {
      if (e.target === popup) togglePopup();
    });
  }

  // Sticky header shadow on scroll
  const header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.5)';
      } else {
        header.style.boxShadow = 'none';
      }
    });
  }
});