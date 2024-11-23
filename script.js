document.getElementById('start').addEventListener('click', function () {
    const box = document.getElementById('box');
    let position = 0;
   
    // A very janky animation
    function moveBox() {
      for (let i = 0; i < 1e7; i++) {
        // Simulating heavy computation
      }
      position += 5;
      box.style.left = position + 'px'; // Inefficient DOM manipulation
      if (position < window.innerWidth - 100) {
        setTimeout(moveBox, 10); // Inducing delays
      }
    }
   
    moveBox();
  });