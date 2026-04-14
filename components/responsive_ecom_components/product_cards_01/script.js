document.addEventListener('DOMContentLoaded', () => {
    // 1. Wishlist Toggle Logic
    const wishlistBtns = document.querySelectorAll('.wishlist-btn');
    
    wishlistBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            btn.classList.toggle('active');
            
            // Re-render icons to show active state if needed (or use class for color)
            const icon = btn.querySelector('i');
            if (btn.classList.contains('active')) {
                icon.style.fill = 'currentColor';
                console.log('Pexilio Cards: Item added to wishlist.');
            } else {
                icon.style.fill = 'none';
                console.log('Pexilio Cards: Item removed from wishlist.');
            }
        });
    });

    // 2. Add to Cart Feedback
    const cartBtns = document.querySelectorAll('.add-to-cart');
    
    cartBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const originalText = btn.innerHTML;
            
            // Visual feedback
            btn.innerHTML = '<i data-lucide="check"></i> Added!';
            btn.style.background = '#10b981'; // Success green
            btn.style.borderColor = '#10b981';
            lucide.createIcons();

            console.log('Pexilio Cards: Item added to cart.');

            // Revert after 2 seconds
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
                btn.style.borderColor = '';
                lucide.createIcons();
            }, 2000);
        });
    });

    // 3. Quick View Interaction
    const quickViewBtns = document.querySelectorAll('.quick-view');
    quickViewBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const title = btn.closest('.product-card').querySelector('.title').textContent;
            alert(`Quick view for: ${title}`);
        });
    });

    console.log('Pexilio Product Cards: Components initialized.');
});
