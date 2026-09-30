document.addEventListener('DOMContentLoaded', function () {
  let seeAllBtn = document.getElementById('see-all-btn');
  let hiddenCards = document.querySelectorAll('.insights__card--hidden');

  if (!seeAllBtn || hiddenCards.length === 0) return;

  seeAllBtn.addEventListener('click', function () {
    hiddenCards.forEach(function (card) {
      card.classList.remove('insights__card--hidden');
    });

    let firstNewlyRevealedLink = hiddenCards[0].querySelector('.insights__title-link');
    if (firstNewlyRevealedLink) {
      firstNewlyRevealedLink.focus({ preventScroll: true });
    }

    seeAllBtn.parentElement.remove();
  });
});