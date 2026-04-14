document.addEventListener('DOMContentLoaded', () => {
    const gridItems = document.querySelectorAll('.grid-item');

    /**
     * Staggered Entrance Animation
     * Adds the 'animate' class to grid items sequentially
     */
    const animateGridItems = () => {
        gridItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('animate');
            }, index * 100); // 100ms stagger between each item
        });
    };

    // Run animation on load
    animateGridItems();

    /**
     * Grid Control Logic (Simulation)
     */
    const controlBtns = document.querySelectorAll('.control-btn');
    controlBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            controlBtns.forEach(b => b.classList.add('ghost'));
            btn.classList.remove('ghost');
            console.log(`Pexilio Grid: Switched to ${btn.title}`);
        });
    });

    /**
     * Pagination Handling (Simulation)
     */
    const pageBtns = document.querySelectorAll('.page-btn');
    pageBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('active') || btn.innerHTML.includes('chevron')) return;
            
            pageBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Re-trigger animation to simulate page load
            gridItems.forEach(item => item.classList.remove('animate'));
            setTimeout(animateGridItems, 300);
            
            console.log(`Pexilio Grid: Loaded page ${btn.textContent}`);
        });
    });

    console.log('Pexilio Product Grid: Initialized successfully.');
});
