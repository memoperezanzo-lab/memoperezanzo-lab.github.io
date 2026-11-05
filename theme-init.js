// Applies the stored theme before first paint to avoid a flash of the
// default dark palette for users who chose another theme. Loaded as a
// blocking external script from <head> so it runs before any paint — an
// inline script would be blocked by the production CSP (script-src 'self').
try {
  var t = localStorage.getItem("dd2f_theme");
  if (t && t !== "system") document.documentElement.dataset.theme = t;
} catch {
  /* localStorage unavailable (private mode or disabled) — default theme applies */
}
