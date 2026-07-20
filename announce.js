/* ══════════════════════════════════════════════════════════════════
   Grove site-wide announcement strip — Q2 2026 Λ Standings launch
   Added by sprints/q2-2026-publish-v1 (Phase 3). Self-contained:
   injects a dismissible top strip, offsets the fixed nav, remembers
   dismissal via localStorage. Copy + styling all live in THIS file —
   to retire the banner, remove the <script src="/announce.js"> includes
   (or delete this file). Does NOT touch page markup.
   ══════════════════════════════════════════════════════════════════ */
(function () {
  var KEY = 'grove-announce-q2-2026';
  try { if (localStorage.getItem(KEY) === 'dismissed') return; } catch (e) {}

  var LINK = '/alerts/structural-custody/';
  var CSS =
    '.gv-announce{position:fixed;top:0;left:0;right:0;z-index:200;' +
      'background:#17130f;border-bottom:1px solid rgba(212,98,26,0.45);' +
      'font-family:inherit;-webkit-font-smoothing:antialiased;}' +
    '.gv-announce-inner{max-width:1100px;margin:0 auto;display:flex;' +
      'align-items:center;gap:12px;padding:9px 48px;font-size:13.5px;' +
      'line-height:1.4;color:#e8e2d9;}' +
    '.gv-announce-dot{flex:none;width:7px;height:7px;border-radius:50%;' +
      'background:#F07030;box-shadow:0 0 0 3px rgba(240,112,48,0.18);' +
      'animation:gv-announce-pulse 2.4s ease-in-out infinite;}' +
    '@keyframes gv-announce-pulse{0%,100%{opacity:1}50%{opacity:.4}}' +
    '.gv-announce-text{flex:1 1 auto;min-width:0;}' +
    '.gv-announce-text strong{color:#F07030;font-weight:700;letter-spacing:.04em;}' +
    '.gv-announce-link{color:#F5A623;font-weight:600;text-decoration:none;' +
      'white-space:nowrap;border-bottom:1px solid rgba(245,166,35,0.4);}' +
    '.gv-announce-link:hover{border-bottom-color:#F5A623;}' +
    '.gv-announce-close{flex:none;background:none;border:none;color:#8a8178;' +
      'font-size:15px;line-height:1;cursor:pointer;padding:4px;margin-left:4px;}' +
    '.gv-announce-close:hover{color:#e8e2d9;}' +
    '@media(max-width:640px){.gv-announce-inner{padding:8px 18px;font-size:12.5px;gap:8px;}}';

  var HTML =
    '<div class="gv-announce-inner">' +
      '<span class="gv-announce-dot" aria-hidden="true"></span>' +
      '<span class="gv-announce-text">' +
        '<strong>NEW</strong> · Structural Custody in Agentic AI — how agentic-AI ' +
        'vendors harvest the reasoning trace, in their own terms. ' +
        '<a class="gv-announce-link" href="' + LINK + '">Read the Q2 CIO Alert →</a>' +
      '</span>' +
      '<button class="gv-announce-close" type="button" aria-label="Dismiss announcement">✕</button>' +
    '</div>';

  function inject() {
    var style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    var bar = document.createElement('div');
    bar.className = 'gv-announce';
    bar.setAttribute('role', 'region');
    bar.setAttribute('aria-label', 'Site announcement');
    bar.innerHTML = HTML;
    document.body.insertBefore(bar, document.body.firstChild);

    var nav = document.querySelector('nav');
    var prevBodyPad = parseFloat(getComputedStyle(document.body).paddingTop) || 0;
    var prevNavTop = nav ? getComputedStyle(nav).top : null;

    function applyOffset() {
      var h = bar.offsetHeight;
      document.body.style.paddingTop = (prevBodyPad + h) + 'px';
      if (nav && getComputedStyle(nav).position === 'fixed') nav.style.top = h + 'px';
    }
    applyOffset();
    window.addEventListener('resize', applyOffset);

    bar.querySelector('.gv-announce-close').addEventListener('click', function () {
      try { localStorage.setItem(KEY, 'dismissed'); } catch (e) {}
      window.removeEventListener('resize', applyOffset);
      if (bar.parentNode) bar.parentNode.removeChild(bar);
      document.body.style.paddingTop = prevBodyPad ? prevBodyPad + 'px' : '';
      if (nav) nav.style.top = prevNavTop || '';
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
