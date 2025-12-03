import './style.css';
// Simple interaction for the glass card
const card = document.querySelector('.glass-card') as HTMLElement;

if (card) {
  document.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;

    // Only apply if screen is wide enough
    if (window.innerWidth > 768) {
      card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }
  });

  // Reset on mouse leave
  document.addEventListener('mouseleave', () => {
    card.style.transform = `rotateY(-10deg) rotateX(5deg)`;
  });
}

console.log('Aidni Infrastructure Monitor Initialized');
