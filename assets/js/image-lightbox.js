(function () {
  var triggerSelector = 'figure img:not([data-no-lightbox])';
  var triggers = Array.prototype.slice.call(document.querySelectorAll(triggerSelector));
  if (!triggers.length) return;

  var activeTrigger = null;
  var lightbox = document.createElement('div');
  lightbox.className = 'image-lightbox';
  lightbox.setAttribute('aria-hidden', 'true');
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-label', 'Full-size image viewer');
  lightbox.innerHTML = [
    '<div class="image-lightbox__panel">',
    '  <div class="image-lightbox__actions">',
    '    <a class="image-lightbox__open" href="#" target="_blank" rel="noopener">Open image in new tab</a>',
    '    <button class="image-lightbox__close" type="button" aria-label="Close full-size image">Close ×</button>',
    '  </div>',
    '  <div class="image-lightbox__image-wrap">',
    '    <img class="image-lightbox__image" alt="">',
    '  </div>',
    '  <div class="image-lightbox__caption"></div>',
    '</div>'
  ].join('');
  document.body.appendChild(lightbox);

  var fullImage = lightbox.querySelector('.image-lightbox__image');
  var caption = lightbox.querySelector('.image-lightbox__caption');
  var closeButton = lightbox.querySelector('.image-lightbox__close');
  var openLink = lightbox.querySelector('.image-lightbox__open');

  function getCaption(img) {
    var figure = img.closest('figure');
    var figcaption = figure && figure.querySelector('figcaption');
    var text = figcaption ? figcaption.textContent.trim() : '';
    return text || img.getAttribute('alt') || '';
  }

  function absoluteUrl(img) {
    return new URL(img.currentSrc || img.src, window.location.href).href;
  }

  function openLightbox(img) {
    activeTrigger = img;
    var src = absoluteUrl(img);
    var text = getCaption(img);
    fullImage.src = src;
    fullImage.alt = img.alt || text || 'Full-size portfolio image';
    caption.textContent = text;
    openLink.href = src;
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('image-lightbox-open');
    closeButton.focus();
  }

  function closeLightbox() {
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('image-lightbox-open');
    fullImage.removeAttribute('src');
    if (activeTrigger) activeTrigger.focus();
  }

  triggers.forEach(function (img) {
    img.setAttribute('data-lightbox-image', 'true');
    img.setAttribute('role', 'button');
    img.setAttribute('tabindex', '0');
    img.setAttribute('aria-label', 'Open full-size image: ' + getCaption(img));

    var figure = img.closest('figure');
    if (figure && !figure.querySelector('.image-lightbox-hint')) {
      var hint = document.createElement('div');
      hint.className = 'image-lightbox-hint';
      hint.textContent = 'Click image to view full size.';
      var figcaption = figure.querySelector('figcaption');
      if (figcaption) {
        figcaption.insertAdjacentElement('afterend', hint);
      } else {
        figure.appendChild(hint);
      }
    }

    img.addEventListener('click', function () { openLightbox(img); });
    img.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openLightbox(img);
      }
    });
  });

  closeButton.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function (event) {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && lightbox.getAttribute('aria-hidden') === 'false') {
      closeLightbox();
    }
  });
}());
