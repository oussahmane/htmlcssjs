document.addEventListener('DOMContentLoaded', () => {
    // 1. Drawer Toggle Logic
    const cartDrawer = document.getElementById('cart-drawer');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartOpenBtn = document.getElementById('cart-open');
    const cartCloseBtn = document.getElementById('cart-close');
    const cartContinueBtn = document.getElementById('cart-continue');

    const toggleCart = () => {
        cartDrawer.classList.toggle('active');
        cartOverlay.classList.toggle('active');
        
        if (cartDrawer.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    if (cartOpenBtn) cartOpenBtn.addEventListener('click', toggleCart);
    if (cartCloseBtn) cartCloseBtn.addEventListener('click', toggleCart);
    if (cartOverlay) cartOverlay.addEventListener('click', toggleCart);
    if (cartContinueBtn) cartContinueBtn.addEventListener('click', toggleCart);

    // 2. Quantity Picker Logic
    const updateQuantity = (btn, delta) => {
        const qtyVal = btn.parentElement.querySelector('.qty-val');
        let currentQty = parseInt(qtyVal.textContent);
        currentQty = Math.max(1, currentQty + delta);
        qtyVal.textContent = currentQty;
        
        // Potential logic for updating prices/subtotal here
        console.log(`Pexilio Cart: Quantity updated to ${currentQty}`);
    };

    document.querySelectorAll('.qty-btn.inc').forEach(btn => {
        btn.addEventListener('click', () => updateQuantity(btn, 1));
    });

    document.querySelectorAll('.qty-btn.dec').forEach(btn => {
        btn.addEventListener('click', () => updateQuantity(btn, -1));
    });

    // 3. Remove Item Logic
    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.cart-item');
            item.style.opacity = '0';
            item.style.transform = 'translateX(20px)';
            
            setTimeout(() => {
                item.remove();
                // Check if cart is empty
                if (document.querySelectorAll('.cart-item').length === 0) {
                    document.querySelector('.cart-empty').style.display = 'flex';
                }
                console.log('Pexilio Cart: Item removed.');
            }, 300);
        });
    });

    console.log('Pexilio Mini-Cart: Initialized successfully.');
});
