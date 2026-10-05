/* ==========================================================================
   APP.JS - CONTROLLER PRESENTAZIONE RIPASSO (PRIMA -> SECONDA)
   Piazza dei Mestieri - Operatore Informatico (B22-12-2026-0)
   Docente: Daniele Cerrina
   Navigazione, Scorciatoie da tastiera, Modalità LIM, Esportazione PDF
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

  // Lettura eventuale hash URL (es. #3)
  const hashVal = parseInt(window.location.hash.replace('#', ''), 10);
  if (!isNaN(hashVal) && hashVal >= 1 && hashVal <= totalSlides) {
    currentSlide = hashVal;
  }

  // Titoli per l'indice (36 Slide pulite e decongestionate per LIM)
  const slideTitles = [
    "01. Copertina: Concetti di Programmazione",
    "02. Mappa dei Concetti (1/2): Ragionare e Memorizzare",
    "03. Mappa dei Concetti (2/2): Automatizzare e Organizzare",
    "04. Cos'è un Algoritmo?",
    "05. Lo Schema Input -> Algoritmo -> Output",
    "06. Finitezza e Definitezza",
    "07. Generalità del Software",
    "08. Variabili e Assegnazione (=)",
    "09. Le Costanti in Memoria",
    "10. I Tipi Numerici (int & float)",
    "11. I Booleani (bool) e i Sensori",
    "12. Il Testo (string / char) e Codici Slot",
    "13. Operatori Aritmetici",
    "14. L'Operatore Modulo (%) e Tagli Monete",
    "15. La Logica Binaria (VERO/FALSO)",
    "16. Operatori di Confronto Relazionali",
    "17. Il Tranello Mortale: = vs ==",
    "18. Operatore Logico AND (&&)",
    "19. Operatore Logico OR (||)",
    "20. Operatore Logico NOT (!)",
    "21. Espressioni Booleane e Parentesi",
    "22. Struttura di Scelta: IF - ELSE",
    "23. Scelte Multiple a Cascata",
    "24. Perché Ripetere? Principio DRY",
    "25. Ciclo Pre-Condizionale (WHILE)",
    "26. Allarme Loop Infinito!",
    "27. Ciclo a Conteggio (FOR)",
    "28. Confronto: WHILE vs FOR",
    "29. Vettori (Array): Indici da ZERO",
    "30. Scorrere un Vettore con FOR",
    "31. Le Stringhe: Vettori di Caratteri",
    "32. Sfida LIM 1: Il Controllo",
    "33. Sfida LIM 2: Il Ciclo",
    "34. Sfida LIM 3: Il Vettore",
    "35. Vending Machine: Dati (Input)",
    "36. Vending Machine: Algoritmo"
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
      progressBar.style.width = `${Math.max(progressPercent, 100 / totalSlides)}%`;
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
    // Se la modale è aperta ed è premuto Esc o O, chiudila
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

      case 'Home':
        e.preventDefault();
        showSlide(1);
        break;

      case 'End':
        e.preventDefault();
        showSlide(totalSlides);
        break;

      case 'f':
      case 'F':
        e.preventDefault();
        toggleFullscreen();
        break;

      case 'o':
      case 'O':
        e.preventDefault();
        toggleOverview();
        break;

      case 'n':
      case 'N':
        e.preventDefault();
        toggleNotes();
        break;

      case 'p':
      case 'P':
        e.preventDefault();
        exportPdf();
        break;

      default:
        break;
    }
  });

  // Funzione Schermo Intero
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.warn(`Errore schermo intero: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  btnFullscreen?.addEventListener('click', toggleFullscreen);

  // Note Relatore
  function toggleNotes() {
    const activeSlide = document.querySelector('.slide.active');
    if (!activeSlide) return;
    const notesEl = activeSlide.querySelector('.speaker-notes');
    if (notesEl) {
      notesEl.classList.toggle('visible');
      btnNotes?.classList.toggle('active');
    }
  }

  btnNotes?.addEventListener('click', toggleNotes);

  // Esportazione PDF
  function exportPdf() {
    toggleOverview(false);
    window.print();
  }

  btnExportPdf?.addEventListener('click', exportPdf);
  btnModalExportPdf?.addEventListener('click', exportPdf);

  // Panoramica / Indice Slide
  function buildOverviewGrid() {
    if (!overviewGrid) return;
    overviewGrid.innerHTML = '';

    slideTitles.forEach((title, index) => {
      const slideNum = index + 1;
      const thumb = document.createElement('div');
      thumb.className = `m3-thumb-card ${slideNum === currentSlide ? 'active-thumb' : ''}`;
      thumb.dataset.slide = slideNum;

      thumb.innerHTML = `
        <span class="thumb-idx">SLIDE ${String(slideNum).padStart(2, '0')}</span>
        <span class="thumb-text">${title.replace(/^\d+\.\s*/, '')}</span>
      `;

      thumb.addEventListener('click', () => {
        showSlide(slideNum);
        toggleOverview(false);
      });

      overviewGrid.appendChild(thumb);
    });
  }

  function updateOverviewActiveThumb() {
    const thumbs = overviewGrid?.querySelectorAll('.m3-thumb-card');
    thumbs?.forEach((thumb) => {
      const num = parseInt(thumb.dataset.slide, 10);
      if (num === currentSlide) {
        thumb.classList.add('active-thumb');
      } else {
        thumb.classList.remove('active-thumb');
      }
    });
  }

  function toggleOverview(force) {
    const isHidden = overviewModal.classList.contains('hidden');
    const shouldShow = force !== undefined ? force : isHidden;

    if (shouldShow) {
      buildOverviewGrid();
      overviewModal.classList.remove('hidden');
      btnOverview?.classList.add('active');
    } else {
      overviewModal.classList.add('hidden');
      btnOverview?.classList.remove('active');
    }
  }

  btnOverview?.addEventListener('click', () => toggleOverview());
  btnCloseOverview?.addEventListener('click', () => toggleOverview(false));

  overviewModal?.addEventListener('click', (e) => {
    if (e.target === overviewModal) {
      toggleOverview(false);
    }
  });

  // Touch & Swipe per LIM touch-screen
  let touchStartX = 0;
  let touchEndX = 0;

  document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const threshold = 60;
    if (touchEndX < touchStartX - threshold) {
      nextSlide();
    } else if (touchEndX > touchStartX + threshold) {
      prevSlide();
    }
  }

  // Interattività: Sfida "Trova il Bug"
  const revealButtons = document.querySelectorAll('.btn-reveal');
  revealButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const parentCard = btn.closest('.bug-card');
      if (!parentCard) return;
      const solutionBox = parentCard.querySelector('.bug-solution-box');
      if (!solutionBox) return;

      const isVisible = solutionBox.classList.contains('visible');
      if (isVisible) {
        solutionBox.classList.remove('visible');
        btn.innerHTML = '<span class="material-symbols-outlined" style="font-size:18px;">visibility</span><span>Mostra Soluzione</span>';
      } else {
        solutionBox.classList.add('visible');
        btn.innerHTML = '<span class="material-symbols-outlined" style="font-size:18px;">visibility_off</span><span>Nascondi Soluzione</span>';
      }
    });
  });

  // Avvio iniziale
  showSlide(currentSlide);
});
