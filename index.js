var heading = document.getElementById('script');

heading.addEventListener('click', function() {
  heading.style.color = 'red'; 
  heading.addEventListener('click', function() {
heading.style.color = 'black'; 
});
});

