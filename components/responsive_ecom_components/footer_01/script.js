document.addEventListener('DOMContentLoaded', () => {
    // Select Newsletter elements
    const newsletterForm = document.getElementById('newsletter-form');
    const newsletterStatus = document.getElementById('newsletter-status');

    if (!newsletterForm || !newsletterStatus) {
        console.error('Pexilio Footer: Essential elements missing from DOM.');
        return;
    }

    /**
     * Handle Newsletter Submission
     * Simulates a successful subscription with feedback
     */
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value;
        const submitBtn = newsletterForm.querySelector('.btn-subscribe');

        if (!email) return;

        // Visual feedback
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';
        newsletterStatus.textContent = 'Subscribing...';
        newsletterStatus.style.color = 'var(--text-muted)';

        // Simulate API call
        setTimeout(() => {
            newsletterStatus.textContent = 'Success! Welcome to Pexilio.';
            newsletterStatus.style.color = '#10b981'; // Success green
            emailInput.value = '';
            
            // Re-enable after a delay
            setTimeout(() => {
                newsletterStatus.textContent = '';
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
            }, 3000);
        }, 1500);
    });

    /**
     * Add hover sound or micro-interaction logic here if needed
     * Currently focuses on the functional newsletter component.
     */
    console.log('Pexilio Premium Footer: Initialized successfully.');
});
