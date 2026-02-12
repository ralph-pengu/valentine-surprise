// Select flower container and button
const flower = document.querySelector('.flower');
const bloomBtn = document.getElementById('bloomBtn');

// Add bloom animation on button click
bloomBtn.addEventListener('click', () => {
  flower.classList.toggle('bloom');
});
