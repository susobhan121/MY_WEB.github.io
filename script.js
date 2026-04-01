document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const toggleBtn = document.getElementById('mobileNavHint');
  if(toggleBtn){
    toggleBtn.addEventListener('click', () => {
      alert('Tip: This portfolio is multi-page. Use the top navigation to explore About, Projects, and Contact.');
    });
  }
});
