document.addEventListener('DOMContentLoaded', () => {
    // Select elements
    const navbar = document.getElementById('navbar');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebarClose = document.getElementById('sidebar-close');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');

    if (!sidebar || !sidebarToggle || !sidebarOverlay) {
        console.error('Pexilio Navbar: Essential elements missing from DOM.');
        return;
    }

    /**
     * Toggles the mobile sidebar state
     */
    const toggleSidebar = () => {
        sidebar.classList.toggle('active');
        sidebarOverlay.classList.toggle('active');
        
        // Prevent body scrolling when sidebar is open
        if (sidebar.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    // Event Listeners for Sidebar
    sidebarToggle.addEventListener('click', (e) => {
        e.preventDefault();
        toggleSidebar();
    });

    if (sidebarClose) {
        sidebarClose.addEventListener('click', (e) => {
            e.preventDefault();
            toggleSidebar();
        });
    }

    sidebarOverlay.addEventListener('click', toggleSidebar);

    /**
     * Navbar Scroll Effect
     * Adds a background and reduces height when scrolling
     */
    const handleScroll = () => {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    /**
     * Close Sidebar on Link Click (Smooth UX)
     */
    const sidebarLinks = document.querySelectorAll('.sidebar-links li a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (sidebar.classList.contains('active')) {
                toggleSidebar();
            }
        });
    });

    // Initialize search interaction (Optional: clear on focus, etc.)
    const searchInputs = document.querySelectorAll('input[type="text"]');
    searchInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        input.addEventListener('blur', () => {
            input.parentElement.classList.remove('focused');
        });
    });

    console.log('Pexilio Premium Navbar: Initialized successfully.');
});
