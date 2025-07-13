// Logo theme switcher for SVG text colors
function updateLogoColors() {
  const theme = document.documentElement.getAttribute('data-theme');
  const logoTexts = document.querySelectorAll('.ote-logo .logo-text path[fill="currentColor"]');
  
  // Color for the small text based on theme
  const textColor = theme === 'dark' ? 'hsl(210, 40%, 98%)' : '#282828';
  
  logoTexts.forEach(path => {
    path.setAttribute('fill', textColor);
  });
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', updateLogoColors);

// Watch for theme changes
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
      updateLogoColors();
    }
  });
});

// Start observing theme changes
observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ['data-theme']
});

// Also run immediately in case the script loads after the DOM
updateLogoColors();