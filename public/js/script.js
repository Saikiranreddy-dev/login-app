// Basic client-side validation
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const emailInput = document.querySelector('input[name="email"]');
  const passwordInput = document.querySelector('input[name="password"]');

  form.addEventListener('submit', function(e) {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email) {
      e.preventDefault();
      alert('Please enter your email');
      return;
    }

    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
      e.preventDefault();
      alert('Please enter a valid email');
      return;
    }

    if (password.length < 6) {
      e.preventDefault();
      alert('Password must be at least 6 characters');
      return;
    }
  });

  // Real-time feedback
  emailInput.addEventListener('blur', function() {
    if (this.value.trim() && !/^[\\w-.]+@([\\w-]+\\.)+[\\w-]{2,4}$/.test(this.value)) {
      this.style.background = 'rgba(255, 0, 0, 0.2)';
    } else {
      this.style.background = '';
    }
  });
});
