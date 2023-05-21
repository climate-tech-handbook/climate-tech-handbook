document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('my-button');
    let clickCount = 0;
    button.addEventListener('click', () => {
      button.classList.add('clicked');
      clickCount++;
      console.log(`Button clicked ${clickCount} times`);
    });
  });
  