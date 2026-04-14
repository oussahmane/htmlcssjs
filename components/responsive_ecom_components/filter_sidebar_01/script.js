document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Drawer Logic
    const sidebar = document.getElementById('filter-sidebar');
    const overlay = document.getElementById('overlay');
    const trigger = document.getElementById('mobile-filter-btn');
    const closeBtn = document.getElementById('filter-close');

    const toggleSidebar = (state) => {
        sidebar.classList.toggle('active', state);
        overlay.classList.toggle('active', state);
        document.body.style.overflow = state ? 'hidden' : '';
    };

    if(trigger) trigger.onclick = () => toggleSidebar(true);
    if(closeBtn) closeBtn.onclick = () => toggleSidebar(false);
    if(overlay) overlay.onclick = () => toggleSidebar(false);

    // 2. Section Accordion Logic
    const sections = document.querySelectorAll('.section-title');
    sections.forEach(header => {
        header.onclick = () => {
            const section = header.parentElement;
            section.classList.toggle('collapsed');
        };
    });

    // 3. Price Range Slider Logic
    const rangeInput = document.querySelectorAll('.range-slider input');
    const priceInput = document.querySelectorAll('.price-input');
    const track = document.querySelector('.slider-track');
    let priceGap = 500;

    const updateSlider = () => {
        let minVal = parseInt(rangeInput[0].value);
        let maxVal = parseInt(rangeInput[1].value);

        if (maxVal - minVal < priceGap) {
            if (event.target.className === "input-min") {
                rangeInput[0].value = maxVal - priceGap;
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            track.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            track.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    };

    rangeInput.forEach(input => {
        input.addEventListener('input', updateSlider);
    });

    // Fix initial track position
    updateSlider();

    // 4. Color Swatch Radio-like selection
    const colorItems = document.querySelectorAll('.color-item');
    colorItems.forEach(item => {
        const input = item.querySelector('input');
        input.onchange = () => {
            // If you want radio behavior for colors:
            colorItems.forEach(i => i.classList.remove('active'));
            if(input.checked) item.classList.add('active');
        };
    });

});
