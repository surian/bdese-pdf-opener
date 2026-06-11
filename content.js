// Intercept en phase capture pour passer avant le handler jQuery qui ouvre la modal
document.addEventListener('click', function (e) {
  const btn = e.target.closest('.js-download-document');
  if (!btn) return;

  // Vérifier que le fichier est bien un PDF via l'icône dans la ligne
  const row = btn.closest('tr');
  const isPdf = row && row.querySelector('img[src*="pdf-icon"]');
  if (!isPdf) return;

  e.stopImmediatePropagation();
  e.preventDefault();

  const docId = btn.getAttribute('data-document-id');
  if (!docId) return;

  const url = window.location.origin + '/bdes/basedoc/document/directdownload/' + docId;
  window.open(url, '_blank');
}, true);
