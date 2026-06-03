// QUIETPINE — Bild-Lightbox: Klick auf Produktbild öffnet es groß.
(function () {
  var imgs = document.querySelectorAll('.lcard img, .bcard img');
  if (!imgs.length) return;
  var lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-label', 'Bildvorschau');
  lb.innerHTML = '<button class="lbx" aria-label="Schließen">×</button><img alt="">';
  document.body.appendChild(lb);
  var big = lb.querySelector('img');
  imgs.forEach(function (im) {
    im.addEventListener('click', function () {
      big.src = im.src;
      big.alt = im.alt || '';
      lb.classList.add('open');
    });
  });
  function close() { lb.classList.remove('open'); }
  lb.addEventListener('click', function (e) { if (e.target !== big) close(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
})();
