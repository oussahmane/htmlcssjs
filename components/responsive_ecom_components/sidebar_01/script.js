document.addEventListener('DOMContentLoaded', () => {
    // Select sidebar elements
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebarClose = document.getElementById('sidebar-close');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    
    // Toggle sidebar function
    const toggleSidebar = () => {
        sidebar.classList.toggle('active');
        sidebarOverlay.classList.toggle('active');
        
        // Prevent body scroll when sidebar is open on mobile
        if (sidebar.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    // Event listeners
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', toggleSidebar);
    }
    
    if (sidebarClose) {
        sidebarClose.addEventListener('click', toggleSidebar);
    }
    
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', toggleSidebar);
    }

    /**
     * Accordion Logic for Submenus
     * Toggles the 'open' class on list items with submenus
     */
    const submenuToggles = document.querySelectorAll('.submenu-toggle');
    
    submenuToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const parent = toggle.parentElement;
            
            // Close other open submenus (Optional, makes it an accordion)
            const openSubmenus = document.querySelectorAll('.has-submenu.open');
            openSubmenus.forEach(menu => {
                if (menu !== parent) {
                    menu.classList.remove('open');
                }
            });

            // Toggle current submenu
            parent.classList.toggle('open');
            
            // Force Lucide icons to update if any dynamic changes (usually not needed for rotate)
            // lucide.createIcons(); 
        });
    });

    /**
     * Active Link Highlighting
     */
    const navLinks = document.querySelectorAll('.nav-links li a:not(.submenu-toggle)');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove active from all
            document.querySelectorAll('.nav-links li').forEach(li => li.classList.remove('active'));
            // Add to parent
            link.parentElement.classList.add('active');
            
            // Auto-close sidebar on mobile after clicking a link
            if (window.innerWidth <= 1024 && sidebar.classList.contains('active')) {
                toggleSidebar();
            }
        });
    });

    console.log('Pexilio Premium Sidebar: Initialized successfully.');
});
