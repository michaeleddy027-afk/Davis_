// Get form element
const form = document.getElementById('claimForm');
const submitButton = document.querySelector('.claim-button');

// Form submission handler
form.addEventListener('submit', function(e) {
    // Disable the button to prevent multiple submissions
    submitButton.disabled = true;
    submitButton.textContent = 'Submitting...';
    
    // The form will submit naturally to FormSubmit.co
    // No need to prevent default as we want the native form submission
});

// Optional: Add input validation feedback
const inputs = document.querySelectorAll('input[required]');

inputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value.trim() === '') {
            this.style.borderColor = '#ff6b6b';
        } else {
            this.style.borderColor = '#e0e0e0';
        }
    });

    input.addEventListener('input', function() {
        if (this.style.borderColor === 'rgb(255, 107, 107)') {
            this.style.borderColor = '#e0e0e0';
        }
    });
});

// Optional: UID validation (numbers only)
const uidInput = document.getElementById('uid');
if (uidInput) {
    uidInput.addEventListener('input', function(e) {
        // Remove any non-numeric characters
        this.value = this.value.replace(/[^0-9]/g, '');
    });
}
