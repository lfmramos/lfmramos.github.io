document.addEventListener('DOMContentLoaded', function() {
  var toggleButtons = document.querySelectorAll('.toggle-button');
  
  toggleButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      var skillContent = this.nextElementSibling;
      if (skillContent.style.display === 'block') {
        skillContent.style.display = 'none';
        this.querySelector('i').classList.replace('fa-caret-down', 'fa-caret-right');
      } else {
        skillContent.style.display = 'block';
        this.querySelector('i').classList.replace('fa-caret-right', 'fa-caret-down');
      }
    });
  });
});

function toggleAccordion(id) {
  var element = document.getElementById(id);
  if (element.classList.contains('hidden')) {
    element.classList.remove('hidden');
  } else {
    element.classList.add('hidden');
  }
}