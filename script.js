document.addEventListener('DOMContentLoaded', function() {
  var toggleButtons = document.querySelectorAll('.toggle-button');
  
  toggleButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      var skillContent = this.nextElementSibling;
      
      // Toggle this content section
      if (skillContent.style.display === 'block') {
        skillContent.style.display = 'none';
      } else {
        skillContent.style.display = 'block';
      }
      
      // Add arrow indicators (optional)
      if (!this.querySelector('i')) {
        var icon = document.createElement('i');
        icon.classList.add('fa-solid', 'fa-caret-right');
        this.appendChild(icon);
      }
      
      if (skillContent.style.display === 'block') {
        if (this.querySelector('i')) {
          this.querySelector('i').classList.replace('fa-caret-right', 'fa-caret-down');
        }
      } else {
        if (this.querySelector('i')) {
          this.querySelector('i').classList.replace('fa-caret-down', 'fa-caret-right');
        }
      }
    });
    
    // Initialize: Add arrow icon to all buttons
    if (!button.querySelector('i')) {
      var icon = document.createElement('i');
      icon.classList.add('fa-solid', 'fa-caret-right');
      button.appendChild(icon);
    }
    
    // Hide all skill content initially
    var content = button.nextElementSibling;
    content.style.display = 'none';
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