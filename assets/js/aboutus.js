// Form Validation Function
function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !subject || !message) {
    alert("All fields are required.");
    return false;
  }
  alert("Message Sent Successfully!");
  return true;
}

// Optional: Feather Icons Initialization
feather.replace();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default behavior

    // Scroll to the target section smoothly
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Function to toggle the virtual tour modal
document.getElementById('tourBtn').addEventListener('click', function() {
  // Create a new modal element dynamically
  const modal = document.createElement('div');
  modal.classList.add('modal', 'fade');
  modal.setAttribute('id', 'virtualTourModal');
  modal.setAttribute('tabindex', '-1');
  modal.setAttribute('aria-labelledby', 'virtualTourModalLabel');
  modal.setAttribute('aria-hidden', 'true');

  // Create modal dialog
  modal.innerHTML = `
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="virtualTourModalLabel">Virtual Tour</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowfullscreen></iframe>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  `;

  // Append the modal to the body
  document.body.appendChild(modal);

  // Show the modal
  var myModal = new bootstrap.Modal(modal);
  myModal.show();

  // Remove the modal from the DOM when it's closed
  modal.addEventListener('hidden.bs.modal', function () {
    modal.remove();
  });
});

// Smooth scroll for Quick Links
document.querySelectorAll('footer .list-unstyled a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();  // Prevent default link behavior
    
    // Scroll to the section with a smooth animation
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Core Values Section Animation
document.addEventListener("DOMContentLoaded", function() {
  const coreValuesSection = document.getElementById('coreValues');
  
  if (coreValuesSection) {
    window.addEventListener('scroll', function() {
      const position = coreValuesSection.getBoundingClientRect();
      
      if (position.top <= window.innerHeight && position.bottom >= 0) {
        coreValuesSection.classList.add('animate__fadeIn');
      }
    });
  }
});


  // Enable Bootstrap tooltips
  document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  });

