/* ==========================================================================
   APP.JS - CONTROLLER PRESENTAZIONE (SECONDA ANNUALITÀ)
   Navigazione, Votazione Progetto, Indice Slide (12 Slide)
   Piazza dei Mestieri - Operatore Informatico (B22-12-2026-0)
   Docente: Daniele Cerrina
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  let currentSlide = 1;

  const progressBar = document.getElementById('progressBar');
  const currentSlideNum = document.getElementById('currentSlideNum');
  const totalSlidesNum = document.getElementById('totalSlidesNum');

  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
  const btnFullscreen = document.getElementById('btnFullscreen');
  const btnOverview = document.getElementById('btnOverview');
  const btnNotes = document.getElementById('btnNotes');
  const btnExportPdf = document.getElementById('btnExportPdf');
  const btnModalExportPdf = document.getElementById('btnModalExportPdf');

  const overviewModal = document.getElementById('overviewModal');
  const overviewGrid = document.getElementById('overviewGrid');
  const btnCloseOverview = document.getElementById('btnCloseOverview');

  if (totalSlidesNum) totalSlidesNum.textContent = totalSlides;

  // Lettura eventuale hash URL (es. #2)
  const hashVal = parseInt(window.location.hash.replace('#', ''), 10);
  if (!isNaN(hashVal) && hashVal >= 1 && hashVal <= totalSlides) {
    currentSlide = hashVal;
  }

  // Titoli per l'indice (12 Slide del 2° Anno)
  const slideTitles = [
    "01. Corso di Programmazione 2",
    "02. Il Docente: Daniele Cerrina",
    "03. Obiettivo del 2° Anno (80h)",
    "04. Python OOP e gli Strumenti",
    "05. Il Progetto Guida Annuale",
    "06. Votazione: Scelta del Gioco",
    "07. Routine di Laboratorio",
    "08. Modalità di Valutazione",
    "09. Regole del Laboratorio",
    "10. 3 Consigli per il 2° Anno",
    "11. Il Traguardo Finale",
    "12. Iniziamo: Accesso e Workspace"
  ];

  function showSlide(index) {
    if (index < 1) index = 1;
    if (index > totalSlides) index = totalSlides;
    currentSlide = index;

    slides.forEach((slide, i) => {
      const slideNum = i + 1;
      if (slideNum === currentSlide) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    if (currentSlideNum) currentSlideNum.textContent = currentSlide;
    if (progressBar) {
      const progressPercent = ((currentSlide - 1) / (totalSlides - 1)) * 100;
      progressBar.style.width = `${Math.max(progressPercent, 8.33)}%`;
    }

    window.history.replaceState(null, null, `#${currentSlide}`);
    updateOverviewActiveThumb();
  }

  function nextSlide() {
    if (currentSlide < totalSlides) {
      showSlide(currentSlide + 1);
    }
  }

  function prevSlide() {
    if (currentSlide > 1) {
      showSlide(currentSlide - 1);
    }
  }

  // Event Listeners di Navigazione
  btnNext?.addEventListener('click', nextSlide);
  btnPrev?.addEventListener('click', prevSlide);

  document.addEventListener('keydown', (e) => {
    if (!overviewModal.classList.contains('hidden') && (e.key === 'Escape' || e.key === 'o' || e.key === 'O')) {
      toggleOverview(false);
      return;
    }

    switch (e.key) {
      case 'ArrowRight':
      case 'PageDown':
      case ' ':
        e.preventDefault();
        nextSlide();
        break;

      case 'ArrowLeft':
      case 'PageUp':
      case 'Backspace':
        e.preventDefault();
        prevSlide();
        break;

      case 'f':
      case 'F':
        toggleFullscreen();
        break;

      case 'o':
      case 'O':
        toggleOverview();
        break;

      case 'n':
      case 'N':
        toggleNotes();
        break;

      case 'p':
      case 'P':
        e.preventDefault();
        exportToPdf();
        break;

      case 'Home':
        showSlide(1);
        break;

      case 'End':
        showSlide(totalSlides);
        break;
    }
  });

  // Touch & Swipe per LIM o Schermi Touchscreen
  let touchStartX = 0;
  let touchEndX = 0;

  document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      nextSlide();
    }
    if (touchEndX > touchStartX + swipeThreshold) {
      prevSlide();
    }
  }, { passive: true });

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  }
  btnFullscreen?.addEventListener('click', toggleFullscreen);

  function toggleNotes() {
    document.body.classList.toggle('show-notes');
    btnNotes?.classList.toggle('active');
  }
  btnNotes?.addEventListener('click', toggleNotes);

  function exportToPdf() {
    if (overviewModal && !overviewModal.classList.contains('hidden')) {
      toggleOverview(false);
    }
    setTimeout(() => {
      window.print();
    }, 150);
  }
  btnExportPdf?.addEventListener('click', exportToPdf);
  btnModalExportPdf?.addEventListener('click', exportToPdf);

  window.addEventListener('beforeprint', () => {
    if (overviewModal && !overviewModal.classList.contains('hidden')) {
      toggleOverview(false);
    }
  });

  // Modale Indice Rapido
  function buildOverviewGrid() {
    if (!overviewGrid) return;
    overviewGrid.innerHTML = '';
    slides.forEach((slide, idx) => {
      const slideNum = idx + 1;
      const thumb = document.createElement('div');
      thumb.className = `m3-thumb-card ${slideNum === currentSlide ? 'active-thumb' : ''}`;
      thumb.dataset.slide = slideNum;
      thumb.innerHTML = `
        <span class="thumb-idx">Slide ${slideNum < 10 ? '0' + slideNum : slideNum}</span>
        <span class="thumb-text">${slideTitles[idx] || 'Slide ' + slideNum}</span>
      `;
      thumb.addEventListener('click', () => {
        showSlide(slideNum);
        toggleOverview(false);
      });
      overviewGrid.appendChild(thumb);
    });
  }

  function updateOverviewActiveThumb() {
    if (!overviewGrid) return;
    const thumbs = overviewGrid.querySelectorAll('.m3-thumb-card');
    thumbs.forEach(thumb => {
      if (parseInt(thumb.dataset.slide, 10) === currentSlide) {
        thumb.classList.add('active-thumb');
      } else {
        thumb.classList.remove('active-thumb');
      }
    });
  }

  function toggleOverview(forceState) {
    const isHidden = overviewModal.classList.contains('hidden');
    const shouldOpen = forceState !== undefined ? forceState : isHidden;
    if (shouldOpen) {
      overviewModal.classList.remove('hidden');
      btnOverview?.classList.add('active');
    } else {
      overviewModal.classList.add('hidden');
      btnOverview?.classList.remove('active');
    }
  }

  btnOverview?.addEventListener('click', () => toggleOverview());
  btnCloseOverview?.addEventListener('click', () => toggleOverview(false));

  // Cartiglio Istituzionale su ogni diapositiva
  function attachCartigli() {
    slides.forEach((slide, idx) => {
      if (slide.querySelector('.slide-cartiglio')) return;
      const slideNum = idx + 1;
      const cartiglio = document.createElement('div');
      cartiglio.className = 'slide-cartiglio';
      cartiglio.innerHTML = `
        <div class="cartiglio-left">
          <span class="cartiglio-brand">Piazza dei Mestieri</span>
          <span class="cartiglio-divider">&bull;</span>
          <span class="cartiglio-course">Programmazione 2</span>
          <span class="cartiglio-divider">&bull;</span>
          <span class="cartiglio-year">A.F. 2026 / 2027</span>
        </div>
        <div class="cartiglio-right">
          <span class="cartiglio-teacher">
            <span class="material-symbols-outlined icon-mini">person</span>
            Daniele Cerrina
          </span>
          <span class="cartiglio-divider">&bull;</span>
          <a href="mailto:daniele.cerrina@immaginazioneelavoro.it" class="cartiglio-mail">
            <span class="material-symbols-outlined icon-mini">mail</span>
            daniele.cerrina@immaginazioneelavoro.it
          </a>
          <span class="cartiglio-divider">&bull;</span>
          <span class="cartiglio-num">${slideNum < 10 ? '0' + slideNum : slideNum} / ${totalSlides < 10 ? '0' + totalSlides : totalSlides}</span>
        </div>
      `;
      slide.appendChild(cartiglio);
    });
  }

  attachCartigli();
  buildOverviewGrid();
  showSlide(currentSlide);

  // --------------------------------------------------------------------------
  // VOTAZIONE INTERATTIVA PROGETTO (SLIDE 6)
  // Progetti: Deck Builder Roguelike, Trivia Master, Vending Machine Manager
  // --------------------------------------------------------------------------
  const votes = {
    deck: 0,
    trivia: 0,
    vending: 0
  };

  try {
    const saved = localStorage.getItem('corso_prog2_voti_progetto_2027');
    if (saved) {
      Object.assign(votes, JSON.parse(saved));
    }
  } catch (err) {}

  window.updateVote = function(game, delta) {
    if (votes[game] === undefined) return;
    votes[game] = Math.max(0, votes[game] + delta);
    saveAndRenderVotes();
  };

  window.resetVotes = function() {
    votes.deck = 0;
    votes.trivia = 0;
    votes.vending = 0;
    saveAndRenderVotes();
    document.getElementById('winnerBanner')?.classList.add('hidden');
    document.querySelectorAll('.project-box').forEach(c => c.classList.remove('selected-winner'));
  };

  function saveAndRenderVotes() {
    try {
      localStorage.setItem('corso_prog2_voti_progetto_2027', JSON.stringify(votes));
    } catch (e) {}

    const total = votes.deck + votes.trivia + votes.vending;
    
    const countDeck = document.getElementById('votes-deck');
    const countTrivia = document.getElementById('votes-trivia');
    const countVending = document.getElementById('votes-vending');

    if (countDeck) countDeck.textContent = votes.deck;
    if (countTrivia) countTrivia.textContent = votes.trivia;
    if (countVending) countVending.textContent = votes.vending;

    const totalEl = document.getElementById('totalVotesCount');
    if (totalEl) totalEl.textContent = total;

    ['deck', 'trivia', 'vending'].forEach(game => {
      const pct = total > 0 ? Math.round((votes[game] / total) * 100) : 0;
      const pctEl = document.getElementById(`pct-${game}`);
      const barEl = document.getElementById(`bar-${game}`);
      if (pctEl) pctEl.textContent = `${pct}%`;
      if (barEl) barEl.style.width = `${pct}%`;
    });
  }

  window.proclaimWinner = function() {
    const total = votes.deck + votes.trivia + votes.vending;
    if (total === 0) {
      alert("Nessun voto inserito. Registrare i voti per alzata di mano con i pulsanti + prima di confermare.");
      return;
    }

    let winnerKey = 'deck';
    let maxVotes = -1;
    let tie = false;

    const gameNames = {
      deck: "Deck Builder Roguelike (Carte & Strategia a Turni)",
      trivia: "Trivia Master (Quiz Game Show con Classifica)",
      vending: "Vending Machine Manager (Lab & Test per IA)"
    };

    ['deck', 'trivia', 'vending'].forEach(key => {
      if (votes[key] > maxVotes) {
        maxVotes = votes[key];
        winnerKey = key;
        tie = false;
      } else if (votes[key] === maxVotes && maxVotes > 0) {
        tie = true;
      }
    });

    const banner = document.getElementById('winnerBanner');
    const winnerText = document.getElementById('winnerText');

    document.querySelectorAll('.project-box').forEach(c => c.classList.remove('selected-winner'));

    if (tie) {
      winnerText.textContent = `PAREGGIO A ${maxVotes} VOTI`;
    } else {
      winnerText.textContent = `PROGETTO SCELTO: ${gameNames[winnerKey].toUpperCase()}`;
      const winnerCard = document.querySelector(`.project-box[data-game="${winnerKey}"]`);
      winnerCard?.classList.add('selected-winner');
    }

    banner?.classList.remove('hidden');
  };

  saveAndRenderVotes();
});
