


document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll('.main-card');
      const rightButton = document.getElementById('right-button');
      const leftButton = document.getElementById('left-button');

  let currentIndex = 0;

  function updateCardVisibility() {
    cards.forEach((card, index) => {
      card.style.display = index === currentIndex ? 'block' : 'none';
    });
  }
  updateCardVisibility();

  function showNextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCardVisibility();
  }

  function showPreviousCard() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCardVisibility();
  }

  function checkScreenSize() {
    if (window.innerWidth <= 480) {
      rightButton.addEventListener('click', showNextCard);
      leftButton.addEventListener('click', showPreviousCard);
    } else {
      rightButton.remove();
      leftButton.remove();
      cards.forEach(card => {
        card.style.display = 'block';
      });
    }
  }

  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});



