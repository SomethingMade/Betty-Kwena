document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Interactive Live Cost Calculator
  const stationSelect = document.getElementById('stationType');
  const hoursInput = document.getElementById('hoursInput');
  const hoursVal = document.getElementById('hoursVal');
  const totalPriceDisplay = document.getElementById('totalPrice');

  function updatePrice() {
    if (!stationSelect || !hoursInput || !totalPriceDisplay) return;

    const ratePerHour = parseFloat(stationSelect.value);
    const selectedHours = parseFloat(hoursInput.value);
    
    // Update display text for slider duration
    hoursVal.textContent = selectedHours;

    // Calculate session total
    const total = ratePerHour * selectedHours;

    // Output formatted total (Rands)
    totalPriceDisplay.textContent = `R${total.toFixed(2)}`;
  }

  if (stationSelect && hoursInput) {
    stationSelect.addEventListener('change', updatePrice);
    hoursInput.addEventListener('input', updatePrice);
  }

  // Auto-close mobile navbar upon clicking any link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
      }
    });
  });
});